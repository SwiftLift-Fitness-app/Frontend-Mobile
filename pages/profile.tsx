import React from "react";
import { TouchableOpacity, View } from "react-native";
import { style } from "../stylesheets/profilestyle";
import ProfileCard from "../components/profilecard";
import ProfileTabs from "../components/profiletabs";
import IndexHeader from "../components/indexheader";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import NavBar from "../components/navbar";
import Circles from "../components/circles";

interface StackNavigationProps {
    navigation : StackNavigationProp<any>
}
export default function Profile({navigation} : StackNavigationProps) {

    const [isCirclesVisible, setCirclesVisibility] = useState(false);
    const [isMenuVisible, setMenuVisibility] = useState(false);

    function changeMenuVisibility() {
        setMenuVisibility(!isMenuVisible)
    }

    function changeCirclesVisibility() {
        setCirclesVisibility(!isCirclesVisible)
    }

    function changeCirclesVisibilityWhenUnfocused() {
        setCirclesVisibility(false);
    }

    return (
        <TouchableOpacity onPress={changeCirclesVisibilityWhenUnfocused} style={style.container}>
            <IndexHeader menu={navigation} showMenu={isMenuVisible} changeMenu={changeMenuVisibility}/>
            <ProfileCard/>
            <ProfileTabs tabs_title="Stats" tab_title1="Trainings" tab_title2="Diets"/>
            <NavBar menu={navigation} setVisibility={changeCirclesVisibility}></NavBar>
            <Circles menu={navigation} visible={isCirclesVisible}></Circles>
        </TouchableOpacity>
    )
}