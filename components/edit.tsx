import React from "react";
import { View, StyleSheet } from "react-native";
import { ExerciseItem } from "./exerciseitem";
import { DietItem } from "./dietitem";
import { useImperativeHandle, useRef, forwardRef } from "react";

interface EditResponse {
    exercises : Array<any>,
    diets : Array<any>
}

export const Editor = React.forwardRef(({type} : any, ref : any) => {

    let jsonDataString; 
    let jsonData : EditResponse = {
        exercises : [],
        diets : []
    };

    fetch(`http://localhost/${type}/user`, {
        method: "GET"
    }).then(async (response) => {
        jsonDataString = await response.text();
        jsonData = JSON.parse(jsonDataString);
    })

    let refArray : Array<any> = [];
    if(type === "exercises") {
        let exerciseItems : Array<any> = [];

        exerciseItems.forEach(ex => {
            const childRef = useRef();
            refArray.push(childRef);
        })

        for(let i=0; i<10; i++) {
            exerciseItems.push(<ExerciseItem key={i} image={jsonData.exercises[i]['image']} name={jsonData.exercises[i]['name']} description={jsonData.exercises[i]['description']} muscles={jsonData.exercises[i].muscles} isEdit={true} ref={refArray[i]}/>)
        }

        useImperativeHandle(ref, () => {
    
            function sendCurrentConf() {
    
                let objArr : Array<any> = [];
                refArray.forEach(child => {
                    objArr.push(child.current.sendCurrentDataPackage());
                })
    
                return objArr
            }
        })

        exerciseItems.map(item => {
            return <>{item}</>
        })
        return <>{exerciseItems}</>;
    }
    else {
        let dietItems = [];

        for(let i=0; i<jsonData.diets.length; i++) {
            dietItems.push(<DietItem key={i} name={jsonData.diets[i]['name']} image={jsonData.diets[i]['image']} description={jsonData.diets[i]['description']} nutri_info={jsonData.diets[i]['nutri_info']}/>)
        }
    
        //console.log(dietItems[0])
    
        return <>{dietItems}</>
    }
    
})