import React from "react";
import { style } from "../stylesheets/headerstyle";
import { View, Text, Image, Pressable } from "react-native";
import { useFonts } from "expo-font";
import { Routes, Route, BrowserRouter as Router, NavLink as Link, BrowserRouter } from 'react-router-dom';
import Login from "../pages/login";

export default function IndexHeader({menu}) {

    const [loadedfonts] = useFonts({
        "ColdWarm" : require('../assets/fonts/Cold Warm.otf')
    });

    return (
        <View style={style.header}>
            <Image source={require('../img/logo-dark.png')} style={style.logo}></Image>
            <Image source={require('../img/logo-text.png')} style={style.titletext}></Image>
            
            <Pressable onPress={() => {menu.navigate('Login')}}>
                <Image source={require('../img/default-user-icon.png')} style={style.usericon}/>
            </Pressable>

        </View>
    )
}