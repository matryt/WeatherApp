import { Alert } from "react-native";

const apiKey = process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY;

const roundTemp = (temp) => {
    let trunc = Math.trunc(temp);
    if (temp - trunc < 0.5) {
        return trunc;
    }
    return trunc + 0.5;
}

export const getWeather = async (city, setWeatherData) => {
    try {
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

export const getHourlyForecast = async (city, setForecastData) => {
    let hoursRemaining = 23 - new Date().getUTCHours();
    let count = Math.round(hoursRemaining / 3);
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=fr&cnt=${count}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod && data.cod !== '200') {
            throw new Error(data.message || 'Échec de la récupération des prévisions');
        }
        let forecast = data.list
        for (let i = 0; i < forecast.length; i++) {
            forecast[i].main.temp = roundTemp(forecast[i].main.temp - 273.15);
        }

        setForecastData(forecast);
    } catch (error) {
        console.error('Erreur lors de la récupération des prévisions:', error.message);
        Alert.alert('Erreur', 'Échec de la récupération des prévisions. Veuillez réessayer.');
    }
};

export const getDailyForecast = async (city, setDailyForecastData) => {
    try {
        const apiUrl = "https://api.openweathermap.org/data/2.5/forecast/daily"
    } catch (error) {
        console.error('Erreur lors de la récupération des prévisions:', error.message);
        Alert.alert('Erreur', 'Échec de la récupération des prévisions. Veuillez réessayer.');
    }
}
