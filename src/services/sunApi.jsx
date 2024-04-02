import { Alert } from "react-native";

const apiKey = process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY;

export const getSunTimes = async (city) => {
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.long}&appid=${apiKey}`
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod && data.cod !==  200) {
            Alert.alert("Erreur", data.message || 'Échec de la récupération des données météorologiques');
        }

        return [data.sys.sunrise, data.sys.sunset]
    } catch (error) {
        console.error('Erreur lors de la récupération des données météorologiques:', error.message);
        Alert.alert('Erreur', 'Échec de la récupération des données météorologiques. Veuillez réessayer.');
    }
};
