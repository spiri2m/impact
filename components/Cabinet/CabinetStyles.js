import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    formWrapper: {
        width: '90%',
        height: 400,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 50,
    },
    formTitle: {
        fontSize: 16,
        fontFamily: 'OS-Light',
        alignSelf: "center",
        marginTop: 15,
    },
    inputText: {
        fontFamily: 'OS-Light',
        fontSize: 18
    },
    input: {
        width: '100%',
        borderRadius: 10,
        height: 50,
        padding: 5,
        fontFamily: 'OS-Light',
        fontSize: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: '#fff'
    },
    inputWrapper: {
        width: '90%',
        height: 80,
        justifyContent: "space-evenly",
        alignSelf: "center",
        marginTop: 30
    },
    buttonWrapper: {
        width: '90%',
        height: 60,
        backgroundColor: '#06c',
        fontFamily: 'OS-Light',
        fontSize: 20,
        marginTop: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignSelf: "center",
        borderRadius: 10,
        justifyContent: 'center'
    },
    buttonText: {
        alignSelf: "center",
        color: '#fff',
        fontFamily: 'OS-Light',
    },
    miniWrapper: {
        width: '90%',
        height: 80,
        alignSelf: "center",
    },
    miniWTitle: {
        width: '100%',
        fontFamily: 'OS-Light',
        fontSize: 18
    },
    s: {
        width: '100%',
        fontFamily: 'OS-Regular',
        fontSize: 20
    }
})
export default styles;