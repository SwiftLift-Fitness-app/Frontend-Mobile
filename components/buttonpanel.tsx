import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { StyleSheet, Dimensions, View, Pressable } from "react-native";
import { faPlus, faMinus, faPlusMinus } from "@fortawesome/free-solid-svg-icons";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";

export default function ButtonPanel() {

    const vw = Dimensions.get('window').width;
    
    const style = StyleSheet.create({
        wrapper: {
            width: 0.8*vw,
            height: 0.55*vw,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 10,
            justifyContent: 'center',
            alignItems: 'center'
                },
        btn: {
            width: 0.35*vw,
            height: 0.25*vw,
            borderRadius: 10,
            backgroundColor: '#203354',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0
        }
    })

    return (
        <View style={style.wrapper}>
            <Pressable style={style.btn}>
                <FontAwesomeIcon icon={faPlus} color="white" size={30}></FontAwesomeIcon>
            </Pressable>
            <Pressable style={style.btn}>
                <FontAwesomeIcon icon={faMinus} color="white" size={30}></FontAwesomeIcon>
            </Pressable>
            <Pressable style={style.btn}>
                <FontAwesomeIcon icon={faPlusMinus} color="white" size={30}></FontAwesomeIcon>
            </Pressable>
            <Pressable style={style.btn}>
                <FontAwesomeIcon icon={faMicrosoft} color="white" size={30}></FontAwesomeIcon>
            </Pressable>
        </View>
    )
}