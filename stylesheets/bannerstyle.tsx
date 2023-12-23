import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const style = StyleSheet.create({
    contain: {
        width: screenWidth,
        height: 0.5*screenHeight
    },
    wrapper: {
        width: screenWidth,
        height: 0.5*screenHeight,
        boxSizing: 'border-box'
    },
    backi: {
        width: screenWidth,
        height: 0.5*screenHeight,
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
        left: 30,
        zIndex: 990
    },
    yajb: {
        backgroundColor: '#02061c',
        width: 100,
        height: 50,
        borderRadius: 25,
        marginTop: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        elevation: 99,
        zIndex: 99
    },
    btntext: {
        color: 'white',
        fontFamily: 'Ubuntu'
    }
})