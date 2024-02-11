import React, { useState, useMemo } from "react";
import { Text, View, StyleSheet, Dimensions, Pressable } from "react-native";
import Header from "../components/header";
import { Navigation, Navigator } from "react-router-dom";
import ProgressBar from "../components/progressbar";
import { StackNavigationProp } from "@react-navigation/stack";
import IndexHeader from "../components/indexheader";
import { CheckBox, Input, Slider } from "react-native-elements";
import RadioGroup from 'react-native-radio-buttons-group';

//user logged state should be kept in the AppNavigator
interface SurveyProp {
    navigation : StackNavigationProp<any>
//  user : string
}

export default function Survey({navigation} : SurveyProp) {

    const [stage, setStage] = useState(1);
    const [age, setAge] = useState(12);
    const [gender, setGender] = useState('1');
    const [weight, setWeight] = useState(40);
    const [height, setHeight] = useState(140);
    const [willFProg, setWillFProg] = useState('1');
    const [willFDiet, setWillFDiet] = useState('1');

    const vw = Dimensions.get('screen').width;
    const vh = Dimensions.get('screen').height;

    function prepareJSON() {
        let g = ""
        if(gender === '1') g='male';
        else if(gender === '2') g='female';
        else g='other'

        const json : Object = {
            user : "someone",
            age : age,
            gender : g,
            weight : weight,
            height : height,
        }
        return json;
    }
    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'Male',
            value: 'Male'
        },
        {
            id: '2',
            label: 'Female',
            value: 'Female'
        },
        {
            id: '3',
            label: 'Other',
            value: 'Other'
        }
    ]), []);

    const radioBtnsCreate = useMemo(() => ([
        {
            id: '1',
            label : 'Yes',
            value : 'Yes'
        },
        {
            id: '2',
            label : 'No',
            value : 'No'
        }
    ]), []);

    const style = StyleSheet.create({
        body : {
            width : vw,
            height : vh,
            backgroundColor : 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20
        },
        buttongrp : {
            display: 'flex',
            width : vw,
            flexDirection: 'row',
            alignItems: "flex-start",
            justifyContent: 'space-evenly'
        },
        text : {
            color: 'white',
        },
        title : {
            fontSize : 30,
            textAlign : 'center',
        },
        maintitle : {
            marginBottom : 30,
            marginTop : -30
        }
    });

    if(stage === 1) {
        return (
            <View style={style.body}>
                <Text style={[style.text, style.title, style.maintitle]}>Initial survey</Text>
                <Text style={[style.text, style.title]}>Please answer the following questions.</Text>
                <View>
                    <Text style={style.text}>What is your sex?</Text>
                    <RadioGroup labelStyle={style.text} radioButtons={radioButtons} onPress={setGender} selectedId={gender}/>
                </View>
                <View>
                    <Text style={style.text}>What is your age?</Text>
                    <Slider thumbStyle={{width : 20, height : 20}} value={age} onValueChange={(value : number) => setAge(value)}/>
                    <Text style={style.text}>{Math.round((age+12)+age*100)}</Text>
                </View>
                <View>
                    <SurveyButton setStage={setStage} stage={2} text="Next"/>
                </View>
                <ProgressBar prog={0.33}/>
            </View>
        ) 
    } else if (stage === 2) {
        return (
            <View style={style.body}>
                <Text style={[style.text, style.title, style.maintitle]}>Initial survey</Text>
                <Text style={[style.text, style.title]}>Please answer the following questions.</Text>
                <View>
                    <Text style={style.text}>Enter your weight</Text>
                    <Slider thumbStyle = {{width : 20, height : 20}} value={weight} onValueChange={(value : number) => setWeight(value)}/>
                </View>
                <View>
                    <Text style={style.text}>Enter your height</Text>
                    <Slider thumbStyle = {{width : 20, height : 20}} value={height} onValueChange={(value : number) => setHeight(value)}/>
                </View>
                <View style = {style.buttongrp}>
                    <SurveyButton setStage={setStage} stage={1} text="Back"/>
                    <SurveyButton setStage={setStage} stage={3} text="Next"/>                    
                </View>
                <ProgressBar prog={0.67}/>
            </View>
        )
    } else {
        return (
            <View style={style.body}>
                <Text style={[style.text, style.title, style.maintitle]}>Initial survey</Text>
                <Text style={style.text}>It's almost done</Text>
                <View>
                    <Text style={style.text}>Would you like to create your first exercise program?</Text>
                    <RadioGroup labelStyle={style.text} radioButtons={radioBtnsCreate} onPress={setWillFProg} selectedId={willFProg}/>
                </View>
                <View>
                    <Text style={style.text}>Would you like to create your first diet program?</Text>
                    <RadioGroup labelStyle={style.text}  radioButtons={radioBtnsCreate} onPress={setWillFDiet} selectedId={willFDiet}/>
                </View>
                <View style={style.buttongrp}>
                    <SurveyButton setStage={setStage} stage={2} text="Back"/>
                    <SubmitButton navigateTo="Index" navigation={navigation} json={prepareJSON}/>
                </View>
                <ProgressBar prog={0.99}/>
            </View>
        )
    }
}

interface SurveyButtonProps {
    setStage : any,
    stage : number,
    text : string
}

interface SubmitButtonProps {
    navigateTo : string,
    navigation : StackNavigationProp<any>,
    json : Object
}

export function SurveyButton({setStage, stage, text} : SurveyButtonProps) {

    const style = StyleSheet.create({
        btn : {
            width: 70,
            height : 40,
            backgroundColor: 'gray',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10
        },
        text : {
            color: 'white'
        }
    });

    return (
        <Pressable onPress={() => setStage(stage)} style={style.btn}>
                    <Text style={style.text}>{text}</Text>
        </Pressable>
    )
}

export function SubmitButton({navigateTo, navigation, json} : SubmitButtonProps) {

    function sendJSON() {
        fetch("http://localhost/survey", {
            method : "POST",
            body : JSON.stringify(json),
            headers : {
                "Content-type" : "application/json"
            }
        }).then((response : Response) => {
            console.log(response.status);
        })
    }

    const style = StyleSheet.create({
        btn : {
            width: 70,
            height : 40,
            backgroundColor: 'gray',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10
        }
    });

    return (
        <Pressable onPress={() => {
            navigation.navigate(navigateTo);
            sendJSON();
        }} style={style.btn}>
            <Text>Submit</Text>
        </Pressable>
    )
}