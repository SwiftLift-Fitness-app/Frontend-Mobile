import React, { Component } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { useSwipe } from "../hooks/useSwipe";
import ExerciseCard from "./trainingexercisecard";
import ProgramCard from "./programcard";

export default function CardSlider({cards}: any) {

    const vw = Dimensions.get('window').width
    const style = StyleSheet.create({
        slider: {
            height: vw,
            width: vw,
            display: 'flex'
        },
        flex: {
            display: 'flex',
            justifyContent: 'center',
            flex: 1,
            flexDirection: 'row',
            gap: 40
        }
    })

    const {onTouchStart, onTouchEnd} = useSwipe(onSwipeLeft, onSwipeRight, 6);

    function onSwipeLeft(){
        console.log('SWIPE_LEFT')
    }

    function onSwipeRight(){
        console.log('SWIPE_RIGHT')
    }

    const cardsArr = [];

    for(let i=0; i<cards.length; i++) {
        cardsArr.push(<ProgramCard></ProgramCard>)
    }
    return (
        <ScrollView style={style.slider} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <View style={style.flex}>
                {cardsArr.map((card : Element) => {
                    return <>{card}</>
                })}
            </View>
        </ScrollView>
    )
}