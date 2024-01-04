import React from "react";
import { Text, View } from "react-native";
import Header from "../components/header";
import { Navigation, Navigator } from "react-router-dom";
import ProgressBar from "../components/progressbar";

export default function Survey({navigation} : any) {
    return (
        <View>
            <Text>Initial survey</Text>
            <ProgressBar prog={0.25}/>
        </View>
    )
}