import {View, Text, ScrollView, Image, TouchableOpacity, TextInput, Alert} from 'react-native'
import {useState} from "react";
import {LinearGradient} from "expo-linear-gradient";
import styles from './loginStyles';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {FIREBASE_AUTH} from "../../FirebaseConfig";
import Fontisto from '@expo/vector-icons/Fontisto';
import Spinner from "react-native-loading-spinner-overlay";
const Login = ({navigation, route}) => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH
    const signIn = async () => {
        setLoading(true)
        try {
            const res = await signInWithEmailAndPassword(auth, user, pass)
        } catch (e) {
            Alert.alert(e.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Spinner
            visible={loading}
            textContent={"Загрузка..."}
            textStyle={{fontFamily: 'OS-Light', fontSize: 18}}
            cancelable={false}
            />
            <LinearGradient colors={['#2AC9F6', '#C37ED9']}
            style={styles.gradient}>
            <View style={styles.loginWrapper}>
                <Text style={styles.title}>
                    Добро пожаловать в ImpactAD!
                </Text>
            
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputText}>
                        Почта
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={user}
                        onChangeText={setUser}
                        placeholder="Введите почту..."
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputText}>
                        Пароль
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={pass}
                        onChangeText={setPass}
                        secureTextEntry={!show}
                        placeholder="Введите пароль..."
                    />
                </View>
                <TouchableOpacity style={styles.showWrapper} onPress={() => setShow(!show)}>
                    {show ? <Fontisto name="checkbox-active" size={20} color="#06c" /> :
                        <Fontisto name="checkbox-passive" size={20} color="#06c" />
                    }
                    <Text style={styles.showText}>
                        Показать пароль
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => signIn()}>
                    <Text style={styles.buttonText}>
                        Войти
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.miniButton} onPress={() => {
                    navigation.navigate('register')
                }}>
                    <Text style={styles.miniButtonText}>
                        Зарегистрироваться
                    </Text>
                </TouchableOpacity>
            </View>
            </LinearGradient>
        </ScrollView>
    )
}
export default Login
