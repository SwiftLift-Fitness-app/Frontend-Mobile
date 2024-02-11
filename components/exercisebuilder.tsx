import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { View, StyleSheet } from "react-native";
import { ExerciseItem } from "./exerciseitem";

interface ExerciseItemResponse {
    name : string,
    image : string,
    description : string,
    muscles : Array<string>
}

interface ExerciseBuilderJsonResponse {
    exercises : Array<ExerciseItemResponse>
}

export const ExerciseBuilder = React.forwardRef((ref : any) => {

    let jsonData : string; 

    fetch('http://localhost/exercises/all', {
        method: "GET"
    }).then(async (response: Response) => {
        jsonData = await response.text();
        jsonData = JSON.parse(jsonData);
    })

    let exerciseItems : Array<Element> = [];
    let refArray : Array<any> = [];

    useImperativeHandle(ref, () => {
    
        function sendCurrentConf() {

            let objArr : Array<Object> = [];
            refArray.forEach(child => {
                objArr.push(child.current.sendCurrentDataPackage());
            })

            return objArr
        }
    })

    exerciseItems.forEach(ex => {
        const childRef = useRef();
        refArray.push(childRef);
    })

    for(let i=0; i<exerciseItems.length; i++) {
        exerciseItems.push(<ExerciseItem key={i} image="/" name="name" description="desc" muscles={['']} isEdit={false} removeFunc={""} ref={refArray[i]}/>)
    }

    exerciseItems.map(item => {
        return <>{item}</>
    })

    return <>{exerciseItems}</>;
})