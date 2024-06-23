import {View, Text, TouchableOpacity, ImageBackground, ScrollView, Linking} from 'react-native'
import styles from './CoursesStyles'
import ieltsat from '../../practice.jpg'
import prep from '../../d1a844f4-f165-4fc8-803b-5a1f438ada2d.jpg';
import sopr from '../../sopr.jpg'
import {LinearGradient} from "expo-linear-gradient";
const Courses = ({navigation, route}) => {
    const kurs = [{
        title: 'КУРСЫ SAT И IELTS',
        bg: ieltsat,
        desc: 'Авторская методика\n' +
            'Онлайн-формат проведения уроков.\n' +
            'До 8 человек в группе. \n' +
            'Домашнее задание и его проверка.\n' +
            'Feedback и анализ прогресса.\n' +
            'Гарантированный результат.\n' +
            'Уроки проходят 3 раза в неделю по 90 минут.'
    },
        {
            title: 'ПОДГОТОВКА',
            bg: prep,
            desc: 'Проводятся 3 услуги в неделю:\n' +
                '1. Встреча с ментором по развитию внешкольных занятий и профайла.\n' +
                '2. Добавление в чат со студентами, где всего 5 человек. Будет возможность вместе работать над проектом.\n' +
                'Итог 6 месяцев работы - 1 закрытый проект.\n' +
                '3. Лекция по поступлению, где будем разбирать важные вопросы: как проходит работа, какое должно быть грамотное эссе, лайфхаки, которыми мы можем поделиться.\n' +
                'Длительность курса 6 месяцев.\n'
        },
        {
            title: 'ПОЛНОЕ СОПРОВОЖДЕНИЕ',
            bg: sopr,
            desc: 'Ментор сопровождает тебя до момента поступления:\n' +
                '1. Проведение полной диагностики.\n' +
                '2. Составление индивидуальной стратегии поступления.\n' +
                '3. Подбор список университетов под твой запрос.\n' +
                '4. Помощь в подготовке и регистрации анкеты\n' +
                '5. Помощь и консультация в подготовке\n' +
                'документации и регистрации.\n' +
                'Еженедельная встреча.'
        }
    ]
    const Card = (props) => {
        let bg = props.item.bg
        let title = props.item.title
        let desc = props.item.desc
        return (
            <View style={styles.cardWrapper}>
                <ImageBackground source={bg} resizeMode="cover" style={styles.image} imageStyle={{borderRadius: 20}}>
                    <View style={styles.inner}>
                <Text style={styles.cardTitle}>
                    {title}
                </Text>
                <View style={styles.cardDescWrapper}>
                    <Text style={styles.cardDescText}>
                        {desc}
                    </Text>
                </View>
                        <TouchableOpacity style={styles.miniButton} onPress={() => Linking.openURL('https://www.instagram.com/impact.admissions/')}>
                            <Text style={styles.miniButtonText}>
                                Узнать побольше
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
    return (
        <ScrollView style={styles.container}>
            <LinearGradient colors={['#2AC9F6', '#C37ED9']}
                            style={{height: 1500}}>
            <View style={styles.headerWrapper}>
                <Text style={styles.headerText}>
                    Наши курсы!
                </Text>
            </View>
            <Card item={kurs[0]}/>
            <Card item={kurs[1]}/>
            <Card item={kurs[2]}/>
            </LinearGradient>
        </ScrollView>
    )
}
export default Courses