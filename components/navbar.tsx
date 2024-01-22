import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, Text, Pressable, GestureResponderEvent, NativeTouchEvent } from "react-native";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { style } from "../stylesheets/navbarstyle";

/*interface SetVisibilityProp {
    setVisibility: (event : GestureResponderEvent)
} */

export default function NavBar({setVisibility} : any) {


    return (
        <View id="wrapper" style={style.wrapper}>
            <Pressable id="home-button" style={style.homebtn}>
                <FontAwesomeIcon icon={faHome} color="white" size={30}></FontAwesomeIcon>
            </Pressable>
            <Pressable id="circle" style={style.circle} onPress={setVisibility}>
                <FontAwesomeIcon icon={faCircle} color="white" size={25}></FontAwesomeIcon>
            </Pressable>
            <Pressable id="profile" style={style.homebtn}>
                <FontAwesomeIcon icon={faUser} color="white" size={30}></FontAwesomeIcon>
            </Pressable>
        </View>
    )
}