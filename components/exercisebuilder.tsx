import React from "react";
import { View, StyleSheet } from "react-native";
import ExerciseItem from "./exerciseitem";

export default function ExerciseBuilder() {

    let jsonData : string; 

    fetch('http://localhost/exercises/all', {
        method: "GET"
    }).then(async (response: Response) => {
        jsonData = await response.text();
        jsonData = JSON.parse(jsonData);
    })

    let exerciseItems : Array<Element> = [];

    for(let i=0; i<10; i++) {
        exerciseItems.push(<ExerciseItem image="/" name="name" description="desc" muscles={['']}/>)
    }

    exerciseItems.map(item => {
        return <>{item}</>
    })
    return <></>;
}