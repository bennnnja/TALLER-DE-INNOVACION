/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

<<<<<<< HEAD
import Register from './screens/Register';
=======
>>>>>>> 23492c230851b9084399b5cc81277c5529318c83
import { SignUp } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Tabs from "./navigation/tabs";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {
    const [loaded] = useFonts({
        "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
    })
    
    if(!loaded){
    return null;
    }
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
<<<<<<< HEAD
                    headerShown: false,
                }}
                initialRouteName="SignUp"
            >
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="HomeTabs" component={Tabs} />
=======
                    headerShown: false
                }}
                initialRouteName={'SignUp'}
            >
                <Stack.Screen name="SignUp" component={SignUp} />

                {/* Tabs */}
                <Stack.Screen name="HomeTabs" component={Tabs} />

                {/* <Stack.Screen name="Scan" component={Scan} /> */}
>>>>>>> 23492c230851b9084399b5cc81277c5529318c83
            </Stack.Navigator>
        </NavigationContainer>
    )
}
<<<<<<< HEAD
=======

>>>>>>> 23492c230851b9084399b5cc81277c5529318c83
export default App;
