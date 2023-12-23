import React from "react";
import { Image, ImageBackground } from "react-native";
import { Text } from "react-native";

export default function Images({images} : any) {
    let imagesComp : Array<Element> = []

    for(let i=0; i<images.length; i++) {
        imagesComp.push(<Image key={i} source={images[i]} style={{width: 100, height: 100}}/>)
    }

    imagesComp.map((img : Element) => {
        console.log('Ready to render')
        console.log(img)
        return <>{img}</>
    })
    return <>{imagesComp}</>
    return <Text style={{color: 'white'}}>DOESNT WORRRKKK</Text>
}