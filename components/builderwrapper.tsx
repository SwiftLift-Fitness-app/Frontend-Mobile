import React, { PropsWithChildren } from "react";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import DietBuilder from "./dietbuilder";
import ExerciseBuilder from "./exercisebuilder";
import { StackNavigationProp } from "@react-navigation/stack";

interface BuilderWrapperProp {
    type : string,
    navigation : StackNavigationProp<any>
}

export default function BuilderWrapper({type, navigation} : BuilderWrapperProp) {

    const vw = Dimensions.get('screen').width;
    const vh = Dimensions.get('screen').height;

    const style = StyleSheet.create({
        container : {
            width : vw,
            height : 0.875*vh,
            backgroundColor : 'black'
        },
        buttongrp : {
            width : vw,
            display : 'flex',
            flexDirection : 'row',
            justifyContent : 'space-between',
            position : 'absolute',
            bottom : 55,
            left : 0,
            paddingLeft : 30,
            paddingRight : 30
        }
    })

    if(type === "diet") {
        return (
            <View style={style.container}>
                <DietBuilder/>
                <View style={style.buttongrp}>
                    <BuilderWrapperButton text="Cancel" navigation={navigation} navigateTo="Diets"/>
                    <BuilderWrapperButton text="Ok" navigation={navigation} navigateTo="Diets"/>
                </View>
            </View>
        )
    } else if (type === "exercise") {
        return (
            <View style={style.container}>
                <ExerciseBuilder/>
                <View style={style.buttongrp}>
                    <BuilderWrapperButton text="Cancel" navigation={navigation} navigateTo="Programs"/>
                    <BuilderWrapperButton text="Ok" navigation={navigation} navigateTo="Programs"/>
                </View>
            </View>
        )
    }
}

interface BuilderWrapperButtonProps {
    navigateTo : string,
    text : string,
    navigation : StackNavigationProp<any>
}

export function BuilderWrapperButton({navigateTo, text, navigation} : BuilderWrapperButtonProps) {
    const style = StyleSheet.create({
        btn : {
            width : 70,
            height : 40,
            backgroundColor : 'blue',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center'
        }
    })

    return (
        <Pressable style={style.btn} onPress={() => navigation.navigate(navigateTo)}>
            <Text>{text}</Text>
        </Pressable>
    )
}