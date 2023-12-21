import React from "react";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    content: {
        width: '50vw',
        height: 'auto',
        right: '1rem',
        top: '3rem',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        border: '2px solid gray',
        position: "absolute",
        transform: "animate all 1s",
        borderRadius: "10px"
    },
    option: {
        width: '100%',
        height: '3.5rem',
        margin: 0,
        borderTopColor: 'gray',
        borderTopWidth: '1px',
        borderBottomColor: 'gray',
        borderBottomWidth: '1px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textColor: {
        color: 'white',
        fontSize: '1.5rem'
    }

})