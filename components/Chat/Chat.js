import {View, Text, TextInput, ScrollView, Dimensions, TouchableOpacity, FlatList, Alert} from 'react-native'
import {useState, useEffect} from "react";
import styles from './ChatStyles'
import {GiftedChat} from "react-native-gifted-chat";
import axios from "axios";
import {GoogleGenerativeAI, HarmCategory, HarmBlockThreshold} from "@google/generative-ai";
import {LinearGradient} from "expo-linear-gradient";
import Spinner from "react-native-loading-spinner-overlay";
const Chat = ({navigation, route}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState('')
    let answers = ["IT", "США", "Теплый", "Большой", "IELTS 8.0, хорошая успеваемость", "Информатика", "Спорт, волонтерство", "10000 долларов в год", "Традиционный", "Большой"]
    let prompt = `
    Посоветуй специальность и конкретный список университетов подходящих лично мне, если я:
-Желаю изучать ${answers[0]}
-Хочу учиться в ${answers[1]}
-Предпочитаю ${answers[2]} климат
-Хочу учиться в ${answers[3]} городе
-У меня такие академические достижения: ${answers[4]}
-Мне больше всего нравятся эти школьные предметы: ${answers[5]}
-Занимаюсь такими внешкольными активностями: ${answers[6]}
-Мой бюджет: ${answers[7]}
-Предпочитаю ${answers[8]} тип обучения
-Предпочитаю ${answers[9]} университет
К тому же, составь ментальную карту действий, которые надо сделать чтобы попасть в эти университеты
`
    const questions = [
        'Какая ваша желаемая специальность или область изучения?',
        'В какой стране или странах вы хотели бы учиться?',
        'Какой климат вам предпочтителен для проживания и обучения?',
        'В каком типе города вы хотели бы учиться?',
        'Какие у вас академические достижения и успеваемость?',
        'Какие предметы в школе вам нравятся больше всего?',
        'Какими внеучебными активностями вы занимаетесь?',
        'Какой бюджет вы готовы выделить на обучение и проживание?',
        'Какой тип обучения тебе подходит?',
        'Какой размер университета тебе подходит?'
    ]
    const oneMore = () => {
        setData('')
        answers = []
    }
    const API_KEY = 'AIzaSyCZdnbBlwIfyIIHdj7XHXzQgJmmqiuGC40'
    const genAI = new GoogleGenerativeAI(API_KEY)
    const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash'
    })
    const genConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain"
    }
    const request = async () => {
        try {
        if(answers.length !== 10) {
            Alert.alert('Вы не ответили на все вопросы!')
        } else {
                setIsLoading(true)
                const prompt = `
    Посоветуй специальность и конкретный список университетов подходящих лично мне, если я:
-Желаю изучать ${answers[0]}
-Хочу учиться в ${answers[1]}
-Предпочитаю ${answers[2]} климат
-Хочу учиться в ${answers[3]} городе
-У меня такие академические достижения: ${answers[4]}
-Мне больше всего нравятся эти школьные предметы: ${answers[5]}
-Занимаюсь такими внешкольными активностями: ${answers[6]}
-Мой бюджет: ${answers[7]}
-Предпочитаю ${answers[8]} тип обучения
-Предпочитаю ${answers[9]} университет
К тому же, составь ментальную карту действий, которые надо сделать чтобы попасть в эти университеты
`
                const chatSession = model.startChat({
                    genConfig, history: []
                })
                const result = await chatSession.sendMessage(prompt)
                setData(result.response.text())
            return () => {}
        }
        } catch (e) {
            Alert.alert(e.message)
        } finally {
            setIsLoading(false)
        }
    }
    const Suraq = (props) => {
          const [value, setValue] = useState('')
          const [isAnswered, setIsAnswered] = useState(false)
          let n = props.num
          const onSubmit = () => {
              if(answers.length === n && value && !answers[n]) {
            setIsAnswered(true)
            answers[n] = value
            setValue('')
              console.log(answers)
              } else {
                  Alert.alert("Ответьте на этот или на предыдущие вопросы!")
              }
          }
          return (
              <View style={styles.questionWrap}>
                  <Text style={styles.questionText}>
                      {questions[n]}
                  </Text>
                  <TextInput
                      style={styles.input}
                      value={value}
                      onChangeText={setValue}
                  />
                  <TouchableOpacity style={styles.miniButton} onPress={onSubmit} disabled={isAnswered}>
                      {isAnswered ? <Text style={[styles.miniButtonText, {color: '#008000'}]}>Ответ отправлен</Text> : <Text style={styles.miniButtonText}>Отправить ответ</Text>}
                  </TouchableOpacity>
              </View>
          )
    }
    const Test = () => {
        return (
            <ScrollView style={styles.container}>
                <Spinner
                    visible={isLoading}
                    textContent={"Загрузка..."}
                    textStyle={{fontFamily: 'OS-Light', fontSize: 18}}
                    cancelable={false}
                />
                <LinearGradient colors={['#2AC9F6', '#C37ED9']}
                                style={styles.gradient}>
                    <View style={styles.header}>
                        <Text style={styles.titleText}>Добро пожаловать в ПрофИИ</Text>
                        <Text style={styles.descText}>
                            Ответив на несколько вопросов, ИИ даст вам примерное направление для вашего движения на пути к успеху. Отвечайте на вопросы последовательно!
                        </Text>
                    </View>
                    <View style={{height: 200}}>
                        <FlatList data={questions} renderItem={(item) => {
                            return (
                                <View style={{width: Dimensions.get('screen').width,  alignItems: 'center', height: 200,}}>
                                    <Suraq num={item.index}/>
                                </View>
                            )
                        }} horizontal={true}
                        />
                    </View>
                    <TouchableOpacity style={styles.buttonWrapper} onPress={request}>
                        <Text style={styles.buttonText}>
                            Загрузить данные!
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>
            </ScrollView>
        )
    }
    const Response = () => {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.answerText}>
                    {data}
                </Text>
            <TouchableOpacity style={[styles.buttonWrapper, {marginBottom: 150}]}>
                <Text style={styles.buttonText} onPress={oneMore}>
                    Пройти еще раз!
                </Text>
            </TouchableOpacity>
            </ScrollView>
            )
    }
    return (
        <>
                {data ? <Response/> : <Test/>}
        </>
    )
}
export default Chat