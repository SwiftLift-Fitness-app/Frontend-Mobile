import React from "react";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        width: 250,
        height: 250,
        backgroundColor: '#152238',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    title: {
        color: 'white',
        fontSize: 20,
        textAlign: 'left'
    },
    cardimage: {
        width: 250,
        height: 100,
        borderRadius: 10,
        marginLeft: -5,
        marginTop: -10
    },
    desc: {
        color: 'white',
        fontSize: 15
    }
})