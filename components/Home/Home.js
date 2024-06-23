import {View, Text, TouchableOpacity, Image, ScrollView, FlatList, Dimensions} from 'react-native'
import styles from "./HomeStyles";
import bannerImg from '../../e905e8e8-c408-494d-aecc-455bb56b17b4-removebg-preview.png'
import impact from '../../WhatsApp_Image_2024_06_22_at_19_02_24_17e7cb5c_removebg_preview.png'
import albina from '../../5edaf2d3-3c07-4195-a154-121cab45e253.jpg'
import ahat from '../../2cab5d3e-b74c-433e-9cef-062c99196dff.jpg'
import ernur from '../../98e5ddc5-b6ed-416a-8b87-e80759298570.jpg'
import {LinearGradient} from "expo-linear-gradient";
const Home = ({navigation, route}) => {
    const Card = (props) => {
        const width = Dimensions.get('screen').width
        const name = props.mentor.name
        const img = props.mentor.img
        const desc = props.mentor.desc
        const contact = props.mentor.contact
        return (
            <View style={{width: width, height: 550}}>
            <View style={styles.cardWrapper}>
            <Text style={styles.cardTitle}>
                {name}
            </Text>
                <Image
                source={img}
                style={styles.cardImg}
                resizeMode="contain"
                />
                <Text style={styles.descText}>
                    {desc}
                </Text>
                <Text style={styles.cardTitle}>
                    {contact}
                </Text>
            </View>
            </View>
        )
    }
    const mentors = [
        {
            name: 'Ернур',
            img: ernur,
            desc: 'Преподователь IELTS\n' +
                'Преподователь SAT\n' + 'Выпускник НИШ ФМН Астана\n' +
                'SAT: 1510: 710 VERBAL, 800 MATH\n' +
                'Опыт обучения: 2 года\n',
            contact: 'Номер: +77773656719'
        },
        {
            name: 'Альбина',
            img: albina,
            desc: 'преподователь IELTS\n' +
                'IELTS:8.0 Listening: 8.0 Reading: 8.5 Writing: 7.0 Speaking: 7.5\n' +
                'Опыт обучения: 3 года\n',
            contact: 'inst: @kalbi.y'
        },
        {
            name: 'Ахат',
            img: ahat,
            desc: 'преподаватель SAT\n' + 'Участник программы FLEX\n' +
                'SAT- 1520/1600 \n' + 'SAT Math 800/800 IELTS - 7.5\n' +
                'Опыт обучения:1 год\n',
            contact: 'tg: @skiei.ki'
        }
    ]
    const Banner = () => {
        return (
            <View style={styles.bannerWrapper}>
            <Image
            source={bannerImg}
            style={styles.bannerImg}
            resizeMode="c"
            />
                <Text style={styles.bannerText}>Добро пожаловать в impactAD, дорогой ученик!</Text>
            </View>
        )
    }
    return (
        <ScrollView style={styles.container}>
            <LinearGradient colors={['#2AC9F6', '#C37ED9']}
                            style={[styles.gradient, {height: 1200}]}>
            <View style={styles.headerWrapper}>
                <View style={styles.imgWrapper}>
                <Image
                source={impact}
                style={styles.img}
                resizeMode="contain"
                />
                </View>
                    <Text style={styles.descText}>
                        Компания №1 по поступлению в лучшие ВУЗы мира
                    </Text>
            </View>
                <Banner/>
                <View style={styles.titleWrapper}>
                    <Text style={styles.descText}>
                        Наши менторы
                    </Text>
                </View>
                <FlatList data={mentors} renderItem={(item) => {
                return (
                    <Card mentor={item.item}/>
                )
                }} horizontal={true}/>
            </LinearGradient>
        </ScrollView>
    )
}
export default Home