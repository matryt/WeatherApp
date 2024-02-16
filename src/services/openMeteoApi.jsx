import {Alert} from "react-native";

const getRawData = async (latitude, longitude) => {
    try {
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,precipitation,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m,uv_index&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,wind_speed_10m_max,wind_direction_10m_dominant&timeformat=unixtime&timezone=auto`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.length === 1) {
            throw new Error('Échec de la récupération des données météorologiques');
        }
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données météorologiques:');
        Alert.alert('Erreur', 'Échec de la récupération des données météorologiques. Veuillez réessayer.');
    }
}

const getHourlyForecast = (data) => {
    let hourlyData = data.hourly;
    let result = [];
    let currentHour = new Date().getTime() / 1000;
    let index = 0;
    while (hourlyData.time[index] < currentHour) {
        index++;
    }
    for (let i = index; i < 24; i++) {
        let values = [hourlyData.temperature[index],
            hourlyData.relativeHumidity[index],
            hourlyData.precipitationProbability[index],
            hourlyData.precipitation[index],
            hourlyData.weatherCode[index],
            hourlyData.surfacePressure[index],
            hourlyData.windSpeed[index],
            hourlyData.windDirection[index],
            hourlyData.UVIndex[index]]
        result.push(values);
    }
    return result;
}