import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/home';
import Login from './pages/login';
import Results from './pages/results';
import SignUp from './pages/signup';
import Index from './pages/uindex';
import Stats from './pages/stats';
import Programs from './pages/programs';
import SessionPage from './pages/trainingsession';
import Survey from './pages/initialsurvey';
import Diets from './pages/diets';
import ExerciseBuilderPage from './pages/exercisebuilder';
import DietBuilderPage from './pages/dietbuilder';
import Profile from './pages/profile';
import EditExercisePage from './pages/editexercise';
import EditDietPage from './pages/editdiet';
import DietsWithPop from './pages/dietwithpop';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomePage} options={{headerShown: false}}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
            <Stack.Screen name='Results' component={Results} options={{headerShown: false}}/>
            <Stack.Screen name='Signup' component={SignUp} options={{headerShown: false}}/>
            <Stack.Screen name='Index' component={Index} options={{headerShown: false}}/>
            <Stack.Screen name='Stats' component={Stats} options={{headerShown: false}}/>
            <Stack.Screen name='Programs' component={Programs} options={{headerShown: false}}/>
            <Stack.Screen name='Session' component={SessionPage}  options={{headerShown: false}}/>
            <Stack.Screen name='Survey' component={Survey}  options={{headerShown: false}}/>
            <Stack.Screen name='Diets' component={Diets} options={{headerShown: false}}/>
            <Stack.Screen name='ExerciseBuilder' component={ExerciseBuilderPage} options={{headerShown: false}}/>
            <Stack.Screen name='DietBuilder' component={DietBuilderPage} options={{headerShown: false}}/>
            <Stack.Screen name='Profile' component={Profile} options={{headerShown: false}}/>
            <Stack.Screen name='EditPrograms' component={EditExercisePage} options={{headerShown: false}}/>
            <Stack.Screen name='EditDiets' component={EditDietPage} options={{headerShown: false}}/>
            <Stack.Screen name='DietsWithPop' component={DietsWithPop} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
