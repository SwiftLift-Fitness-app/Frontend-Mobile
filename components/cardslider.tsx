import React, { Component } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { useSwipe } from "../hooks/useSwipe";
import ExerciseCard from "./trainingexercisecard";
import ProgramCard from "./programcard";
import DietCard from "./dietcard";

export default function CardSlider({cards, type, navigation}: any) {

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
        if(type === "diet") cardsArr.push(<DietCard navigation={navigation}></DietCard>)
        else cardsArr.push(<ProgramCard></ProgramCard>)
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