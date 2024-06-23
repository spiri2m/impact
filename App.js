import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Lib from "./lib";
import main from "./components/main/main";
import {useFonts} from "expo-font";
import {FIREBASE_AUTH} from "./FirebaseConfig";
import {onAuthStateChanged, User} from 'firebase/auth'
import {useEffect, useState} from "react";

export default function App() {
    const [user, setUser] = useState(null)
    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user)
        })
    }, [])
    let [fontsLoaded, fontError] = useFonts({
      'OS-Light': require('./assets/static/OpenSans-Light.ttf'),
      'OS-Regular': require('./assets/static/OpenSans-Regular.ttf')
  })
  if(!fontsLoaded) {
      return null
  }
    const Stack = createStackNavigator()
    const auth = FIREBASE_AUTH;
  LogBox.ignoreLogs([' @firebase/auth: Auth'])
   return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="lib">
            {!user ? (<Stack.Screen name={'lib'} component={Lib} options={{headerShown: false}}/>)
                : (<Stack.Screen name={'main'} component={main} options={{headerShown: false    }}/> )}
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
