import React from 'react';
import {ScrollView} from 'react-native';
import Weather from './src/components/Weather';
import {useFonts} from "expo-font"
import {QuattrocentoSans_400Regular} from "@expo-google-fonts/quattrocento-sans";
import {Oswald_600SemiBold} from "@expo-google-fonts/oswald";
import {styles} from "./src/styles"

export default function App() {
    const fontsLoaded = useFonts({
        QuattrocentoSans_400Regular,
        Oswald_600SemiBold
    });
  return (
      <ScrollView style={styles.app}>
        <Weather />
      </ScrollView>
  );
}