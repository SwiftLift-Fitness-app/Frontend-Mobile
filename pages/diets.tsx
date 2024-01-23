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


interface DietProps {
    navigation: StackNavigationProp<any>
}

export default function Diets({navigation} : DietProps) {

    const [isCirclesVisible, setCirclesVisibility] = useState(false);
    const [isMenuVisible, setMenuVisibility] = useState(false);

    function changeCirclesVisibility() {
        setCirclesVisibility(!isCirclesVisible)
    }

    function changeCirclesVisibilityWhenUnfocused() {
        setCirclesVisibility(false);
    }

    function changeMenuVisibility() {
        setMenuVisibility(!isMenuVisible)
    }

    function changeMenuVisibilityWhenUnFocus() {
        setMenuVisibility(false)
    }

    return (
        <TouchableOpacity onPress={changeCirclesVisibilityWhenUnfocused} style={style.container}>
            <IndexHeader menu={navigation} showMenu={isMenuVisible} changeMenu={changeMenuVisibility}/>
            <NavBar menu={navigation} setVisibility={changeCirclesVisibility}></NavBar>
            <Circles menu={navigation} visible={isCirclesVisible}></Circles>
        </TouchableOpacity>
    )
}