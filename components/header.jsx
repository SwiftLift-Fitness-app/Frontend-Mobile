import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useFonts } from "expo-font";
import { Routes, Route, BrowserRouter as Router, NavLink as Link, BrowserRouter } from 'react-router-dom';
import Login from "../pages/login";
import { style } from "../stylesheets/headerstyle";

export default function Header({outHome}) {

    const [loadedfonts] = useFonts({
        "ColdWarm" : require('../assets/fonts/Cold Warm.otf')
    });

    return (
        <View style={style.header}>
            <Image source={require('../img/logo-dark.png')} style={[style.logo]}></Image>
            <Image source={require('../img/logo-text.png')} style={[style.titletext]}></Image>
            
            <Pressable onPress={() => {outHome.navigate('Login')}} style={[style.loginbtn, style.centercontent]}>
                <Text style={[style.headtext]}>Login</Text>
            </Pressable>

        </View>
    )
}