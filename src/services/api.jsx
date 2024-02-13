import { Alert } from "react-native";

const roundTemp = (temp) => {
    let trunc = Math.trunc(temp);
    if (temp - trunc < 0.5) {
        return trunc;
    }
    return trunc + 0.5;
}

export const getWeather = async (city, setWeatherData, setForecastData) => {
    try {
        const apiKey = '00031a65b49791c459322c0656fc6202'; // Remplacez par votre clé API d'OpenWeatherMap
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=fr`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod && data.cod !==  200) {
            throw new Error(data.message || 'Échec de la récupération des données météorologiques');
        }

        const temperatureKelvin = data.main.temp;
        const temperatureCelsius = (temperatureKelvin -  273.15);
        const description = data.weather[0].description;
        setWeatherData({ temperature: roundTemp(temperatureCelsius), description });
    } catch (error) {
        console.error('Erreur lors de la récupération des données météorologiques:', error.message);
        Alert.alert('Erreur', 'Échec de la récupération des données météorologiques. Veuillez réessayer.');
    }
};

export const getForecast = async (city, setWeatherData, setForecastData) => {
    try {
        const apiKey = '00031a65b49791c459322c0656fc6202'; // Remplacez par votre clé API d'OpenWeatherMap
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=fr`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod && data.cod !== '200') {
            throw new Error(data.message || 'Échec de la récupération des prévisions');
        }

        const forecast = data.list.slice(0,  3); // Obtenez les prévisions pour les prochaines heures
        for (let i = 0; i < forecast.length; i++) {
            forecast[i].main.temp = roundTemp(forecast[i].main.temp - 273.15);
        }

        setForecastData(forecast);
    } catch (error) {
        console.error('Erreur lors de la récupération des prévisions:', error.message);
        Alert.alert('Erreur', 'Échec de la récupération des prévisions. Veuillez réessayer.');
    }
};