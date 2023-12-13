import React from "react";
import { View, Text } from "react-native";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBolt, faClock, faCalendar, faChartLine} from '@fortawesome/free-solid-svg-icons';
import { useFonts } from "expo-font";
import { style } from "../stylesheets/enjoystyle";

export default function Enjoy() {

    const [loadedfonts] = useFonts({
        'Ubuntu' : require('../assets/fonts/Ubuntu/Ubuntu-Regular.ttf')
    });

    if(!loadedfonts) {
        return <Text>Loading ...</Text>
    }

    return (
        <View style={style.container}>
            <View style={style.grid}>
                <FontAwesomeIcon icon={faCalendar} style={[style.icons]} size={25}></FontAwesomeIcon>
                <Text style={style.tipstext}>Personalized training program</Text>
            </View>
            <View style={style.grid}>
                <FontAwesomeIcon icon={faClock} style={style.icons} size={25}></FontAwesomeIcon>
                <Text style={style.tipstext}>Track your training in real time</Text>
            </View>
            <View style={style.grid}>
                <FontAwesomeIcon icon={faBolt} style={style.tipstext} size={25}></FontAwesomeIcon>
                <Text style={style.tipstext}>Analyze your performance</Text>
            </View>
            <View style={style.grid}>
                <FontAwesomeIcon icon={faChartLine} style={style.tipstext} size={25}></FontAwesomeIcon>
                <Text style={style.tipstext}>Improve!</Text>
            </View>
        </View>
    )
}