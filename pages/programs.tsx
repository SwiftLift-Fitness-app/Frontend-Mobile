import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import IndexHeader from '../components/indexheader';
import { useState } from 'react';
import UserMenu from '../components/usermenu';
import { Use } from 'react-native-svg';
import { style } from '../stylesheets/programsstyle';
import ProgramCard from '../components/programcard';
import NavBar from '../components/navbar';
import Circles from '../components/circles';
import { StackNavigationProp } from '@react-navigation/stack';
import ButtonPanel from '../components/buttonpanel';
import CardSlider from '../components/cardslider';

interface ProgramsProps {
    navigation: StackNavigationProp<any>
}

export default function Programs({navigation} : ProgramsProps) {

    const [isLogged, setIsLogged] = useState(true);
    const [isCirclesVisible, setCirclesVisibility] = useState(false);
    const [isMenuVisible, setMenuVisibility] = useState(false);

    function changeMenuVisibility() {
        setMenuVisibility(!isMenuVisible)
    }

    function changeMenuVisibilityWhenUnFocus() {
        setMenuVisibility(false)
    }

    function changeCirclesVisibility() {
        setCirclesVisibility(!isCirclesVisible)
    }

    function changeCirclesVisibilityWhenUnfocused() {
        setCirclesVisibility(false);
    }

    return (
        <TouchableOpacity onPress={changeCirclesVisibilityWhenUnfocused} style={style.container}>
            <IndexHeader menu={navigation} showMenu={isMenuVisible} changeMenu={changeMenuVisibility}/>
            <ButtonPanel navigation={navigation} endpoint='ExerciseBuilder'/>
            <CardSlider cards={[1,2,3]}></CardSlider>
            <UserMenu isVisible={isMenuVisible} menu={navigation}/>
            <NavBar menu={navigation} setVisibility={changeCirclesVisibility}></NavBar>
            <Circles menu={navigation} visible={isCirclesVisible}></Circles>
        </TouchableOpacity>
    )
}