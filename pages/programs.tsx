import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import IndexHeader from '../components/indexheader';
import { useState } from 'react';
import UserMenu from '../components/usermenu';
import { Use } from 'react-native-svg';
import { style } from '../stylesheets/programsstyle';

export default function Programs({navigation} : any) {

    const [isLogged, setIsLogged] = useState(true);

    const [isMenuVisible, setMenuVisibility] = useState(false);

    function changeMenuVisibility() {
        setMenuVisibility(!isMenuVisible)
    }

    function changeMenuVisibilityWhenUnFocus() {
        setMenuVisibility(false)
    }
    return (
        <TouchableOpacity onPress={changeMenuVisibilityWhenUnFocus} style={style.container}>
            <IndexHeader menu={navigation} showMenu={isMenuVisible} changeMenu={changeMenuVisibility}/>
            <UserMenu isVisible={isMenuVisible} menu={navigation}/>
        </TouchableOpacity>
    )
}