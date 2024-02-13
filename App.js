import React, {Component} from 'react';
import { View } from 'react-native';
import Weather from './src/components/Weather';

export default function App() {
  return (
      <View style={{ flex:  1 }}>
        <Weather />
      </View>
  );
}