import React from "react";
import { View, Text, StyleSheet, Dimensions, Pressable, GestureResponderEvent, NativeSyntheticEvent } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlay, faEdit, faFastForward, faInfo} from "@fortawesome/free-solid-svg-icons";

interface Props {
    size: number,
    type: string,
    onClick? : any
}

export default function PlayButton({size, type, onClick} : Props) {

    const vw = Dimensions.get('window').width;
    const vh = Dimensions.get('window').height;

    const styles = StyleSheet.create({
        container: {
            width: 50*size,
            height: 50*size,
            borderRadius: 50,
            backgroundColor: '#808080',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }

    })
    if(type === 'play') { 
        return (
            <View style={styles.container}>
                <FontAwesomeIcon icon={faPlay} color="white" size={16*size}/>
            </View>
        )
    }
    else if (type === 'edit') {
        return (
            <View style={styles.container}>
                <FontAwesomeIcon icon={faEdit} color="white" size={16*size}/>
            </View>
        )
    }
    else if (type === 'skip') {
        return (
            <View style={styles.container}>
                <FontAwesomeIcon icon={faFastForward} color="white" size={16*size}/>
            </View>
        )
    }
    else if (type === "info") {
        return (
            <Pressable style={styles.container} onPress={onClick}>
                <FontAwesomeIcon icon={faInfo} color="white" size={16*size}/>
            </Pressable>
        )
    }
}