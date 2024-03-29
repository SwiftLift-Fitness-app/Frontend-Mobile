import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, Text, Pressable, GestureResponderEvent, NativeTouchEvent } from "react-native";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { style } from "../stylesheets/navbarstyle";
import { StackNavigationProp } from "@react-navigation/stack";

interface SetVisibilityProp {
    setVisibility: any,
    menu : StackNavigationProp<any>
} 

export default function NavBar({setVisibility, menu} : SetVisibilityProp) {

    return (
        <View id="wrapper" style={style.wrapper}>
            <Pressable id="home-button" style={style.homebtn} onPress={() => {menu.navigate('Index')}}>
                <FontAwesomeIcon icon={faHome} color="white" size={30}></FontAwesomeIcon>
            </Pressable>
            <Pressable id="circle" style={style.circle} onPress={setVisibility}>
                <FontAwesomeIcon icon={faCircle} color="white" size={25}></FontAwesomeIcon>
            </Pressable>
            <Pressable id="profile" style={style.homebtn} onPress={() => {menu.navigate('Profile')}}>
                <FontAwesomeIcon icon={faUser} color="white" size={30}></FontAwesomeIcon>
            </Pressable>
        </View>
    )
}