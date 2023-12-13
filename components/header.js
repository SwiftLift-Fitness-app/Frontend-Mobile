import React from "react";
import { style } from "../stylesheets/headerstyle";
import { View, Text, Image, Pressable } from "react-native";
import { useFonts } from "expo-font";

export default function Header() {

    const [loadedfonts] = useFonts({
        "ColdWarm" : require('../assets/fonts/Cold Warm.otf')
    });

    return (
        <View style={style.header}>
            <Image source={require('../img/logo-dark.png')} style={style.logo}></Image>
            <Image source={require('../img/logo-text.png')} style={style.titletext}></Image>
            <View>
                <Pressable style={[style.loginbtn, style.centercontent]}>
                    <Text style={[style.headtext]}>Login</Text>
                </Pressable>
            </View>
        </View>
    )
}