import React from "react";
import { View, StyleSheet } from "react-native";
import { DietItem } from "./dietitem";
import { useRef, useImperativeHandle, forwardRef } from "react";

interface DietItemResponse {
    name : string,
    image : string,
    description : string,
    nutri_info : Array<number>
}

interface DietBuilderJsonResponse {
    diets : Array<DietItemResponse>
}

export const DietBuilder = React.forwardRef((ref : any) =>  {

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


    dietItems.forEach(d => {
        const childRef = useRef();
        refArray.push(childRef);
    })

    for(let i=0; i<jsonData.diets.length; i++) {
        dietItems.push(<DietItem key={i} name={jsonData.diets[i]['name']} image={jsonData.diets[i]['image']} description={jsonData.diets[i]['description']} nutri_info={jsonData.diets[i]['nutri_info']} ref={refArray[i]}/>)
    }

    //console.log(dietItems[0])

    return <>{dietItems}</>
})