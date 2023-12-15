import React from "react";
import { View, Image, ImageBackground, Text, Pressable } from "react-native";
import { style } from "../stylesheets/bannerstyle";
import { useFonts } from "expo-font";

export default function Banner({outHome} : any) {
    const [loadedfonts] = useFonts({
        'Ubuntu' : require('../assets/fonts/Ubuntu/Ubuntu-Regular.ttf')
    });

    if(!loadedfonts) {
        return <Text>Loading ...</Text>
    }

    return (
        <View style={style.wrapper}>
            <ImageBackground source={require('../img/wave-haikei.png')} style={style.contain}>
                <View style={style.yaw}>
                    <Text style={style.bannertext}>The smart way to fitness</Text>
                    <Pressable style={style.yajb} onPress={() => {outHome.navigate('Login')}}><Text style={style.btntext}>Join now</Text></Pressable>
                </View>
                <ImageBackground source={require('../img/fitness.png')} style={style.backi}>                    
                </ImageBackground>
            </ImageBackground>
        </View>
    )
}