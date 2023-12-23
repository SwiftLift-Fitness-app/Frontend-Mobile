import React from "react";
import IndexHeader from "../components/indexheader";
import { TouchableOpacity, View } from "react-native";
import { useState } from "react";


export default function Stats({navigation} : any) {

    const [isMenuVisible, setMenuVisibility] = useState(false);

    function changeMenuVisibility() {
        setMenuVisibility(!isMenuVisible)
    }

    function changeMenuVisibilityWhenUnFocus() {
        setMenuVisibility(false)
    }

    return (
        <TouchableOpacity onPress={changeMenuVisibilityWhenUnFocus}>
            <IndexHeader menu={navigation} showMenu={isMenuVisible} changeMenu={changeMenuVisibility} />
        </TouchableOpacity>
    )
}