import React, { useState } from 'react';
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

    const [user, setUser] = useState("");

    function setUsername(name : string) {
        setUser(name);
        console.log(user);
    }

    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomePage} options={{headerShown: false}}/>
            <Stack.Screen name='Login' options={{headerShown: false}}> 
                {props => <Login {...props} user={user} setUser={setUsername}></Login>}
            </Stack.Screen>
            <Stack.Screen name='Results' component={Results} options={{headerShown: false}}/>
            <Stack.Screen name='Signup' component={SignUp} options={{headerShown: false}}/>
            <Stack.Screen name='Index' options={{headerShown: false}}>
                {props => <Index {...props} user={user}></Index>}
            </Stack.Screen>
            <Stack.Screen name='Stats' component={Stats} options={{headerShown: false}}/>
            <Stack.Screen name='Programs' options={{headerShown: false}}>
                {props => <Programs {...props}></Programs>}
            </Stack.Screen>
            <Stack.Screen name='Session' component={SessionPage}  options={{headerShown: false}}/>
            <Stack.Screen name='Survey' options={{headerShown: false}}>
                {props => <Survey {...props} user={user}></Survey>}
            </Stack.Screen>
            <Stack.Screen name='Diets' options={{headerShown: false}}>
                {props => <Diets {...props}></Diets>}
            </Stack.Screen>
            <Stack.Screen name='ExerciseBuilder' options={{headerShown: false}}>
                {props => <ExerciseBuilderPage {...props}></ExerciseBuilderPage>}
            </Stack.Screen>
            <Stack.Screen name='DietBuilder' options={{headerShown: false}}>
                {props => <DietBuilderPage {...props}></DietBuilderPage>}
            </Stack.Screen>
            <Stack.Screen name='Profile' options={{headerShown: false}}>
                {props => <Profile {...props}></Profile>}
            </Stack.Screen>
            <Stack.Screen name='EditPrograms' options={{headerShown: false}}>
                {props => <EditExercisePage {...props}></EditExercisePage>}
            </Stack.Screen>
            <Stack.Screen name='EditDiets' options={{headerShown: false}}>
                {props => <EditDietPage {...props}></EditDietPage>}
            </Stack.Screen>
            <Stack.Screen name='DietsWithPop' component={DietsWithPop} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
