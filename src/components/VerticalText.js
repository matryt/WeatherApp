import React from 'react';
import {View, Text} from "react-native";

import {styles} from "../styles";

export const DisplayTime = ({ time }) => {
    const [hour] = time.split(':');
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{hour}</Text>
            <Text style={styles.text}>h</Text>
        </View>
    );
};

export const DisplayDate = ({ date }) => {
    const [day, month] = date.split('/');
    return (
        <View style={[styles.container, styles.infoContainer]}>
            <Text style={styles.text}>{day}</Text>
            <Text style={styles.text}>{month}</Text>
        </View>
    );
};