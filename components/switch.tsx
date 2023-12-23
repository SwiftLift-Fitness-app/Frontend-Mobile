import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function Switch({type} : any) {

    const style = StyleSheet.create({
        btn: {
            width: 25,
            height: 25,
            borderRadius: 25,
            backgroundColor: '#152238',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
    if(type === 'left') {
        return (
            <View style={style.btn}>
                <FontAwesomeIcon icon={faArrowLeft} size={16} color="white" />
            </View>
        )
    }

    return (
        <View style={style.btn}>
            <FontAwesomeIcon icon={faArrowRight} size={16} color="white" />
        </View>
    )
}