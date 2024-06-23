import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container: {
        height: 1500,
        backgroundColor: '#fff'
    },
    headerWrapper: {
        width: '100%',
        height: 30,
        marginTop: 50,
        marginBottom: 20,
    },
    headerText: {
        fontFamily: 'OS-Light',
        fontSize: 20,
        height: 40,
        alignSelf: "center",
        color: '#000',
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardWrapper: {
        width: '90%',
        height: 350,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: '#fff',
        alignSelf: "center",
        marginTop: 10,

    },
    image: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 20,
    },
    inner: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0, 0.60)',
        borderRadius: 20,
    },
    cardTitle: {
        color: '#fff',
        fontFamily: 'OS-Light',
        alignSelf: "center"
    },
    cardDescWrapper: {
    width: '100%',
    height: "auto",
        alignItems: "center",
        marginTop: 20,
    },
    cardDescText: {
        color: '#fff',
        fontFamily: 'OS-Light',
        fontSize: 14,
        textAlign: 'justify'
    },
    miniButton: {
        width: '90%',
        height: 30,
        alignSelf: "center",
        alignItems: "center"
    },
    miniButtonText: {
        color: '#59a93e',
        fontFamily: 'OS-Regular',
        alignSelf: "center",
        marginTop: 10,
    }
})
export default styles