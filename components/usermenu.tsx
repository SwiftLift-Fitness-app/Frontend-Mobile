import React from "react";
import { View, Text, Pressable } from "react-native";
import { style } from "../stylesheets/usermenustyle";
import { useState } from "react";

export default function UserMenu({isVisible, menu} : any) {

    if(isVisible) {
        return (
                <View style={style.content}>
                    <Pressable style={style.option}>
                        <Text style={style.textColor}>Profile</Text>
                    </Pressable>
                    <Pressable style={style.option} onPress={() => {menu.navigate('Programs')}}>
                        <Text style={style.textColor}>Programs</Text>
                    </Pressable>
                    <Pressable style={style.option}>
                        <Text style={style.textColor}>Diets</Text>
                    </Pressable>
                    <Pressable style={style.option} onPress={() => {menu.navigate('Stats')}}>
                        <Text style={style.textColor}>Stats</Text>
                    </Pressable>
                    <Pressable style={style.option} onPress={() => {menu.navigate('Login')}}>
                        <Text style={style.textColor}>Log Out</Text>
                    </Pressable>
                </View>
        )
    }
}