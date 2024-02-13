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
        borderWidth:  1,
        marginBottom:  10,
        paddingLeft:  10,
    },
    text: {
        fontSize:  16,
        marginBottom:  10,
        textAlign: "center",
        margin: "auto"
    },
    meteoBox: {
        backgroundColor: "#a8ecff",
        width: 250,
        textAlign: "center",
        height: 280
    },
    now: {
        marginLeft: "auto",
    },
    forecasts: {
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
        gap: 50
    },
    button: {
        backgroundColor: "#a8ecff",
        padding: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', //Centered horizontally,
        height: 25,
        width: "fit-content",
        borderRadius: 5
    },
    buttonText: {
        height: 15
    }
});