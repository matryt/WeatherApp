import { StyleSheet } from "react-native";
import {QuattrocentoSans_400Regular} from "@expo-google-fonts/quattrocento-sans";
import {Oswald_600SemiBold} from "@expo-google-fonts/oswald";

export const styles = StyleSheet.create({
    app: {
        flex: 1,
        paddingVertical: 10
    },
    container: {
        marginTop: "auto",
        justifyContent: 'center',
        paddingHorizontal:  10,
        marginBottom: "auto"
    },
    input: {
        height:  40,
        borderColor: 'gray',
        borderWidth:  2,
        marginBottom:  5,
        marginTop: 10,
        paddingLeft:  10,
        backgroundColor: "#3E8989",
        borderRadius: 15,
        color: "white"
    },
    text: {
        fontSize:  17,
        textAlign: "center",
        margin: "auto",
        fontFamily: "QuattrocentoSans_400Regular",
        color: "white",
    },
    boxTitle: {
        fontSize: 25,
        fontWeight: "bold",
        margin: 0,
        marginBottom: 10,
        fontFamily: "Oswald_600SemiBold",
        color: "#B2F7EF",
        textDecorationLine: "underline"
    },
    box: {
        backgroundColor: "#3E8989",
        width: 320,
        textAlign: "center",
        borderColor: 'gray',
        borderWidth:  2,
        borderRadius: 10
    },
    actual: {
        minHeight: 90,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,
        marginTop: 10
    },
    forecasts: {
        minHeight: 200,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,

    },
    scrollView: {
        display: "flex",
    },
    meteoDisplay: {
        height: 300,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyItems: "center",
        gap: 20
    },
    button: {
        backgroundColor: "#3E8989",
        padding: 5,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', //Centered horizontally,
        height: "fit-content",
        width: "fit-content",
        borderRadius: 5
    },
    buttonText: {
        minHeight: 15,
        maxHeight: 20
    },
    verticalText: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    letter: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 1,
    },
    item: {
        display: "flex",
        flexDirection: "row"
    },
    weatherImage: {
        width: 40,
        height: 40,
        margin: 5,
        marginRight: 10
    },
    infoContainer: {
        width: 25,
        marginLeft: 5,
        marginRight: 5
    },
    meteoText: {
        width: "fit-content",
        margin: 1
    },
    arrowContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
    },
    arrow: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        borderLeftColor: 'black',
        borderLeftWidth: 2,
        height: 0,
        width: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        transform: [{ rotate: '45deg' }],
    },
    windContainer: {
        width: 75,
        height: 60,
        marginRight: 10
    },
    tempContainer: {
        display: "flex",
        flexDirection: "row",
        height: 60,
        width: 70,
        marginRight: 10
    },
    windImage: {
        height: 25,
        width: 25,
    },
    tempImage: {
        height:55,
        width: 20,
        marginRight: 5
    },
    windText: {
        margin: 0,
        width: "fit-content",
    },
    maxText: {
        margin: 0,
        paddingEnd: 2,
        width: "fit-content",
    },
    precipText: {
        width: "fit-content",
        margin: 0
    },
    precipImage: {
        height: 35,
        width: 25,
        marginLeft: 6
    },
    precipContainer: {
        width: 50,
        height: 60
    }
});