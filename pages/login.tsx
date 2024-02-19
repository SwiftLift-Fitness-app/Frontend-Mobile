import React from "react";
import { View, Text, TextInput, Pressable, Image, ImageBackground } from "react-native";
import { style } from "../stylesheets/loginstyle";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFacebook, faGoogle, faMicrosoft, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import { PageProps } from "../navigationProps";

export default function Login({navigation, user, setUser} : any) {

    const [isLogged, setIsLogged] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function onSubmit() {
        let post : Object =  {
            username : username,
            password : password
        }
        setUser("sample");
        return post;
    }

    fetch(`http://localhost:8080/users/login?username=${username}&password=${password}`, {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(onSubmit())
    }).then((response : Response) => {
        
    })
    
    return (
        <View style={style.body}>
            <ImageBackground source={require('../img/wavec.png')} style={style.backi}>
                <Text style={style.signlabel}>Login to your account</Text>
            </ImageBackground>
            <View style={style.dummy}>
                <TextInput placeholder="Enter your username" style={style.textbox} onChangeText={text => setUsername(text)}></TextInput>
                <TextInput placeholder="Enter password" style={style.textbox} onChangeText={text => setPassword(text)}></TextInput>
                <Pressable style={style.logbtn} onPress={ async () => { /* await (implement log in system) navigation to index is just for testing the Index page */ navigation.navigate('Survey')}}><Text style={style.whitetext}>Log In</Text></Pressable>
                <Text>Or</Text>
                <View style={style.signfield}>
                    <Pressable style={style.logbtng}><FontAwesomeIcon icon={faGoogle} color="white" size={30}></FontAwesomeIcon></Pressable>
                    <Pressable style={style.logbtnf}><FontAwesomeIcon icon={faFacebook} color="white" size={30}></FontAwesomeIcon></Pressable>
                    <Pressable style={style.logbtnm}><FontAwesomeIcon icon={faTwitter} color="white" size={30}></FontAwesomeIcon></Pressable>
                </View>
                <Text onPress={() => navigation.navigate('Signup')} style={style.signuptext}>Don't have an account? Sign Up</Text>
            </View>
        </View>
    )
}