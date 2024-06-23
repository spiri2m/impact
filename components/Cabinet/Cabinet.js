import {View, Text, Alert, TouchableOpacity, TextInput} from 'react-native'
import styles from './CabinetStyles'
import {LinearGradient} from "expo-linear-gradient";
import {useEffect, useState} from "react";
import {signOut} from 'firebase/auth'
import {FIREBASE_AUTH, FIREBASE_DB} from "../../FirebaseConfig";
import {getDoc, setDoc, collection, doc} from 'firebase/firestore'
import Spinner from "react-native-loading-spinner-overlay";
const Cabinet = ({navigation, route}) => {
    async function checkIsLoaded() {
        try {
            setLoading(true)
            const data = await getDoc(docRef)
            console.log(data.exists())
            if(data.exists()) {
                setData(data.data())
                setIsLoaded(true)
            } else {
                setIsLoaded(false)
            }
        } catch (e) {
            Alert.alert(e.message)
        } finally {
            setLoading(false)
        }
        return () => {};
    }
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect( () => {
        checkIsLoaded()
    }, [])
    const auth = FIREBASE_AUTH;
    const db = FIREBASE_DB;
    const docRef = doc(db, 'users', auth.currentUser.uid)
    const Form = () => {
        const [name, setName] = useState('')
        const [surname, setSurname] = useState('')
        const [loading, setLoading] = useState(false)
        const onSubmit = async () => {
            try {
                setLoading(true)
                await setDoc(docRef, {
                    name: name,
                    surname: surname
                })
            } catch (e) {
                Alert.alert(e.message)
            } finally {
                setLoading(false)
                setIsLoaded(true)
            }
        }
        return (
            <View style={styles.formWrapper}>
                <Spinner
                    visible={loading}
                    textContent={"Загрузка..."}
                    textStyle={{fontFamily: 'OS-Light', fontSize: 18}}
                    cancelable={false}
                />
                <Text style={styles.formTitle}>
                    Вам нужно заполнить данные!
                </Text>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputText}>
                        Имя
                    </Text>
                    <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputText}>
                        Фамилия
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={surname}
                        onChangeText={setSurname}
                    />
                </View>
                <TouchableOpacity style={styles.buttonWrapper} onPress={onSubmit}>
                    <Text style={styles.buttonText}>Загрузить</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const Data = () => {
        return (
            <View style={[styles.formWrapper, {height: 200}]}>
                <Text style={styles.formTitle}>
                    Информация о вас!
                </Text>
                <View style={styles.miniWrapper}>
                    <Text style={styles.s}>
                        Имя
                    </Text>
                    <Text style={styles.miniWTitle}>
                        {data.name}
                    </Text>
                </View>
                <View style={styles.miniWrapper}>
                    <Text style={styles.s}>
                        Фамилия
                    </Text>
                    <Text style={styles.miniWTitle}>
                        {data.surname}
                    </Text>
                </View>
            </View>
        )
    }
    return (
        <View style={{flex: 1}}>
            <Spinner
                visible={loading}
                textContent={"Загрузка..."}
                textStyle={{fontFamily: 'OS-Light', fontSize: 18}}
                cancelable={false}
            />
            <LinearGradient colors={['#2AC9F6', '#C37ED9']}
                            style={{flex: 1}}>
                {isLoaded && data ? <Data/> : <Form/>}
                <TouchableOpacity style={[styles.buttonWrapper, {backgroundColor: '#e32323'}]} onPress={() => auth.signOut()}>
                    <Text style={styles.buttonText}>
                        Выйти из аккаунта
                    </Text>
                </TouchableOpacity>
            </LinearGradient>

        </View>
    )
}
export default Cabinet