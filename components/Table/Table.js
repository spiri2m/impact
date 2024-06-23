import {View, Text, Image, TouchableOpacity, Alert} from 'react-native'
import {useEffect, useState} from "react";
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {LinearGradient} from "expo-linear-gradient";
import down from '../../keyboard-arrow-down (1).png'
import up from '../../keyboard-arrow-up (1).png';
import {FIREBASE_DB, FIREBASE_AUTH, FIREBASE_APP} from "../../FirebaseConfig";
import {setDoc, doc} from 'firebase/firestore'
import styles from './TableStyles'
import Spinner from "react-native-loading-spinner-overlay";
const Table = ({navigation, route}) => {
    const [selected, setSelected] = useState('');
    const [loading, setLoading] = useState(false)
    const onSubmit = async () => {
        try {
            setLoading(true)
            if(parseInt(selected.slice(0, 4)) < 2024 && selected) {
                Alert.alert('Выберите 2024 год или более!')
            } {
            await setDoc(doc(FIREBASE_DB, 'booking', FIREBASE_AUTH.currentUser.uid
            ), {
                day: selected.slice(8,10),
                month: selected.slice(5, 7),
                year: selected.slice(0, 4)
            })
        } } catch (e) {
            Alert.alert(e.message)
        } finally {
            Alert.alert('Вы успешно забронировали!')
            setLoading(false)
        }
        }

    return (
        <View style={{flex: 1}}>
            <LinearGradient colors={['#2AC9F6', '#C37ED9']}
                            style={{flex: 1}}>
                <Spinner
                    visible={loading}
                    textContent={"Загрузка..."}
                    textStyle={{fontFamily: 'OS-Light', fontSize: 18}}
                    cancelable={false}
                />
                <View style={{width: '90%', marginTop: 50, alignSelf: 'center', borderRadius: 10, shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5, backgroundColor: '#fff', height: 40, justifyContent: 'center'}}>
                    <Text style={{alignSelf: 'center', fontFamily: 'OS-Light', fontSize: 16}}>
                        Бронирование
                    </Text>

                </View>
                <Calendar style={{ width: '90%', alignSelf: 'center', borderRadius: 10, marginTop: 20, height: 400,}}
                          onDayPress={day => {
                              setSelected(day.dateString);
                          }}
                          markedDates={{
                              [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
                          }}
                />
                <TouchableOpacity style={styles.buttonWrapper} onPress={onSubmit}>
                    <Text style={styles.buttonText}>
                        Забронировать
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}
export default Table