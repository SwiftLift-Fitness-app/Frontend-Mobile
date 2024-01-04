import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const style = StyleSheet.create({
    container: {
        width: screenWidth,
        minHeight: screenHeight,
        backgroundColor: '#070720',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
})