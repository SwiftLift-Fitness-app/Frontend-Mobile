import React from "react";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    contain: {
        width: '100vw',
        height: '50vh'
    },
    wrapper: {
        width: '100vw',
        height: '50vh',
        boxSizing: 'border-box'
    },
    backi: {
        width: '100vw',
        height: '50vh',
        opacity: 0.1,
        display: 'flex',
        alignItems: 'center'
    },
    bannertext: {
        fontSize: 60,
        color: 'white',
        zIndex: 0,
        lineHeight: 60,
        fontFamily: 'Ubuntu'
        
    },
    yaw: {
        position: 'absolute',
        top: 60,
        left: 30
    },
    yajb: {
        backgroundColor: '#02061c',
        width: 100,
        height: 50,
        borderRadius: 25,
        marginTop: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btntext: {
        color: 'white',
        fontFamily: 'Ubuntu'
    }
})