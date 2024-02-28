import {Alert} from "react-native";
import {descriptions} from "../components/weatherDescriptions"

export const getRawData = async (latitude, longitude) => {
    try {
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,precipitation,weather_code,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,precipitation_probability,precipitation,weather_code,wind_speed_10m,wind_direction_10m,uv_index&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_sum,wind_speed_10m_max,wind_direction_10m_dominant&timeformat=unixtime&timezone=auto`;
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

const getCurrentWeather = (data) => {
    let currentData = data.current;
    return {
        "temp":currentData.temperature_2m,
        "precipitation": currentData.precipitation,
        "weather": getWeatherDescription(currentData.weather_code),
        "wind_speed": currentData.wind_speed_10m,
        "wind_direction": getWindDirection(currentData.wind_direction_10m),
        "UV_index": currentData.uv_index,
        "time": currentData.time
    }
}

const getHourlyForecast = (data) => {
    let hourlyData = data.hourly;
    let result = [];
    let index = 0;
    while (hourlyData.time[index] < data.current.time) {
        index++;
    }
    for (let i = index; i < 24; i++) {
        let values = {"temp":hourlyData.temperature_2m[i],
            "precipitation_prob":hourlyData.precipitation_probability[i],
            "precipitation": hourlyData.precipitation[i],
            "weather": getWeatherDescription(hourlyData.weather_code[i]),
            "wind_speed": hourlyData.wind_speed_10m[i],
            "wind_direction": getWindDirection(hourlyData.wind_direction_10m[i]),
            "UV_index": hourlyData.uv_index[i],
            "time": hourlyData.time[i],
            "timezone": data.timezone
        }
        result.push(values);
    }
    return result;
}

const getDailyForecast = (data) => {
    let dailyData = data.daily;
    let result = [];
    for (let i = 1; i < 7; i++) {
        let values = {
            "precipitation": dailyData.precipitation_sum[i],
            "min_temp": dailyData.temperature_2m_min[i],
            "max_temp": dailyData.temperature_2m_max[i],
            "weather": getWeatherDescription(dailyData.weather_code[i]),
            "wind_direction": getWindDirection(dailyData.wind_direction_10m_dominant[i]),
            "wind_speed": dailyData.wind_speed_10m_max[i],
            "time": dailyData.time[i],
            "timezone": data.timezone
        }
        result.push(values);
    }
    return result;
}

const getWeatherDescription = (code) => {
    return descriptions[code.toString()]["description"];
}

const getWindDirection = (angle) => {
    if (angle < 45) return "N";
    if (angle < 90) return "NE";
    if (angle < 135) return "E";
    if (angle < 180) return "SE";
    if (angle < 225) return "S";
    if (angle < 270) return "SO";
    if (angle < 315) return "O";
    return "NO";
}

export const fillContent = (data, setWeatherData, setDailyData, setHourlyData) => {
    setWeatherData(getCurrentWeather(data));
    setHourlyData(getHourlyForecast(data));
    setDailyData(getDailyForecast(data));

}