import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Image } from "react-native";
import MuscleGroups from "./musclegroups";

interface ExerciseItemProps {
    image : string,
    name: string,
    description: string,
    muscles: Array<string>
}

export default function ExerciseItem({image, name, description, muscles} : ExerciseItemProps) {

    const vw = Dimensions.get('window').width;
    const vh = Dimensions.get('window').height;

    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);

    const style = StyleSheet.create({
        wrapper: {
            width: 0.8*vw,
            height: 0.15*vw,
            backgroundColor: 'gray',
            borderRadius: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20
        },
        image: {
            width: 0.12*vw,
            height: 0.12*vw
        },
        info: {
            width: 0.4*vw,
            height: 0.15*vw
        },
        tags_wrapper: {
            minHeight: 50,
            maxWidth: 150,
            display: 'flex',
            flexWrap: 'wrap'
        }
    })

    return (
        <View style={style.wrapper}>
            <Image source={require(image)} style={style.image}/>
            <View style={style.info}>
                <Text>{name}</Text>
                <View style={style.tags_wrapper}>
                    <MuscleGroups muscles={muscles}/>
                </View>
            </View>
        </View>
    )
}