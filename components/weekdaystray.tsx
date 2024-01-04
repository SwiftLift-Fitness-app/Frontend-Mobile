import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

interface Days {
    days : Array<boolean>
}

export default function WeekDays({days} : Days) {


    const style = StyleSheet.create({
        container: {
            height: 20,
            display: 'flex',
            flexDirection: 'row',
            gap: 10
        },
        unactive_day: {
            width: 20,
            height: 20,
            backgroundColor: 'gray',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 3
        },
        active_day: {
            width: 20,
            height: 20,
            backgroundColor: '#e04c3e',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 3
        },
        textC: {
            color: 'white'
        }

    })

    return (
        <View style={[style.container]}>
            <View style={days[0] ? style.active_day : style.unactive_day}><Text style={style.textC}>M</Text></View>
            <View style={days[1] ? style.active_day : style.unactive_day}><Text style={style.textC}>T</Text></View>
            <View style={days[2] ? style.active_day : style.unactive_day}><Text style={style.textC}>W</Text></View>
            <View style={days[3] ? style.active_day : style.unactive_day}><Text style={style.textC}>T</Text></View>
            <View style={days[4] ? style.active_day : style.unactive_day}><Text style={style.textC}>F</Text></View>
            <View style={days[5] ? style.active_day : style.unactive_day}><Text style={style.textC}>S</Text></View>
            <View style={days[6] ? style.active_day : style.unactive_day}><Text style={style.textC}>S</Text></View>
        </View>
    )
}