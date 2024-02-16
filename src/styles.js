import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:  1,
        justifyContent: 'center',
        paddingHorizontal:  10,
    },
    input: {
        height:  40,
        borderColor: 'gray',
        borderWidth:  2,
        marginBottom:  5,
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
        color: "white"
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
        width: 170,
        textAlign: "center",
        borderColor: 'gray',
        borderWidth:  2,
        borderRadius: 10
    },
    actual: {
        height: 70,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,
        marginTop: 10
    },
    forecasts: {
        height: 290,
    },
    hours: {
        marginLeft: "auto",
    },
    days: {
        marginRight: "auto",
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
});