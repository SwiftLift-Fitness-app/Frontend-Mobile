import React from "react";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    header: {
        backgroundColor: '#02061c',
        width: '100vw',
        height: '7.5vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: 'row',
        boxSizing: 'border-box',
        paddingLeft: 15,
        paddingRight: 15,
        position: 'relative'
    },
    logo: {
        width: '5vh',
        height: '5vh'
    },
    headtext: {
        color: 'white'
    },
    loginbtn: {
        borderRadius: 25,
        backgroundColor: '#4461ae',
        width: '20vw',
        height: '5vh',
    },
    centercontent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center"
    },
    titletext: {
        width: '50%',
        height: '50%'
    },
    usericon: {
        width: '6vh',
        height: '6vh'
    }
})