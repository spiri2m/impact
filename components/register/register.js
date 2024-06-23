import {View, Text, ScrollView, Image, TouchableOpacity, TextInput, Alert} from 'react-native'
import {useState} from "react";
import {LinearGradient} from "expo-linear-gradient";
import styles from './registerStyles'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {FIREBASE_AUTH} from "../../FirebaseConfig";
import Fontisto from '@expo/vector-icons/Fontisto';
import Spinner from "react-native-loading-spinner-overlay";
const Register = ({navigation, route}) => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [pass2, setPass2] = useState('')
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH
    const onSubmit = async () => {
        if(pass !== pass2) {
            Alert.alert('Пароли не совпадают!')
        } else if( pass.length < 8) {
            Alert.alert('Пароль слишком короткий!')
        } else {
            setLoading(true)
            try {
                const res = await createUserWithEmailAndPassword(auth, user, pass)
            } catch (e) {
                Alert.alert(e.message)
            } finally {
                setLoading(false)
            }
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
                <View style={styles.registerWrapper}>
                    <Text style={styles.title}>

                        Зарегистрируйтесь
                    </Text>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>
                            Введите почту
                        </Text>
                        <TextInput
                            style={styles.input}
                            value={user}
                            onChangeText={setUser}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>
                            Введите пароль
                        </Text>
                        <TextInput
                            style={styles.input}
                            value={pass}
                            onChangeText={setPass}
                            secureTextEntry={!show}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>
                            Повторите пароль
                        </Text>
                        <TextInput
                            style={styles.input}
                            value={pass2}
                            onChangeText={setPass2}
                            secureTextEntry={!show}
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
                    <TouchableOpacity style={styles.buttonWrapper} onPress={() => onSubmit()}>
                        <Text style={styles.buttonText}>
                            Зарегистрироваться
                        </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </ScrollView>
    )
}
export default Register