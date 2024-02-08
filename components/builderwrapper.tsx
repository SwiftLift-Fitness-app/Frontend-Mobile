import React, { PropsWithChildren, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { DietBuilder } from "./dietbuilder";
import { ExerciseBuilder } from "./exercisebuilder";
import { StackNavigationProp } from "@react-navigation/stack";
import { Editor } from "./edit";

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

    function sendEdit(edits : string) {

    }

    const child : any = useRef();

    if(type === "diet") {
        return (
            <View style={style.container}>
                <DietBuilder ref={child}/>
                <View style={style.buttongrp}>
                    <BuilderWrapperButton text="Cancel" navigation={navigation} navigateTo="Diets" urlLoc=""/>
                    <BuilderWrapperButton text="Ok" navigation={navigation} navigateTo="Diets" urlLoc="exercises" json={child.current.sendCurrentConf()}/>
                </View>
            </View>
        )
    } else if (type === "exercise") {

        return (
            <View style={style.container}>
                <ExerciseBuilder ref={child}/>
                <View style={style.buttongrp}>
                    <BuilderWrapperButton text="Cancel" navigation={navigation} navigateTo="Programs" urlLoc=""/>
                    <BuilderWrapperButton text="Ok" navigation={navigation} navigateTo="Programs" urlLoc="exercises" json={child.current.sendCurrentConf()}/>
                </View>
            </View>
        )
    } else if(type === "exedit") {
        return (
            <View style={style.container}>
                <Editor type={"exercise"} ref={child}/>
                <View style={style.buttongrp}>
                    <BuilderWrapperButton text="Cancel" navigation={navigation} navigateTo="Programs" urlLoc=""/>
                    <BuilderWrapperButton text="Ok" navigation={navigation} navigateTo="Programs" urlLoc="exercises" json={child.current.sendCurrentConf()}/>
                </View>   
            </View>
        )
    } else if(type === "dedit") {
        return (
            <View style={style.container}>
                <Editor type={"diet"} ref={child}/>
                <View style={style.buttongrp}>
                    <BuilderWrapperButton text="Cancel" navigation={navigation} navigateTo="Programs" urlLoc=""/>
                    <BuilderWrapperButton text="Ok" navigation={navigation} navigateTo="Programs" urlLoc="diets" json={child.current.sendCurrentConf()}/>
                </View>   
            </View>
        )
    }
}

interface BuilderWrapperButtonProps {
    navigateTo : string,
    text : string,
    navigation : StackNavigationProp<any>,
    urlLoc : string,
    json? : JSON
}

export function BuilderWrapperButton({navigateTo, text, navigation, urlLoc, json} : BuilderWrapperButtonProps) {
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

    function submitJSON() {

        fetch(`http://localhost/${urlLoc}/add`, {
            method : "PATCH",
            body : JSON.stringify(json),
            headers : {
                "Content-type" : "application/json"
            }
        }).then((response : Response) => {
            console.log(response.status);
        })

        navigation.navigate(navigateTo);
    }

    return (
        <Pressable style={style.btn} onPress={submitJSON}>
            <Text>{text}</Text>
        </Pressable>
    )
}