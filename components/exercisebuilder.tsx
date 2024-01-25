import React from "react";
import { View, StyleSheet } from "react-native";

export default function ExerciseBuilder() {

    let jsonData : string; 

    fetch('http://localhost/exercises/all', {
        method: "GET"
    }).then(async (response: Response) => {
        jsonData = await response.text();
        jsonData = JSON.parse(jsonData);
    })

    
    //localhost/
    return (
        <View>
            
        </View>
    )
}