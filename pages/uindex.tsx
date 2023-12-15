import React from "react";
import IndexHeader from "../components/indexheader";
import { useState } from "react";
import { View } from "react-native";
import { style } from "../stylesheets/indexstyle";

export default function Index({navigation}) {

    const [isLogged, setIsLogged] = useState(true);

    if(isLogged) {
        return (
            <View style={style.main}>
                <IndexHeader menu={navigation}/>
            </View>
        )
    }
}