import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Image } from "react-native";
import MuscleGroups from "./musclegroups";
import AddRemove from "./addremove";

interface ExerciseItemProps {
    image : string,
    name: string,
    description: string,
    muscles: Array<string>
}

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

export const style = StyleSheet.create({
    wrapper: {
        width: vw,
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
    },
    addr_wrapper: {
        height: 0.15*vw,

    }
})
export default function ExerciseItem({image, name, description, muscles} : ExerciseItemProps) {



    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);
    const [am1, setAm1] = useState(0);
    const [am2, setAm2] = useState(0);
    const [am3, setAm3] = useState(0);



    return (
        <View style={style.wrapper}>
            <Image source={{uri : image}} style={style.image}/>
            <View style={style.info}>
                <Text>{name}</Text>
                <View style={style.tags_wrapper}>
                    <MuscleGroups muscles={muscles}/>
                </View>
            </View>
            <View style={style.addr_wrapper}>
                    <AddRemove amount={am1} setAmount={setAm1} label="Reps"/>
                    <AddRemove amount={am2} setAmount={setAm2} label="Sets"/>
                    <AddRemove amount={am3} setAmount={setAm3} label="Weight"/>
            </View>
        </View>
    )
}