import React, { useState } from "react";
import { style } from "../stylesheets/loginstyle";
import { TextInput, View, Text, ImageBackground, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGoogle, faFacebook, faMicrosoft, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { text } from "d3";

export default function SignUp({navigation, setUser} : any) {

    const [isLogged, setIsLogged] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    function sendData() {
        let res : Object = {
            email : email,
            password : password,
            username : username
        }
        return res;
    }

    fetch("http://localhost:8080/users/register", {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(sendData())
    }).then(async (response : Response) => {
        let code : number = await response.status;
        if(code === 200) {
            setUser(username)
            setIsLogged(true)
        }
        else setIsLogged(false)
    })

    return (
        <View style={style.body}>
            <ImageBackground source={require('../img/wavec.png')} style={style.backi}>
                <Text style={style.signlabel}>Create new account</Text>
            </ImageBackground>
            <View style={style.dummy}>
                <TextInput id='name' placeholder="Choose a username" style={style.textbox} onChangeText={text => {setUsername} }></TextInput>
                <TextInput placeholder="Enter your email" style={style.textbox} onChangeText={text => setEmail(text)}></TextInput>
                <TextInput placeholder="Enter password" style={style.textbox} onChangeText={text => setPassword(text)}></TextInput>
                <Pressable style={style.logbtn}><Text style={style.whitetext}>Sign Up</Text></Pressable>
                <Text>Or</Text>
                <View style={style.signfield}>
                    <Pressable style={style.logbtng}><FontAwesomeIcon icon={faGoogle} color="white" size={30}></FontAwesomeIcon></Pressable>
                    <Pressable style={style.logbtnf}><FontAwesomeIcon icon={faFacebook} color="white" size={30}></FontAwesomeIcon></Pressable>
                    <Pressable style={style.logbtnm}><FontAwesomeIcon icon={faTwitter} color="white" size={30}></FontAwesomeIcon></Pressable>
                </View>
                <Text onPress={() => {if(isLogged) navigation.navigate('Index')}} style={style.signuptext}>Already have an account? Log In</Text>
            </View>
        </View>
    )
}