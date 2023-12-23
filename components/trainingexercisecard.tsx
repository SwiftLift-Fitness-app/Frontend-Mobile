import React from "react";
import { View, Image, Text } from "react-native";
import WeekDays from "./weekdaystray";
import { style } from "../stylesheets/exercisecardstyle";
import Images from "./cardimages";
import image from '../img/dummyflex.jpeg';

export default function ExerciseCard({title, days, images} : any) {

    const testDays : Array<Boolean> = [true, false, true, true, true, false, true];
    const dummyPath : Array<Element> = [image];

    return (
        <View style={style.container}>
            <Images images={dummyPath} />
            <Text style={style.title}>My first Exercise</Text>
            <WeekDays days={testDays}/>
        </View>
    )
}