import React from 'react';
import { View, Image, Text } from 'react-native';
import {styles} from "../styles";

export const TemperatureVisual = ({minTemp, maxTemp}) => {
    return (
        <View style={styles.tempContainer}>
            <Image style={styles.tempImage} source={require("../img/thermometre.png")}></Image>
            <View>
                {maxTemp!=="" && (<Text style={[styles.text, styles.windText]}>{maxTemp}°C</Text>)}
                <Text style={[styles.text, styles.windText, {marginTop: 17}]}>{minTemp}°C</Text>
            </View>
        </View>
    );
};

export const WindVisual = ({windDirection, windSpeed}) => {
    return (
        <View style={styles.windContainer}>
            <Image style={styles.windImage} source={require("../img/vent.png")}></Image>

            <Text style={[styles.text, styles.windText]}>{windDirection}</Text>
            <Text style={[styles.text, styles.windText]}>{windSpeed} km/h</Text>
        </View>
    );
};

export const PrecipitationsVisual = ({precipQuantity}) => {
    return (
        <View style={styles.precipContainer}>
            <Image style={styles.precipImage} source={require("../img/precip.png")}></Image>
            <Text style={[styles.text, styles.precipText]}>{precipQuantity} mm</Text>
        </View>
    );
};