import React from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";

interface RecipePopProp {
    title : string
    id : string,
    isVisible : boolean
}

export default function RecipePop({title, id, isVisible} : RecipePopProp) {
    
    interface PopResponse {
        text : string
    }

    let jsonDataString : string = "";
    let jsonData : PopResponse = {
        text : ""
    };

    fetch(`http://localhost/diets/${id}`, {
        method : "GET"
    }).then(async (response : Response) => {
        jsonDataString = await response.text();
        jsonData = JSON.parse(jsonDataString);
    })

    const vw = Dimensions.get('screen').width;
    const vh = Dimensions.get('screen').height;

    const style = StyleSheet.create({
        container : {
            width : vw,
            height : 0.925*vh,
            backgroundColor : "rgba(0,0,0,0.7)",
            position : 'absolute',
            top : 0,
            left : 0,
            padding : 20
        },
        title : {
            color : 'white',
            textAlign : 'center',
            fontSize : 25
        },
        content : {
            marginLeft : 'auto',
            marginRight : 'auto',
        },
        content_text : {
            color : 'white'
        }
    })

    if(isVisible) {
        return (
            <View style={style.container}>
                <Text style={style.title}>{title}</Text>
                <View style={style.content}>
                    <Text style={style.content_text}>{jsonData.text}</Text>
                </View>
            </View>
        )
    }

}