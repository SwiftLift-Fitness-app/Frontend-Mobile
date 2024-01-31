import React from "react";
import IndexHeader from "../components/indexheader";
import NavBar from "../components/navbar";
import Circles from "../components/circles";
import { StyleSheet, Dimensions, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import DietBuilder from "../components/dietbuilder";

const vw = Dimensions.get('screen').width;
const vh = Dimensions.get('screen').height;

export const style = StyleSheet.create({
    body : {
        width : vw,
        height : vh
    }
});

interface DietBuilderPageProps {
    navigation: StackNavigationProp<any>
}

export default function DietBuilderPage({navigation} : DietBuilderPageProps) {



    const [isLogged, setIsLogged] = useState(true);
    const [isCirclesVisible, setCirclesVisibility] = useState(false);
    const [isMenuVisible, setMenuVisibility] = useState(false);

    function changeMenuVisibility() {
        setMenuVisibility(!isMenuVisible)
    }

    function changeMenuVisibilityWhenUnFocus() {
        setMenuVisibility(false)
    }

    function changeCirclesVisibility() {
        setCirclesVisibility(!isCirclesVisible)
    }

    function changeCirclesVisibilityWhenUnfocused() {
        setCirclesVisibility(false);
    }

    return (
        <TouchableOpacity style={style.body}>
            <IndexHeader menu={navigation} showMenu={isMenuVisible} changeMenu={changeMenuVisibility}/>
            <DietBuilder/>
            <NavBar menu={navigation} setVisibility={changeCirclesVisibility}></NavBar>
            <Circles menu={navigation} visible={isCirclesVisible}></Circles>
        </TouchableOpacity>
    )
}