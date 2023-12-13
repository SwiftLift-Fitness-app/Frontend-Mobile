import React from "react";
import { View, Text, Pressable } from "react-native";
import { style } from "../stylesheets/resultstyle";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBolt, faBrain, faComment, faEye } from "@fortawesome/free-solid-svg-icons";

export default function Results() {
    return (
        <View style={style.main}>
            <View style={style.main_panel}>
                <View style={style.result_screen}>
                <Text style={style.res}>Your Result</Text>
                <View stlye={style.circle}>
                    <Text style={style.point}>76</Text>
                    <Text class={style.max_points}>of 100</Text>
                </View>
                <Text style={style.great}>Great</Text>
                <Text style={style.panel_text}>You scored higher than 65% of the people who have taken these tests.</Text>
            </View>
                <View style={style.right_screen}>
                    <Text style={style.title1}>Summary</Text>
                    <View style={[style.result_panel, style.reaction]}><View><FontAwesomeIcon icon={faBolt}></FontAwesomeIcon>Reaction</View><View style={style.score}><View style={style.point}>80 </View> / 100</View></View>
                    <View style={[style.result_panel, style.reaction]}><View><FontAwesomeIcon icon={faBrain}></FontAwesomeIcon>Memory</View><View style={style.score}><View style={style.point}>92</View> / 100</View></View>
                    <View style={[style.result_panel, style.reaction]}><View><FontAwesomeIcon icon={faComment}></FontAwesomeIcon>Verbal</View><View style={style.score}><View style={style.point}>61</View> / 100</View></View>
                    <View style={[style.result_panel, style.reaction]}><View><FontAwesomeIcon icon={faEye}></FontAwesomeIcon>Visual</View><View style={style.score}><View style={style.point}>72</View> / 100</View></View>
                    <Pressable style={style.button}>Continue</Pressable>
                </View>
            </View>
        </View>
    )
}