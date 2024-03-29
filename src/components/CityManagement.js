import React, {useContext, useState} from 'react';
import {View, Text, TextInput, FlatList, Alert, Pressable} from 'react-native';
import { City } from "../objects/City"
import CityContext from "../services/CityContext";
import {styles} from "../styles";
import Button from "./Button"
import Line from "./Line";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faSquareMinus} from "@fortawesome/free-solid-svg-icons/faSquareMinus";

const CityManagement = () => {
    const { cities, setCities } = useContext(CityContext);
    const [newCityName, setNewCityName] = useState('');

    const addCity = async () => {
        try {
            const newCity = await new City(newCityName);
            setCities([...cities, newCity]);
            setNewCityName('');
        } catch {
            Alert.alert("Ville inconnue !")
        }

    };

    const deleteCity = (cityId) => {
        setCities(cities.filter(city => city.id !== cityId));
    };

    const renderItem = ({ item }) => (
        <><View style={styles.cityBox}>
            <View style={{width: 260}}>
                <Text style={[styles.text]}>{item.nom}</Text>
                <Text style={[styles.text]}>Latitude: {item.lat}</Text>
                <Text style={[styles.text]}>Longitude: {item.long}</Text>
            </View>
            <Pressable onPress={() => deleteCity(item.id)} style={{marginVertical: 10}} >
                <FontAwesomeIcon size={36} color="#b2f7ef" icon={faSquareMinus}/>
            </Pressable>
        </View>
        <Line/>
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
            <Button title="Ajouter une ville" onPress={async() => {
                await addCity();
            }} />
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