import React from "react";
import { View, Text } from "react-native";
import { style } from "../stylesheets/footerhomestyle";

export default function FooterHome(){
    return (
        <View style={[style.container]}>
            <Text style={[style.ftext]}>Copyleft 🄯 SwiftLift</Text>
        </View>
    )
}