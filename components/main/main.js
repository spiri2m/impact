import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Chat from "../Chat/Chat";
import Courses from "../Courses/Courses";
import Cabinet from "../Cabinet/Cabinet";
import Table from "../Table/Table";
import {View} from "react-native";
import Home from "../Home/Home";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';

import {FIREBASE_AUTH} from "../../FirebaseConfig";
import {onAuthStateChanged} from 'firebase/auth'
import {useEffect, useState} from "react";
const Main = ({navigation, route}) => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                backgroundColor: '#fff',
                borderRadius: 10,
                height: 90,
            },
            tabBarHideOnKeyboard: true,
        }}>
            <Tab.Screen name={'Home'} component={Home} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <View>
                        {focused ? (<Entypo name="home" size={24} color="#06c" />) : <Entypo name="home" size={24} color="black" />}
                        </View>
                    )
                },
                tabBarShowLabel: false
            }}/>
            <Tab.Screen name={'Courses'} component={Courses} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <View>
                            {focused ? (<MaterialIcons name="library-books" size={24} color="#06c" />) : <MaterialIcons name="library-books" size={24} color="black" />}
                        </View>
                    )
                },
                tabBarShowLabel: false
            }}/>
            <Tab.Screen name={'Table'} component={Table} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <View>
                            {focused ? (<Entypo name="calendar" size={24} color="#06c" />) : <Entypo name="calendar" size={24} color="black" />}
                        </View>
                    )
                },
                tabBarShowLabel: false
            }}/>
            <Tab.Screen name={'Chat'} component={Chat} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <View>
                            {focused ? (<FontAwesome5 name="robot" size={24} color="#06c" />) : <FontAwesome5 name="robot" size={24} color="black" />}
                        </View>
                    )
                },
                tabBarShowLabel: false
            }}/>
            <Tab.Screen name={'Cabinet'} component={Cabinet} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <View>
                            {focused ? (<FontAwesome name="user" size={24} color="#06c" />) : <FontAwesome name="user" size={24} color="black" />}
                        </View>
                    )
                },
                tabBarShowLabel: false
            }}/>
        </Tab.Navigator>
    )
}
export default Main