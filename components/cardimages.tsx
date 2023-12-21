import React from "react";
import { Image } from "react-native";

export default function Images({images} : any) {
    let imagesComp : Array<Element> = []

    for(let i=0; i<images.length; i++) {
        imagesComp.push(<Image source={require(images[i])}/>)
    }

    return (
        <>
            {imagesComp}
        </>
    );

}