import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faEgg } from "@fortawesome/free-solid-svg-icons";
import { faBreadSlice } from "@fortawesome/free-solid-svg-icons";
import { faOilCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { FontawesomeObject, IconProp } from "@fortawesome/fontawesome-svg-core";

interface DietInfoProps {
    calories : number,
    protein: number,
    carbs: number,
    fat: number
}

interface InfoComponentProps {
    value : number,
    type : string,
    color : string,
    icon : IconProp,
    unit : string
}

export default function DietInfo({calories, protein, carbs, fat} : DietInfoProps) {
     const dietStyle = StyleSheet.create({
        container : {
            width: 75,
            height: 150,
            backgroundColor: "rgba(255,255,255,0.5)",
            borderRadius: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 300,
            left: 100
        }
     })

     return (
        <View style={dietStyle.container}>
            <DietInfoItem value={calories} type="calories" color="blue" icon={faBolt} unit="kcal"/>
            <DietInfoItem value={protein} type="protein" color="green" icon={faEgg} unit="%"/>
            <DietInfoItem value={carbs} type="carbs" color="yellow" icon={faBreadSlice} unit="%"/>
            <DietInfoItem value={fat} type="fats" color="red" icon={faOilCan} unit="%"/>
        </View>
     )
}

export function DietInfoItem({value, type, color, icon, unit} : InfoComponentProps) {
    
    const style = StyleSheet.create({
        wrapper : {
            width: 75,
            height: 37.5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
        },
        icon_container : {
            width: 37.5,
            height: 37.5,
            borderRadius: 50,
            backgroundColor: color,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })


    return (
        <View style={style.wrapper}>
            <View style={style.icon_container}>
                <FontAwesomeIcon icon={icon} color="white"/>
            </View>
            <Text>{value} {unit}</Text>
        </View>
    )
}