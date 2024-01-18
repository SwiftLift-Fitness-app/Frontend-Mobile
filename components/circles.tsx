import React from "react";
import { View, Text } from "react-native";
import { useState } from "react";

export default function Circles() {

    const [isVisible, setVisibility] = useState(false);
    return (
        <View id="wrapper">
            <View id="circle-diets">
            </View>
            <View id="circle-programs"></View>
            <View id="circle-forum"></View>
        </View>
    )
}