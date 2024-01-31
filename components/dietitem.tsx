import React from "react";
import { StyleSheet, Dimensions, View, Text, Image } from "react-native";
import { useState } from "react";
import { style } from "./exerciseitem";
import AddRemove from "./addremove";
import WeekDays from "./weekdaystray";

interface DietBuilderJsonResponse {
    name : string,
    image : string,
    description : string,
    nutri_info : Array<number>
}

export default function DietItem({name, image, description, nutri_info} : DietBuilderJsonResponse) {


    const vw = Dimensions.get('window').width;
    const vh = Dimensions.get('window').height;

    const [am1, setAm1] = useState(100);

    return (
        <View style={style.wrapper}>
            <Image source={require(image)} style={style.image}/>
            <View style={style.info}>
                <Text>{name}</Text>
                <View style={style.tags_wrapper}>
                    <Text>{description}</Text>
                </View>
            </View>
            <View style={style.addr_wrapper}>
                <AddRemove amount={am1} setAmount={setAm1} label="Amount"/>
                <WeekDays days={[]}/>
            </View>
        </View>
    )



}