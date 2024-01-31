import React from "react";
import { View, StyleSheet } from "react-native";
import DietItem from "./dietitem";

interface DietItemResponse {
    name : string,
    image : string,
    description : string,
    nutri_info : Array<number>
}

interface DietBuilderJsonResponse {
    diets : Array<DietItemResponse>
}

export default function DietBuilder() {

    let jsonDataString : string = ""; 
    let jsonData : DietBuilderJsonResponse = {
        diets : [{
            name : 'fde',
            image : '',
            description : 'description.',
            nutri_info : [120,120,10,0]
        }]
    };

    fetch('http://localhost/exercises/all', {
        method: "GET"
    }).then(async (response: Response) => {
        jsonDataString = await response.text();
        jsonData = JSON.parse(jsonDataString);
    })

    let dietItems : Array<Element> = [];

    for(let i=0; i<jsonData.diets.length; i++) {
        dietItems.push(<DietItem name={jsonData.diets[i]['name']} image={jsonData.diets[i]['image']} description={jsonData.diets[i]['description']} nutri_info={jsonData.diets[i]['nutri_info']}/>)
    }

    dietItems.map(item => {
        return <>{item}</>
    })
    return <></>
}