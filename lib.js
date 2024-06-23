import {createStackNavigator} from "@react-navigation/stack";
import login from './components/login/login'
import register from "./components/register/register";
const Lib = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name={'login'} component={login} options={{headerShown: false}}/>
            <Stack.Screen name={'register'} component={register} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
export default Lib