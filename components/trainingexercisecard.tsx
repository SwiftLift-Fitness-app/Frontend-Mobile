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
            <View>
                <Text style={style.title}>My first Exercise</Text>
                <Text style={style.desc}>{'\u2022'} Biceps</Text>
                <Text style={style.desc}>{'\u2022'} Triceps</Text>
                <Text style={style.desc}>{'\u2022'} Deltoids</Text>
            </View>
            <WeekDays days={testDays}/>
        </View>
    )
}