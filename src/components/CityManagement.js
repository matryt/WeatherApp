import React, {useContext, useState} from 'react';
import {View, Text, TextInput, FlatList, Alert, Pressable} from 'react-native';
import { City } from "../objects/City"
import {styles} from "../styles";
import Button from "./Button"
import Line from "./Line";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faSquareMinus} from "@fortawesome/free-solid-svg-icons/faSquareMinus";
import {storage} from "../services/MMKVCities";

const CityManagement = () => {
    const [cities, setCities] = useState(JSON.parse(storage.getString("cities")));
    const [newCityName, setNewCityName] = useState('');

    const addCity = async () => {
        try {
            const newCity = await new City(newCityName);
            const updatedCities = [...cities, newCity];
            storage.set("cities", JSON.stringify(updatedCities));
            setCities(updatedCities);
            setNewCityName('');
        } catch {
            Alert.alert("Ville inconnue !");
        }
    };

    const deleteCity = (cityId) => {
        const updatedCities = cities.filter(city => city.id !== cityId);
        storage.set("cities", JSON.stringify(updatedCities));
        setCities(updatedCities); // Mettre à jour l'état local pour refléter les changements
    };

    const renderItem = ({ item }) => (
        <>
            <View style={styles.cityBox}>
                <View style={{ width: 260 }}>
                    <Text style={[styles.text]}>{item.nom}</Text>
                    <Text style={[styles.text]}>Latitude: {item.lat}</Text>
                    <Text style={[styles.text]}>Longitude: {item.long}</Text>
                </View>
                <Pressable onPress={() => deleteCity(item.id)} style={{ marginVertical: 10 }}>
                    <FontAwesomeIcon size={36} color="#b2f7ef" icon={faSquareMinus} />
                </Pressable>
            </View>
            <Line />
        </>
    );

    return (
        <View>
            <TextInput
                value={newCityName}
                onChangeText={setNewCityName}
                placeholder="Nom de la ville"
                style={[styles.text, styles.searchCity]}
            />
            <Button title="Ajouter une ville" onPress={addCity} />
            <FlatList
                data={cities}
                renderItem={renderItem}
                keyExtractor={(item) => item.nom}
                style={[styles.box, styles.cityBoxes]}
            />
        </View>
    );
};

export default CityManagement;