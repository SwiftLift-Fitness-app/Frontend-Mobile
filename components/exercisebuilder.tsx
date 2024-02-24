import React, { useRef, forwardRef, useImperativeHandle, RefObject } from "react";
import { View, StyleSheet } from "react-native";
import { ExerciseItem } from "./exerciseitem";
import image1 from '../img/push-up.png';

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
                name : 'Push up',
                image : image1,
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
        const childRef : React.MutableRefObject<any> = useRef({});
        refArray.push(childRef);
    })

    console.log("######REF :: " + refArray[0])

    function sendCurrentConf() {

        let objArr : Array<Object> = [];
        refArray.forEach(child => {
            objArr.push(child.current.sendCurrentDataPackage()); //problem
        })

        return objArr
    }
    /*useImperativeHandle(ref, () => {
        return sendCurrentConf;
    }) */

    for(let i=0; i<jsonData.exercises.length; i++) {
        exerciseItems.push(<ExerciseItem key={i} image={image1} name={jsonData.exercises[i].name} description={jsonData.exercises[i].description} muscles={["Chest"]} isEdit={false} removeFunc={""} ref={refArray[i]}/>)
    }
    
    return <>{exerciseItems}</>;
})