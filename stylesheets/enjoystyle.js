import React from "react";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        backgroundColor: '#02061c',
        width: '100vw',
        height: '37.5vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 10
    },
    tipstext: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Ubuntu'
    },
    icons: {
        fontSize: 60,
        color: 'white'
    },
    grid: {
        width: '70vw',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        gap: 30
    }
})