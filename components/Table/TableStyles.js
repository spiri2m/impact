import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
wrapper: {
    width: '90%',
    marginTop: 50,
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    height: 40,
    justifyContent: 'center'
},
    buttonWrapper: {
        width: '90  %',
        height: 60,
        backgroundColor: '#06c',
        fontFamily: 'OS-Light',
        fontSize: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        alignSelf: "center",
        marginTop: 30,
        borderRadius: 10,
        justifyContent: 'center'
    },
    buttonText: {
        alignSelf: "center",
        color: '#fff',
        fontFamily: 'OS-Light',
    },
    wp: {
        width: '90%',
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#fff',
        height: 40,
        justifyContent: 'space-between',
        padding: 5,
        flexDirection: 'row'
    },
    img: {
    width: 30,
        height: 30,
        alignSelf: 'center'
    }
})
export default styles;