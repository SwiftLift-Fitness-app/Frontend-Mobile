import React from "react";
import { View, Text, TextInput, Pressable, Image, ImageBackground } from "react-native";
import { style } from "../stylesheets/loginstyle";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFacebook, faGoogle, faMicrosoft } from "@fortawesome/free-brands-svg-icons";

export default function Login() {
    return (
        <View style={style.body}>
            <ImageBackground source={require('../img/wave-haikei.png')} style={style.backi}>
                <Text style={style.signlabel}>Login to your account</Text>
            </ImageBackground>
            <View style={style.dummy}>
                <TextInput placeholder="Enter your email" style={style.textbox}></TextInput>
                <TextInput placeholder="Enter password" style={style.textbox}></TextInput>
                <Pressable style={style.logbtn}><Text style={style.whitetext}>Log In</Text></Pressable>
                <Text>Or</Text>
                <View style={style.signfield}>
                    <Pressable style={style.logbtng}><FontAwesomeIcon icon={faGoogle} color="white" size='30'></FontAwesomeIcon></Pressable>
                    <Pressable style={style.logbtnf}><FontAwesomeIcon icon={faFacebook} color="white" size='30'></FontAwesomeIcon></Pressable>
                    <Pressable style={style.logbtnm}><FontAwesomeIcon icon={faMicrosoft} color="white" size='30'></FontAwesomeIcon></Pressable>
                </View>
                <Text style={style.signuptext}>Don't have an account? Sign Up</Text>
            </View>
        </View>
    )
}