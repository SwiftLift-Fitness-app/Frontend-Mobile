import React from "react";
import { View, Image, Text } from "react-native";
import WeekDays from "./weekdaystray";

export default function ExerciseCard() {

    const testDays = [true, false, true, true, true, false, true];

    return (
        <View style={{width: 200, height: 200}}>
            <View>
                
            </View>
            <Text>My first Exercise</Text>
            <WeekDays days={testDays}/>
        </View>
    )
}