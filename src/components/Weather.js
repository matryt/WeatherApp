import React, { useState } from 'react';
import { View, TextInput, ScrollView, Text, Pressable } from 'react-native';
import { getWeather, getHourlyForecast } from '../services/legacyApi';
import { styles } from "../styles"
import Button from "./Button"
import {getMockWeather, getMockForecast} from "../tests/mockApi";
import Line from "./Line"


const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState([]);

    const handleMeteo = async () => {
        await getWeather(city, setWeatherData, setForecastData);
        await getHourlyForecast(city, setWeatherData, setForecastData);
    }

    const handleMockMeteo = () => {
        getMockWeather(setWeatherData);
        getMockForecast(setForecastData);
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
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
            <View style={[styles.box, styles.actual]}>
                <Text style={[styles.text, styles.boxTitle]}>Actuellement</Text>
                {weatherData && (
                    <View style={styles.scrollView}>
                        <Text style={styles.text}>{weatherData.temperature}°C - {weatherData.description}</Text>
                    </View>
                )}
            </View>
            <View style={styles.meteoDisplay}>

                <View style={[styles.box, styles.forecasts, styles.hours]}>
                    <Text style={[styles.text, styles.boxTitle]}>Journée</Text>
                    {forecastData && forecastData.length >  0 && (
                        <View style={styles.scrollView}>
                            {forecastData.map((item, index) => (
                                <View key={index}>
                                    <Text style={styles.text}>{new Date(item.dt *  1000).toLocaleTimeString()}</Text>
                                    <Text style={styles.text}>{item.main.temp}°C - {item.weather[0].description}</Text>
                                    {index !== forecastData.length - 1 && (
                                        <Line/>
                                    )}
                                </View>
                            ))}
                        </View>
                    )}
                </View>
                <View style={[styles.box, styles.forecasts, styles.days]}>
                    <Text style={[styles.text, styles.boxTitle]}>Jours prochains</Text>
                    {weatherData && (
                        <View style={styles.scrollView}>
                            <Text style={styles.text}>{weatherData.temperature}°C - {weatherData.description}</Text>
                        </View>
                    )}
                </View>
            </View>
        </ScrollView>
    );
};

export default Weather;