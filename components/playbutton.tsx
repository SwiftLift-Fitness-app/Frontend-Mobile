import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

interface Props {
    size: number
}

export default function PlayButton({size} : Props) {

    const vw = Dimensions.get('window').width;
    const vh = Dimensions.get('window').height;

    const styles = StyleSheet.create({
        container: {
            width: 50*size,
            height: 50*size,
            borderRadius: 50,
            backgroundColor: 'darkgray',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }

    })

    return (
        <View style={styles.container}>
            <FontAwesomeIcon icon={faPlay} color="white" size={16*size}/>
        </View>
    )
}