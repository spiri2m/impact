import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 1200,
        backgroundColor: '#fff'
    },
    headerWrapper: {
        marginTop: 50,
        alignSelf: "center",
        borderRadius: 10,
        width: '90%',
        height: 150,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imgWrapper: {
        width: '100%',
        height: '50%',
    },
    img: {
        width: 100,
        height: 50,
        alignSelf: "center"

    },
    descWrapper: {
        width: '100%',
    },
    descText: {
        textAlign: "center",
        width: '100%',
        fontFamily: 'OS-Regular',
        fontSize: 18,
        alignSelf: "center"
    },
    gradient: {
        flex: 1,
    },
        titleWrapper: {
            marginTop: 20,
            alignSelf: "center",
            borderRadius: 10,
            width: '90%',
            height: 50,
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            alignItems: "center",
            justifyContent: "center"
        },
    bannerWrapper: {
        marginTop: 20,
        alignSelf: "center",
        borderRadius: 10,
        width: '90%',
        height: 200,
        backgroundColor: "#cf5cd9",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 0,
        flexDirection: "row"
    },
    bannerImg: {
        height: 200,
        width: 170
    },
    bannerText: {
        width: '50%',
        fontSize: 18,
        fontFamily: 'OS-Light',
        alignSelf: "center",
        color: '#fff'
    },
    cardWrapper: {
        marginTop: 10,
        alignSelf: "center",
        borderRadius: 10,
        width: '90%',
        height: 550,
        backgroundColor: "#ffffff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 0,
    },
    cardTitle: {
        height: 30,
        fontFamily: 'OS-Regular',
        fontSize: 20,
        alignSelf: "center",
        marginTop: 10,
    },
    cardImg: {
        width: '95%',
        height: 300,
        alignSelf: "center"
    }
})
export default styles