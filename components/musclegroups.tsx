import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface MuscleGroupsProps {
    muscles: Array<string>
}

export default function MuscleGroups({muscles} : MuscleGroupsProps) {

    const style = StyleSheet.create({
        muscl : {
            minWidth: 70,
            height: 30,
            borderRadius: 10,
            backgroundColor: '#4461ae',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        wrapper: {
            minHeight: 50,
            maxWidth: 250,
            display: 'flex',
            flexWrap: 'wrap',
            gap : 10,
            flexDirection : 'row',
            justifyContent : 'center',
            alignItems : 'center'
        },
        text : {
            color : 'white'
        }
    })

    const tags : Array<Element> = [];

    for(let i=0; i<muscles.length; i++) {
        tags.push(<View style={style.muscl}><Text style={style.text}>{muscles[i]}</Text></View>)
    }

    return (
        <View style={style.wrapper}>
           <>{tags}</>
        </View>
    )
}