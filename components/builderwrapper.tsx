import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

export default function BuilderWrapper() {

    const vw = Dimensions.get('screen').width;
    const vh = Dimensions.get('screen').height;

    const style = StyleSheet.create({
        container : {
            width : vw,
            height : 0.8*vh,
            backgroundColor: 'black'
        }
    })

    return (
        <View style={style.container}>

        </View>
    )
}