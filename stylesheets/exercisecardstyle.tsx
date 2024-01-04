import React from "react";
import { StyleSheet, Dimensions } from "react-native";
const width = '100%';

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;
const imgw = '60%';

export const style = StyleSheet.create({
    container: {
        width: 0.875*vw,
        borderRadius: 10,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20
    },
    title: {
        color: 'white',
        fontSize: 20,
        textAlign: 'left'
    },
    cardimage: {
        width: 95,
        height: 70
    },
    desc: {
        color: 'white',
        fontSize: 15
    }
})