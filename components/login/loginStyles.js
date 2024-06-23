import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container: {
        height: 1000,
        backgroundColor: '#fff'
    },
    gradient: {
        height: 1000,
    },
    loginWrapper: {
        width: '90%',
        height: 450,
        marginTop: 200,
        alignSelf: "center",
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    inputText: {
        fontFamily: 'OS-Light',
        fontSize: 18
    },
    title: {
        fontSize: 20,
        fontFamily: 'OS-Regular',
        alignSelf: "center",
        marginTop: 10
    },
    inputWrapper: {
        width: '90%',
        height: 80,
        justifyContent: "space-evenly",
        alignSelf: "center",
        marginTop: 30
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
    showWrapper: {
    width: '90%',
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 5
    },
    showText: {
        color: '#06c',
        fontSize: 16,
        fontFamily: 'OS-Light',
        marginLeft: 5
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
    miniButton: {
        width: '90%',
        height: 30,
        alignSelf: "center"
    },
    miniButtonText: {
        color: '#06c',
        fontFamily: 'OS-Light',
        alignSelf: "center",
        marginTop: 10,
    }
})
export default styles
