import {StyleSheet, Dimensions} from "react-native";
const width = Dimensions.get('screen').width * 0.9
const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#fff'
    },
    header: {
        width: '90%',
        alignSelf: "center",
        height: 200,
        marginTop: 50,
        borderRadius: 10,
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
    titleText: {
        fontFamily: 'OS-Light',
        fontSize: 20,
        padding: 5,
        alignSelf: "center",
    },
    descText: {
        fontFamily: 'OS-Regular',
        fontSize: 18,
        alignSelf: "center",
        textAlign: 'justify',
        padding: 5
    },
    questionWrap: {
        width: width,
        height: 170,
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
        marginTop: 20,
        alignSelf: "center",
    },
    questionText: {
        width: '90%',
        alignSelf: "center",
        fontSize: 14,
        fontFamily: 'OS-Light',
        textAlign: "center",
        marginTop: 5,
    },
    input: {
        width: '90%',
        borderRadius: 10,
        alignSelf: "center",
        height: 50,
        padding: 5,
        marginTop: 10,
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
    gradient: {
        flex: 1,
        height: 1000
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
    },
    buttonWrapper: {
        width: '90%',
        height: 60,
        backgroundColor: '#06c',
        fontFamily: 'OS-Light',
        fontSize: 20,
        shadowColor: "#000",
        marginTop: 20,
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
    answerWrapper: {
        width: '90%',
        height: 200,
        marginTop: 20,
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
        alignSelf: "center",
    },
    answerText: {
        marginTop: 50,
        fontFamily: 'OS-Regular',
        fontSize: 14,
    }
})
export default styles;