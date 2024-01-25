import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface MuscleGroupsProps {
    muscles: Array<string>
}

export default function MuscleGroups({muscles} : MuscleGroupsProps) {

    const style = StyleSheet.create({
        muscl : {
            minWidth: 70,
            height: 50,
            borderRadius: 10,
            backgroundColor: '#e04c3e',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        wrapper: {
            minHeight: 50,
            maxWidth: 150,
            display: 'flex',
            flexWrap: 'wrap'
        }
    })

    const tags : Array<Element> = [];

    for(let i=0; i<muscles.length; i++) {
        tags.push(<View style={style.muscl}>{muscles[i]}</View>)
    }

    tags.map(tag => {
        return <>{tag}</>
    })

    return (
        <View style={style.wrapper}>
           
        </View>
    )
}