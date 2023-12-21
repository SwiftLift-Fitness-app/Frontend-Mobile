import React from "react";
import { Image, ImageBackground } from "react-native";

export default function Images({images} : any) {
    let imagesComp : Array<Element> = []

    for(let i=0; i<images.length; i++) {
        imagesComp.push(<Image source={require(images[0])}/>)
    }

    return (
        <>
            {imagesComp}
        </>
    );

}