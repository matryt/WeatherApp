import React, { useState } from 'react';
import { View, TextInput, ScrollView, Text, Pressable } from 'react-native';
import { getWeather, getHourlyForecast } from '../services/legacyApi';
import { styles } from "../styles"
import Button from "./Button"
import {getMockFill} from "../tests/mockApi";
import Line from "./Line"
import {getRawData, fillContent} from "../services/openMeteoApi";
import {getCoordinates} from "../services/geocodingApi";


const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [dailyData, setDailyData] = useState([]);
    const [hourlyData, setHourlyData] = useState([])

    const handleMeteo = async () => {
        let coordinates = await getCoordinates(city);
        let data = await getRawData(coordinates[0], coordinates[1])
        fillContent(data, setWeatherData, setDailyData, setHourlyData);
    }

    const handleMockMeteo = async () => {
        getMockFill(setWeatherData, setHourlyData, setDailyData)
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

                <View style={[styles.box, styles.forecasts, styles.hours]}>
                    <Text style={[styles.text, styles.boxTitle]}>Journée</Text>
                    {hourlyData && hourlyData.length >  0 && (
                        <View style={styles.scrollView}>
                            {hourlyData.map((item, index) => (
                                <View key={index}>
                                    <Text style={styles.text}>{new Date(item.time*1000).toLocaleTimeString()}</Text>
                                    <Text style={styles.text}>{item.temp}°C - {item.weather}</Text>
                                    <Text style={styles.text}>Précipitations : {item.precipitation}mm (Proba : {item.precipitation_probability}%)</Text>
                                    <Text style={styles.text}>Vent : {item.wind_speed} km/h - {item.wind_direction}°</Text>
                                    {index !== hourlyData.length - 1 && (
                                        <Line/>
                                    )}
                                </View>
                            ))}
                        </View>
                    )}
                </View>
                <View style={[styles.box, styles.forecasts, styles.days]}>
                    <Text style={[styles.text, styles.boxTitle]}>Jours prochains</Text>
                    {dailyData && dailyData.length >  0 && (
                        <View style={styles.scrollView}>
                            {dailyData.map((item, index) => (
                                <View key={index}>
                                    <Text style={styles.text}>{new Date(item.time*1000).toLocaleDateString()}</Text>
                                    <Text style={styles.text}>{item.min_temp}°C à {item.max_temp}°C - {item.weather}</Text>
                                    <Text style={styles.text}>Précipitations : {item.precipitation}mm (Proba : {item.precipitation_probability}%)</Text>
                                    <Text style={styles.text}>Vent : {item.wind_speed} km/h - {item.wind_direction}°</Text>
                                    {index !== dailyData.length - 1 && (
                                        <Line/>
                                    )}
                                </View>
                            ))}
                        </View>
                    )}
                </View>
        </ScrollView>
    );
};

export default Weather;