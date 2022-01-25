import * as React from 'react';
import { useColorScheme, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames } from '../config/Constants';
import { LightTheme, DarkTheme } from '../styles/Themes';
import LoginScreen from '../screens/login/LoginScreen';
import SignUpScreen from '../screens/signup/SignUpScreen';
import HomeScreen from '../screens/home/HomeScreen';
import CampaignScreen from '../screens/campaign/CampaignScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {

    const colorScheme = useColorScheme();

    return (
        <NavigationContainer
            theme={colorScheme === 'dark' ? DarkTheme : LightTheme}>
            <Stack.Navigator
                screenOptions={({ route, navigation }) => ({
                    headerShown: false,
                    gestureEnabled: true,
                })}>

                <Stack.Screen
                    name={ScreenNames.LOGIN_SCREEN}
                    component={LoginScreen} />

                <Stack.Screen
                    name={ScreenNames.SIGN_UP_SCREEN}
                    component={SignUpScreen} />

                <Stack.Screen
                    name={ScreenNames.HOME_SCREEN}
                    component={HomeScreen} />
                
                <Stack.Screen
                    name={ScreenNames.CAMPAIGN_SCREEN}
                    component={CampaignScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;