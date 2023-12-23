import React, { useEffect } from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function PageTitle({text} : any) {

    const [loadedfonts] = useFonts({
        'ProDunex' : require('../assets/fonts/ProDunex/pro-dunex-52272284/Pro-Dunex-Regular.otf')
        ,'RunBoy' : require('../assets/fonts/RunBoy/runboy-font/RunboyFreeTrial-2ODAo.otf')
    });

    const style = StyleSheet.create({
        title: {
            textAlign: 'center',
            fontSize: 36,
            color: 'white',
            fontFamily: 'RunBoy',
            margin: 15
        }
    });

    if(!loadedfonts) {
        return <Text>Loading ...</Text>
    }

    return (
        <Text style={style.title}>{text}</Text>
    )
}