import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { Image } from "react-native";
import MuscleGroups from "./musclegroups";
import AddRemove from "./addremove";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useRef, forwardRef, useImperativeHandle } from "react";

interface ExerciseItemProps {
    image : string,
    name: string,
    description: string,
    muscles: Array<string>,
    isEdit : boolean,
    removeFunc? : any
}

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

export const style = StyleSheet.create({
    wrapper: {
        width: vw,
        height: 0.15*vw,
        backgroundColor: 'gray',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    image: {
        width: 0.12*vw,
        height: 0.12*vw
    },
    info: {
        width: 0.4*vw,
        height: 0.15*vw
    },
    tags_wrapper: {
        minHeight: 50,
        maxWidth: 150,
        display: 'flex',
        flexWrap: 'wrap'
    },
    addr_wrapper: {
        height: 0.15*vw,

    },
    removebtn : {
        height : 0.05*vw,
        width : 0.05*vw,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export const ExerciseItem = React.forwardRef(({image, name, description, muscles, isEdit, removeFunc} : ExerciseItemProps, ref : any) => {

    const [am1, setAm1] = useState(0);
    const [am2, setAm2] = useState(0);
    const [am3, setAm3] = useState(0);

    useImperativeHandle(ref, () => {
        return {
            sendCurrentDataPackage() {
            const exercise : Object = {
                name : name,
                sets : am1,
                reps : am2,
                weight : am3
            }

            return exercise;
        }
    }
    });

    if(!isEdit) {
        return (
            <View style={style.wrapper}>
                <Image source={{uri : image}} style={style.image}/>
                <View style={style.info}>
                    <Text>{name}</Text>
                    <View style={style.tags_wrapper}>
                        <MuscleGroups muscles={muscles}/>
                    </View>
                </View>
                <View style={style.addr_wrapper}>
                        <AddRemove amount={am1} setAmount={setAm1} label="Reps"/>
                        <AddRemove amount={am2} setAmount={setAm2} label="Sets"/>
                        <AddRemove amount={am3} setAmount={setAm3} label="Weight"/>
                </View>
            </View>
        )
    } else {
        return (
            <View style={style.wrapper}>
            <Pressable onPress={removeFunc} style={style.removebtn}>
                <FontAwesomeIcon icon={faRemove} color="red"></FontAwesomeIcon>
            </Pressable>
                <Image source={{uri : image}} style={style.image}/>
                <View style={style.info}>
                    <Text>{name}</Text>
                    <View style={style.tags_wrapper}>
                        <MuscleGroups muscles={muscles}/>
                    </View>
                </View>
                <View style={style.addr_wrapper}>
                        <AddRemove amount={am1} setAmount={setAm1} label="Reps"/>
                        <AddRemove amount={am2} setAmount={setAm2} label="Sets"/>
                        <AddRemove amount={am3} setAmount={setAm3} label="Weight"/>
                </View>
            </View>
        )
    }
});