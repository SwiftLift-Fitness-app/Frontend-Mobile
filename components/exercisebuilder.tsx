import React, { useRef, forwardRef, useImperativeHandle, RefObject } from "react";
import { View, StyleSheet } from "react-native";
import { ExerciseItem } from "./exerciseitem";

interface ExerciseItemResponse {
    name : string,
    image? : string,
    description : string,
    muscles? : Array<string>
}

interface ExerciseBuilderJsonResponse {
    exercises : Array<ExerciseItemResponse>
}

export const ExerciseBuilder = React.forwardRef((ref : any) => {

    let jsonDataString : string = ""; 
    let jsonData : ExerciseBuilderJsonResponse = {
        exercises : [
            {
                name : 'Sample',
                image : 'th',
                description : 'Hi',
                muscles : ['Chest', 'Back']                
            }
        ]
    };

    fetch('http://localhost:8080/exercises/all', {
        method: "GET"
    }).then(async (response: Response) => {
        jsonDataString = await response.text();
        jsonData = JSON.parse(jsonDataString);
    })

    let exerciseItems : Array<Element> = [];
    let refArray : React.MutableRefObject<any>[] = [];

    jsonData.exercises.forEach(ex => {
        const childRef = useRef({});
        refArray.push(childRef);
    })

    console.log("######REF :: " + refArray[0])

    useImperativeHandle(ref, () => {
        return {
        sendCurrentConf() {

            let objArr : Array<Object> = [];
            refArray.forEach(child => {
                objArr.push(child.current.sendCurrentDataPackage());
            })

            return objArr
        }
    }
    })

    for(let i=0; i<jsonData.exercises.length; i++) {
        exerciseItems.push(<ExerciseItem key={i} image="/" name={jsonData.exercises[i].name} description={jsonData.exercises[i].description} muscles={['']} isEdit={false} removeFunc={""} ref={refArray[i]}/>)
    }
    
    return <>{exerciseItems}</>;
})