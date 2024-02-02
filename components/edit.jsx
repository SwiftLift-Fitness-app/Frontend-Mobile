import React from "react";
import { View, StyleSheet } from "react-native";
import ExerciseItem from "./exerciseitem";
import DietItem from "./dietitem";

export default function Editor({type}) {

    let jsonDataString; 
    let jsonData = {};

    fetch(`http://localhost/${type}/user`, {
        method: "GET"
    }).then(async (response) => {
        jsonDataString = await response.text();
        jsonData = JSON.parse(jsonDataString);
    })

    if(type === "exercises") {
        let exerciseItems = [];

        for(let i=0; i<10; i++) {
            exerciseItems.push(<ExerciseItem key={i} image={jsonData.exercises[i]['image']} name={jsonData.exercises[i]['name']} description={jsonData.exercises[i]['description']} muscles={jsonData.exercises.muscles}/>)
        }
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
    
}