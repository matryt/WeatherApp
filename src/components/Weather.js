import React, { useState } from 'react';
import { View, TextInput, ScrollView, Text, Image } from 'react-native';
import {DisplayDate, DisplayTime} from "./VerticalText"
import { styles } from "../styles"
import Button from "./Button"
import {getMockFill} from "../tests/mockApi";
import Line from "./Line"
import {getRawData, fillContent} from "../services/openMeteoApi";
import {getCoordinates} from "../services/geocodingApi";
import {useFonts} from "expo-font";
import {QuattrocentoSans_400Regular} from "@expo-google-fonts/quattrocento-sans";
import {Oswald_600SemiBold} from "@expo-google-fonts/oswald";
import {WindVisual, TemperatureVisual, PrecipitationsVisual} from "./Visuals";


const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [dailyData, setDailyData] = useState([]);
    const [hourlyData, setHourlyData] = useState([]);
    const fontsLoaded = useFonts({
        QuattrocentoSans_400Regular,
        Oswald_600SemiBold
    })

    const handleMeteo = async () => {
        let coordinates = await getCoordinates(city);
        fillContent(await getRawData(coordinates[0], coordinates[1]), setWeatherData, setDailyData, setHourlyData);
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
                        <Text style={styles.text}>{weatherData.temp}°C - {weatherData.weather}</Text>
                        <Text style={styles.text}>Précipitations : {weatherData.precipitation}mm</Text>
                        <Text style={styles.text}>Vent : {weatherData.wind_speed} km/h - {weatherData.wind_direction}</Text>
                    </View>
                )}
            </View>

                <View style={[styles.box, styles.forecasts]}>
                    <Text style={[styles.text, styles.boxTitle]}>Journée</Text>
                    {hourlyData && hourlyData.length >  0 && (
                        <View style={styles.scrollView}>
                            {hourlyData.map((item, index) => (
                                <View>
                                    <View style={styles.item} key={index}>
                                        <DisplayTime time={new Date(item.time*1000).toLocaleTimeString('fr-FR', { timeZone: hourlyData[0].timezone})} />
                                        <Image source={item.weatherImage} style={styles.weatherImage} />
                                        <WindVisual windDirection={item.wind_direction} windSpeed={item.wind_speed}/>
                                        <TemperatureVisual minTemp={item.temp} maxTemp={""} />
                                        <View style={{width: 250}}>
                                            <Text style={styles.text}>{item.temp}°C - Vent : {item.wind_speed} km/h ({item.wind_direction}) </Text>
                                            <Text style={styles.text}>Précip. : {item.precipitation}mm (Proba : {item.precipitation_prob}%)</Text>
                                        </View>

                                    </View>
                                    {index !== hourlyData.length - 1 && (
                                        <Line/>
                                    )}
                                </View>
                            ))}
                        </View>
                    )}
                </View>
                <View style={[styles.box, styles.forecasts]}>
                    <Text style={[styles.text, styles.boxTitle]}>Jours prochains</Text>
                    {dailyData && dailyData.length >  0 && (
                        <View style={styles.scrollView}>
                            {dailyData.map((item, index) => (
                                <View>
                                    <View style={styles.item} key={index}>
                                        <DisplayDate date={new Date(item.time*1000).toLocaleDateString('fr-FR', { timeZone: dailyData.timezone, day: "2-digit", month:"2-digit"} )}></DisplayDate>
                                        <Image source={item.weatherImage} style={styles.weatherImage} />
                                        <WindVisual windDirection={item.wind_direction} windSpeed={item.wind_speed}/>
                                        <TemperatureVisual minTemp={item.min_temp} maxTemp={item.max_temp} />
                                        <PrecipitationsVisual precipQuantity={item.precipitation} />
                                        <View style={{width: 200}}>
                                        </View>
                                    </View>
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