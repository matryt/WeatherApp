import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Weather from './src/components/Weather';
import {useFonts} from "expo-font";
import {QuattrocentoSans_400Regular} from "@expo-google-fonts/quattrocento-sans";
import {Oswald_600SemiBold} from "@expo-google-fonts/oswald";
import {styles} from "./src/styles";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CityManagement from './src/components/CityManagement';
import CityContext from './src/services/CityContext';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCloudMoonRain} from "@fortawesome/free-solid-svg-icons/faCloudMoonRain";
import {faMountainCity} from "@fortawesome/free-solid-svg-icons/faMountainCity";

const Tab = createBottomTabNavigator();

const App = () => {
    const fontsLoaded = useFonts({
        QuattrocentoSans_400Regular,
        Oswald_600SemiBold
    });
    const [cities, setCities] = useState([]);

    return (
        <CityContext.Provider value={{ cities, setCities }}>
            <NavigationContainer>
                <Tab.Navigator screenOptions={styles} tabBarOptions={{ showIcon: true }}>
                    <Tab.Screen name="Météo" component={Weather} options={{ tabBarIcon:(tabInfo) => (<FontAwesomeIcon size={18} color={tabInfo.color}  icon={faCloudMoonRain}/>)}}/>
                    <Tab.Screen name="Villes" component={CityManagement} options={{ tabBarIcon:(tabInfo) => (<FontAwesomeIcon size={18} color={tabInfo.color}  icon={faMountainCity}/>)}}/>
                </Tab.Navigator>
            </NavigationContainer>
        </CityContext.Provider>
    );
};

export default App;
