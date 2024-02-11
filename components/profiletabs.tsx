import React from "react";
import { View, Text } from "react-native";
import { style } from "../stylesheets/profilestyle";

interface TabProps {
    tabs_title : string,
    tab_title1 : string,
    tab_title2 : string,
}

export default function ProfileTabs({tabs_title, tab_title1, tab_title2} : TabProps) {
    return (
        <View style={style.tags_wrapper}>
            <Text style={style.tabs_title}>{tabs_title}</Text>
            <View style={style.tab}>
                <Text style={style.text}>{tab_title1}</Text>
            </View>
            <View style={style.tab}>
                <Text style={style.text}>{tab_title2}</Text>
            </View>
        </View>
    )
}