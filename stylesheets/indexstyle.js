import React from "react";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    main: {
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: '#070720'
    }, 
    slider: {
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 20
    },
    slider_title: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'ProDunex',
        marginLeft: 15,
        marginBottom: 15
    }
})