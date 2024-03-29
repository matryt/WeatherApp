import { Alert } from "react-native";

export const getCoordinates = async (name) => {
    try {
        const apiUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${name}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.results.length === 0) {
            return null;
        }
        console.log([data.results[0].latitude, data.results[0].longitude])
        return [data.results[0].latitude, data.results[0].longitude]
    } catch (error) {
        console.error("Erreur lors de la recherche de la ville demandée : aucun résultat");
        Alert.alert("Erreur", "Erreur lors de la recherche de la ville demandée : aucun résultat");
        return null;
    }
}