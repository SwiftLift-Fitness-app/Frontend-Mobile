import React, { StyleHTMLAttributes } from "react";
import { StyleSheet, Dimensions, DimensionValue } from "react-native";

const vw : DimensionValue = Dimensions.get('window').width;
const vh : DimensionValue = Dimensions.get('window').height;

export const style = StyleSheet.create({
    wrapper: {
        width: vw,
        height: 55,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        position: 'absolute',
        backgroundColor: '#1c1c1c',
        bottom: 0,
        paddingBottom: 2
    },
    homebtn: {
        height: 50,
        width: 50,
        backgroundColor: '#1c1c1c',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    circle: {
        height: 75,
        width: 75,
        backgroundColor: '#1c1c1c',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
})