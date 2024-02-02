import React from "react";
import IndexHeader from "../components/indexheader";
import NavBar from "../components/navbar";
import Circles from "../components/circles";
import { StyleSheet, Dimensions, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import DietBuilder from "../components/dietbuilder";
import BuilderWrapper from "../components/builderwrapper";

const vw = Dimensions.get('screen').width;
const vh = Dimensions.get('screen').height;

export const style = StyleSheet.create({
    body : {
        width : vw,
        height : vh
    }
});

interface EditExercisePageProps {
    navigation: StackNavigationProp<any>
}

export default function EditExercisePage({navigation} : EditExercisePageProps) {



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
            <BuilderWrapper navigation={navigation} type="diet"></BuilderWrapper>
            <NavBar menu={navigation} setVisibility={changeCirclesVisibility}></NavBar>
            <Circles menu={navigation} visible={isCirclesVisible}></Circles>
        </TouchableOpacity>
    )
}