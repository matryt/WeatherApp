import React, { useState } from 'react';
import { View, TextInput, ScrollView, Text, Pressable } from 'react-native';
import { getWeather, getForecast } from '../services/api';
import { styles } from "../styles"
import Button from "./Button"
import {getMockWeather, getMockForecast} from "../tests/mockApi";


const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState([]);

    const handleMeteo = async () => {
        await getWeather(city, setWeatherData, setForecastData);
        await getForecast(city, setWeatherData, setForecastData);
    }

    const handleMockMeteo = () => {
        getMockWeather(setWeatherData);
        getMockForecast(setForecastData);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Entrez une ville..."
                value={city}
                onChangeText={setCity}
            />
            <Button onPress={handleMeteo} title="Rechercher..."></Button>
            {__DEV__ && (<Button onPress={handleMockMeteo} title="Test"></Button>)}
            <View>

            </View>
            <View style={styles.meteoDisplay}>
                <View style={[styles.meteoBox, styles.now]}>
                    {weatherData && (
                        <ScrollView style={styles.scrollView}>
                            <Text style={styles.text}>Température: {weatherData.temperature}°C</Text>
                            <Text style={styles.text}>Description: {weatherData.description}</Text>
                        </ScrollView>
                    )}
                </View>
                <View style={[styles.meteoBox, styles.forecasts]}>
                    {forecastData && forecastData.length >  0 && (
                        <ScrollView style={styles.scrollView}>
                            {forecastData.map((item, index) => (
                                <View key={index}>
                                    <Text style={styles.text}>Heure: {new Date(item.dt *  1000).toLocaleTimeString()}</Text>
                                    <Text style={styles.text}>Température: {item.main.temp}°C</Text>
                                    <Text style={styles.text}>Description: {item.weather[0].description}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    )}
                </View>
            </View>
        </View>
    );
};

export default Weather;