import React from "react";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    body: {
        backgroundColor: '#4461ae',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginbox: {
        backgroundColor: '#0c0f2d',
        width: '90vw',
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        gap: 40
    },
    title: {
        color: 'white',
        fontSize: 40
    },
    textbox: {
        backgroundColor: 'white',
        fontSize: 15,
        width: '70vw',
        height: 30,
        borderRadius: 5,
        marginTop: 15,
        paddingLeft: 10
    },
    logbtn: {
        width: '70vw',
        height: '5vh',
        backgroundColor: '#4461ae',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        color: 'white'
    },
    backi: {
        width: '100vw',
        height: '50vh',
        transform: 'rotate(180deg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dummy: {
        width: '100vw',
        height: '50vh',
        backgroundColor: '#02061b',
        display: 'flex',
        alignItems: 'center',

    },
    signlabel: {
        transform: 'rotate(180deg)',
        fontSize: 40,
        color: 'white',
        width: '70vw'
    },
    logbtng: {
        width: '7vh',
        height: '7vh',
        backgroundColor: '#e04c3e',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    logbtnf: {
        width: '7vh',
        height: '7vh',
        backgroundColor: '#5179bd',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    logbtnm: {
        width: '7vh',
        height: '7vh',
        backgroundColor: '#a772c1',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    signfield: {
        display: 'flex',
        flexDirection: 'row',
        gap: '12vw',
        marginTop: 40
    },
    signuptext: {
        color: 'white',
        marginTop: 35,
        fontSize: 20
    },
    whitetext: {
        color: 'white'
    }
})