import React, {useContext, useEffect, useState} from 'react';
import { View, TextInput, ScrollView, Text, Image } from 'react-native';
import {DisplayDate, DisplayTime} from "./VerticalText"
import { styles } from "../styles"
import Button from "./Button"
import {getMockFill} from "../tests/mockApi";
import Line from "./Line"
import {getRawData} from "../services/openMeteoApi";
import {getCoordinates} from "../services/geocodingApi";
import {useFonts} from "expo-font";
import {QuattrocentoSans_400Regular} from "@expo-google-fonts/quattrocento-sans";
import {Oswald_600SemiBold} from "@expo-google-fonts/oswald";
import {WindVisual, TemperatureVisual, PrecipitationsVisual} from "./Visuals";
import SelectDropdown from "react-native-select-dropdown"
import {storage} from "../modules/MMKVCities";
import {fillContent} from "../modules/processData"
import {getSunTimes} from "../services/sunApi";


const Weather = () => {
    const [cities, setCities] = useState([]);
    //let cities = JSON.parse(storage.getString("cities"));
    const [selectedCity, setSelectedCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [dailyData, setDailyData] = useState([]);
    const [hourlyData, setHourlyData] = useState([]);
    const fontsLoaded = useFonts({
        QuattrocentoSans_400Regular,
        Oswald_600SemiBold
    });

    useEffect(() => {
        // Initialisez les villes ici
        setCities(JSON.parse(storage.getString("cities")));

        // Ajoutez un écouteur pour la clé des villes
        const listener = storage.addOnValueChangedListener((changedKey) => {
            if (changedKey === "cities") {
                console.log("Key changed !")
                setCities(JSON.parse(storage.getString(changedKey)));
            }
        });

        // N'oubliez pas de supprimer l'écouteur lorsque le composant est démonté
        return () => {
            listener.remove();
        };
    }, []);

    const handleMeteo = async () => {
        if (selectedCity != null) {
            fillContent(await getRawData(selectedCity), await getSunTimes(selectedCity), setWeatherData, setDailyData, setHourlyData);
                    }
        }

    const handleMockMeteo = async () => {
        getMockFill(setWeatherData, setHourlyData, setDailyData)
    }

    const handleCitySelection = (city) => {
        setSelectedCity({ ...city });
    };


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.dropdown}>
                <SelectDropdown
                    data={cities}
                    onSelect={(selectedCity) => handleCitySelection(selectedCity)}
                    closeMenuOnSelect={false}
                    renderButton={(selectedItem) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[styles.text, {margin: 0}]}>{selectedItem ? selectedItem.nom : 'Sélectionnez une ville'}</Text>
                        </View>
                    )}
                    renderItem={(item, index, isSelected) => (
                        <>
                        <View style={{ padding: 10, ...(isSelected && {backgroundColor: '#b2f7ef'}) }}>
                            <Text style={[styles.text, {margin: 0, ...(isSelected && {color: '#3e8989', fontWeight: "bold",})}]}>{item.nom}</Text>
                        </View>
                        <Line />
                        </>
                    )}
                    dropdownStyle={styles.dropdown}

                />
            </View>
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
                                <View key={index}>
                                    <View style={styles.item}>
                                        <DisplayTime time={new Date(item.time*1000).toLocaleTimeString('fr-FR', { timeZone: hourlyData[0].timezone})} />
                                        <Image source={item.weatherImage} style={styles.weatherImage} />
                                        <WindVisual windDirection={item.wind_direction} windSpeed={item.wind_speed}/>
                                        <TemperatureVisual minTemp={item.temp} maxTemp={""} />
                                        <PrecipitationsVisual precipQuantity={item.precipitation} prob={item.precipitation_prob}/>
                                        <View style={{width: 200}}>
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
                                <View key={index}>
                                    <View style={styles.item} >
                                        <DisplayDate date={new Date(item.time*1000).toLocaleDateString('fr-FR', { timeZone: dailyData.timezone, day: "2-digit", month:"2-digit"} )}></DisplayDate>
                                        <Image source={item.weatherImage} style={styles.weatherImage} />
                                        <WindVisual windDirection={item.wind_direction} windSpeed={item.wind_speed}/>
                                        <TemperatureVisual minTemp={item.min_temp} maxTemp={item.max_temp} />
                                        <PrecipitationsVisual precipQuantity={item.precipitation}/>
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