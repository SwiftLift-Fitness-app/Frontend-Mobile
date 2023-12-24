import React from "react";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFish, faPizzaSlice, faCheese, faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import { useFonts } from "expo-font";

export default function DietTab({progress, meals} : any) {

    const vw = Dimensions.get('window').width;
    const vh = Dimensions.get('window').height;

    const [loadedfonts] = useFonts({
        'Ubuntu' : require('../assets/fonts/Ubuntu/Ubuntu-Regular.ttf')
    });

    if(!loadedfonts) {
        return <Text>Loading ...</Text>
    }

    const style = StyleSheet.create({
        container: {
            width: 0.875*vw,
            height: 'auto',
            backgroundColor: '#152238',
            borderRadius: 10,
            fontFamily: 'Ubuntu'
        },
        progress_bar: {
            width: progress/100*0.875*vw,
            height: 0.05*vh,
            backgroundColor: '#4461ae',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 15,
            paddingRight: 15
        },
        progress_wrapper: {
            width: 0.875*vw,
            height: 0.05*vh,
            backgroundColor: '#152238',
            borderRadius: 10
        },
        table_frow: {
            width: 0.875*vw,
            height: 0.07*vh,
            backgroundColor: '#1c1c1c',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            fontFamily: 'Ubuntu'
        },
        table_row: {
            width: 0.875*vw,
            height: 0.05*vh,
            backgroundColor: '#0d0e0e',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            fontFamily: 'Ubuntu'
        },
        white_text: {
            color: 'white',
            fontFamily: 'Ubuntu'
        },
        buttons: {
            width: 0.875*vw,
            height: 0.05*vh,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        end_btn: {
            width: 0.43*vw,
            height: 0.05*vh,
            backgroundColor: '#4461ae',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        progress_text: {
            color: 'lightgray',
            fontSize: 16,
            fontWeight: 'bold'
        },
        more_btn: {
            position: 'relative',
            width: 70,
            height: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2a48fd',
            top: -0.33*vh,
            left: 0.65*vw,
            borderRadius: 6
        }
    })
    return (
        <View style={style.container}>
            <View style={style.progress_wrapper}>
                <View style={style.progress_bar}>
                    <Text style={style.progress_text}>{Math.floor(progress/100*2500)} / 2500</Text>
                    <Text style={style.progress_text}>{progress}%</Text>
                </View>
            </View>
            <View>
                <View style={style.table_frow}>
                    <Text style={style.white_text}>Type</Text>
                    <Text style={style.white_text}>Amount</Text>
                    <Text style={style.white_text}>Calories</Text>
                </View>
                <View style={style.table_row}>
                    <Text style={style.white_text}><FontAwesomeIcon icon={faPizzaSlice} color="white"></FontAwesomeIcon></Text>
                    <Text style={style.white_text}>100g</Text>
                    <Text style={style.white_text}>445</Text>
                </View>
                <View style={style.table_row}>
                    <Text style={style.white_text}><FontAwesomeIcon icon={faFish} color="white"></FontAwesomeIcon></Text>
                    <Text style={style.white_text}>250g</Text>
                    <Text style={style.white_text}>251</Text>
                </View>
                <View style={style.table_row}>
                    <Text style={style.white_text}><FontAwesomeIcon icon={faCheese} color="white"></FontAwesomeIcon></Text>
                    <Text style={style.white_text}>60g</Text>
                    <Text style={style.white_text}>120</Text>
                </View>
                <View style={style.table_row}>
                    <Text style={style.white_text}><FontAwesomeIcon icon={faAppleWhole} color="white"></FontAwesomeIcon></Text>
                    <Text style={style.white_text}>100g</Text>
                    <Text style={style.white_text}>40</Text>
                </View>
            </View>
            <View style={style.buttons}>
                <Pressable style={style.end_btn}>Add meal</Pressable>
                <Pressable style={style.end_btn}>View more</Pressable>
            </View>
        </View>
    )
}