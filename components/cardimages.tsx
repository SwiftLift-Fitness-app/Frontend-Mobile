import React from "react";
import { Image, ImageBackground } from "react-native";
import { Text } from "react-native";
import { style } from "../stylesheets/exercisecardstyle";
import { Dimensions } from "react-native";

export default function Images({images} : any) {

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    let imagesComp : Array<Element> = []

    for(let i=0; i<images.length; i++) {
        imagesComp.push(<Image key={i} source={images[i]} style={style.cardimage}/>)
    }

    imagesComp.map((img : Element) => {
        console.log('Ready to render')
        console.log(img)
        return <>{img}</>
    })
    return <>{imagesComp}</>
}