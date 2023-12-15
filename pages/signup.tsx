import React from "react";
import { style } from "../stylesheets/loginstyle";
import { TextInput, View, Text, ImageBackground, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGoogle, faFacebook, faMicrosoft } from "@fortawesome/free-brands-svg-icons";

export default function SignUp({navigation}) {
    return (
        <View style={style.body}>
            <ImageBackground source={require('../img/wavec.png')} style={style.backi}>
                <Text style={style.signlabel}>Create new account</Text>
            </ImageBackground>
            <View style={style.dummy}>
                <TextInput placeholder="Choose a username" style={style.textbox}></TextInput>
                <TextInput placeholder="Enter your email" style={style.textbox}></TextInput>
                <TextInput placeholder="Enter password" style={style.textbox}></TextInput>
                <Pressable style={style.logbtn}><Text style={style.whitetext}>Sign Up</Text></Pressable>
                <Text>Or</Text>
                <View style={style.signfield}>
                    <Pressable style={style.logbtng}><FontAwesomeIcon icon={faGoogle} color="white" size={30}></FontAwesomeIcon></Pressable>
                    <Pressable style={style.logbtnf}><FontAwesomeIcon icon={faFacebook} color="white" size={30}></FontAwesomeIcon></Pressable>
                    <Pressable style={style.logbtnm}><FontAwesomeIcon icon={faMicrosoft} color="white" size={30}></FontAwesomeIcon></Pressable>
                </View>
                <Text onPress={() => {navigation.navigate('Login')}} style={style.signuptext}>Already have an account? Log In</Text>
            </View>
        </View>
    )
}