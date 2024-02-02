import React, { PropsWithChildren } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import DietBuilder from "./dietbuilder";
import ExerciseBuilder from "./exercisebuilder";

interface BuilderWrapperProp {
    type : string
}

export default function BuilderWrapper({type} : BuilderWrapperProp) {

    const vw = Dimensions.get('screen').width;
    const vh = Dimensions.get('screen').height;

    const style = StyleSheet.create({
        container : {
            width : vw,
            height : 0.875*vh,
            backgroundColor : 'black'
        },
    })

    if(type === "diet") {
        return (
            <View style={style.container}>
                <DietBuilder/>
            </View>
        )
    } else if (type === "exercise") {
        return (
            <View style={style.container}>
                <ExerciseBuilder/>
            </View>
        )
    }
}