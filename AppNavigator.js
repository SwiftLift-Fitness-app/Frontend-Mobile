import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/home';
import Login from './pages/login';
import Results from './pages/results';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomePage} options={{headerShown: false}}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
            <Stack.Screen name='Results' component={Results} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
