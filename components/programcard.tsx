import React from "react";
import { View, Text, Pressable } from "react-native";
import { StyleSheet, Dimensions } from "react-native";

export default function ProgramCard() {

    const vw = Dimensions.get('window').width;
    const vh = Dimensions.get('window').height;

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: '#0d0e0e',
          borderRadius: 10,
          paddingTop: 10
        },
        header: {
          fontSize: 24,
          fontWeight: 'bold',
          color: 'white',
          marginBottom: 20,
        },
        top_bar: {
            width: 0.875*vw,
            height: 0.05*vh,
            backgroundColor: '#4461ae',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 15,
            paddingRight: 15,
            fontSize: 20,
            color: 'white'
        },
    });
    return (
        <Pressable style={styles.container} >
            <Text style={styles.top_bar}>My first workout</Text>
            <Text>Hi</Text>
        </Pressable>
    )
}