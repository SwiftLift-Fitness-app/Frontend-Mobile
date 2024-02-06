import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const vw = Dimensions.get('screen').width;
const vh = Dimensions.get('screen').height;

export const style = StyleSheet.create({
    photo_name : {
        display : 'flex',
        width : vw,
        height : 0.1*vh,
        paddingLeft : 20,
        paddingRight : 20,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    card_info : {
        width : vw,
        display : 'flex',
        justifyContent : 'flex-start',
        alignItems : 'center'
    },
    card_info_elements_wrapper : {
        width : 0.6*vw,
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    container : {
        width : vw,
        height : vh
    },
    tags_wrapper : {
        width : vw,
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'flex-start'
    },
    tabs_title : {
        color : 'white',
        textAlign : "left"
    },
    text : {
        color : 'white'
    },
    tab : {
        width : 0.95*vw,
        height : 50,
        borderRadius : 10,
        backgroundColor : 'gray',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'flex-start',
        flexDirection : 'row'
    },
    wrapper : {
        width : vw,
        backgroundColor : 'black'
    }
})