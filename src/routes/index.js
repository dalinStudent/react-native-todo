import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Login";
import Register from "../Regsiter";
import Todo from "../Todo";

export const SCREEN_NAME = {
    HOME: 'Todo',
    LOGIN: 'Login',
    REGISTER: 'Register',
}

const Stack = createNativeStackNavigator();

export default () => {
    return (
        <Stack.Navigator initialRouteName={SCREEN_NAME}>
            <Stack.Screen name={SCREEN_NAME.REGISTER} component={Register} />
            <Stack.Screen name={SCREEN_NAME.HOME} component={Todo} />
            <Stack.Screen name={SCREEN_NAME.LOGIN} component={Login} />
        </Stack.Navigator>
    )
}