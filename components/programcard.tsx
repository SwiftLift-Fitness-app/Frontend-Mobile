import React from "react";
import { View, Text, Pressable, DimensionValue } from "react-native";
import { StyleSheet, Dimensions } from "react-native";
import PlayButton from "./playbutton";
import Images from "./cardimages";
import image1 from '../img/push-up.png';
import image2 from '../img/bench-press.png';
import image3 from '../img/dumbell-curl.png'
import { style } from "../stylesheets/exercisecardstyle";
import WeekDays from '../components/weekdaystray';
import MuscleGroups from "./musclegroups";
import Kalendar from "./calendar";

export default function ProgramCard() {

    const vw : number = Dimensions.get('window').width;
    const vh : number = Dimensions.get('window').height;
    const cw_width : DimensionValue = '100%';

    const styles = StyleSheet.create({
        container: {
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#0d0e0e',
          borderRadius: 20,
          paddingTop: 10,
          width: 0.875*vw,
          minHeight: 0.3*vh,
          paddingBottom: 10,
          gap: 10
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
        controls_wrapper: {
            width: cw_width,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: '#4461ae',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            gap: 25
        },
        main_wrapper : {
            display : 'flex',
            flexDirection : 'column',
            gap : 30
        }
    });
    return (
        <View>
        <Kalendar></Kalendar>
        <Pressable style={styles.container} >
            <Text style={styles.top_bar}>My first workout</Text>
            <View style={style.container}>
                <Images images={[image1, image2, image3]}></Images>
            </View>       
            <WeekDays days={[true, true, false, true, false, true, false]}></WeekDays>
            <View>
                <MuscleGroups muscles={["Chest", "Legs", "ARM"]}/>
            </View>
            <View style={styles.controls_wrapper}>
                <PlayButton size={1} type='edit'/>
                <PlayButton size={1.25} type='play'/>
                <PlayButton size={1} type='skip'/>
            </View>
        </Pressable>
        </View>
    )
}