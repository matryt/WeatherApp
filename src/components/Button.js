import React from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from "../styles"

export default function Button(props) {
    const { onPress, title = 'Save' } = props;
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={[styles.text, styles.buttonText]}>{title}</Text>
        </Pressable>
    );
}