import React from "react";
import { View, Text, Pressable } from "react-native";
import { useState } from "react";
import { style } from "../stylesheets/navbarstyle";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faDumbbell, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { NavProp } from "../navigationProps";
import { NavigateProps } from "react-router-dom";
import { StackNavigationProp } from "@react-navigation/stack";

interface VisibilityProp {
    visible: boolean,
    menu: StackNavigationProp<any>
}

export default function Circles({visible, menu} : VisibilityProp) {

    if(visible) {
        return (
            <View id="wrapper" style={style.circles_wrapper}>
                <Pressable id="circle-diets" style={style.circle_diets} >
                    <FontAwesomeIcon icon={faApple} color='white' size={30}></FontAwesomeIcon>
                </Pressable>
                <Pressable id="circle-programs" style={style.circle_progs} onPress={() => {menu.navigate('Programs')}}>
                    <FontAwesomeIcon icon={faDumbbell} color='white' size={35}></FontAwesomeIcon>
                </Pressable>
                <Pressable id="circle-forum" style={style.circle_diets} onPress={() => {menu.navigate('Survey')}}>
                    <FontAwesomeIcon icon={faPaperPlane} color="white" size={30}></FontAwesomeIcon>
                </Pressable>
            </View>
        )
    }
}