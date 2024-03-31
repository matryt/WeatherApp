import {Alert} from "react-native";

export const getRawData = async (city) => {
    try {
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.long}&current=temperature_2m,precipitation,weather_code,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,precipitation_probability,precipitation,weather_code,wind_speed_10m,wind_direction_10m,uv_index&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_sum,wind_speed_10m_max,wind_direction_10m_dominant&timeformat=unixtime&timezone=auto`;
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

