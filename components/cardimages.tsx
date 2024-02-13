import React from "react";
import { Image, ImageBackground, View } from "react-native";
import { Text } from "react-native";
import { style } from "../stylesheets/exercisecardstyle";
import { Dimensions } from "react-native";

export default function Images({images, type} : any) {

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    let imagesComp : Array<Element> = []

    for(let i=0; i<images.length; i++) {
        if(type === 'diets') imagesComp.push(<Image width={50} height={50} key={i} source={{ uri : images[i] }} style={style.cardimage_d}/>)
        else imagesComp.push(<Image width={50} height={50} key={i} source={{ uri : images[i] }} style={style.cardimage}/>)
    }

    imagesComp.map((img : Element) => {
        console.log('Ready to render')
        console.log(img)
        return <>{img}</>
    })
    return <>{imagesComp}</>
}