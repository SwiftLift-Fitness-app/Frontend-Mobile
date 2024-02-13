import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { StyleSheet, Dimensions, View, Pressable } from "react-native";
import { faPlus, faMinus, faPlusMinus } from "@fortawesome/free-solid-svg-icons";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { StackNavigationProp } from "@react-navigation/stack";

interface ButtonPanelProps {
    navigation : StackNavigationProp<any>,
    endpoint : string
}

export default function ButtonPanel({navigation, endpoint} : ButtonPanelProps) {

    const vw = Dimensions.get('window').width;
    
    const style = StyleSheet.create({
        wrapper: {
            width: 0.9*vw,
            height: 0.55*vw,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 40,
            marginTop: 30
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
            <Pressable style={style.btn} onPress={() => {navigation.navigate(endpoint)}}>
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