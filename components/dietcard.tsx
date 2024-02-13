import React, { useState } from "react";
import { View, Dimensions, StyleSheet, DimensionValue, Pressable, Text } from "react-native";
import { style } from "../stylesheets/exercisecardstyle";
import Images from "./cardimages";
import PlayButton from "./playbutton";
import DietInfo from "./dietinfo";
import RecipePop from "./recipepop";

interface dietJsonFetch {
    name : string,
    images : Array<string>,
    info : Array<number>
}


export default function DietCard({navigation} : any) {

    const [isPopVisible, setPopVisible] = useState(false);
    function triggerPop() {
        setPopVisible(true);
    }

    let jsonDataString : string = "";

    let jsonData : dietJsonFetch = {
        name : 'My first diet',
        images : ["https://www.shutterstock.com/image-photo/healthy-lunch-workplace-pick-food-260nw-1855267585.jpg", "https://media.istockphoto.com/id/1472680285/photo/healthy-meal-with-grilled-chicken-rice-salad-and-vegetables-served-by-woman.webp?b=1&s=170667a&w=0&k=20&c=D4EsPmVWVJTM3sdZbA141EE53yVVxVmYPOGbiSNIP6M=", "https://www.freshnlean.com/wp-content/uploads/2021/03/Meal-Plan-plate-protein.png"],
        info : [1760, 60, 30, 10]
    };

    /*fetch("http://localhost", {
        method: "GET"
    }).then(async (response: Response) => {
        jsonDataString = await response.text();
        jsonData = JSON.parse(jsonDataString);
    }) */

    const vw : number = Dimensions.get('window').width;
    const vh : number = Dimensions.get('window').height;
    const cw_width : DimensionValue = '100%';

    const styles = StyleSheet.create({
        container: {
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#0d0e0e',
          borderRadius: 20,
          width: 0.875*vw,
          minHeight: 0.3*vh,
          maxHeight: 0.45*vh,
          overflow : 'hidden',
          gap: 10
        },
        header: {
          fontSize: 24,
          fontWeight: 'bold',
          color: 'white',
          marginBottom: 20,
        },
        top_bar: {
            width: 0.875*vw,
            height: 0.05*vh,
            backgroundColor: '#4461ae',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 15,
            paddingRight: 15,
            fontSize: 20,
            color: 'white'
        },
        controls_wrapper: {
            width: cw_width,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: '#4461ae',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            gap: 25
        },
        container1: {
            width: 0.875*vw,
            borderRadius: 10,
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding : 0
        },
    });
    return (
        <Pressable style={styles.container} >
            <Text style={styles.top_bar}>{jsonData.name}</Text>
            <View style={styles.container1}>
                {
                    //expecting 4 images from the GET request 
                }
                <Images type={"diets"} images={[...jsonData.images, "https://www.shutterstock.com/image-photo/healthy-lunch-workplace-pick-food-260nw-1855267585.jpg"]}></Images>
                <DietInfo calories={jsonData.info[0]} protein={jsonData.info[1]} carbs={jsonData.info[2]} fat={jsonData.info[3]}/>
            </View>       
            <View style={styles.controls_wrapper}>
                <PlayButton size={1} type='edit'/>
                <PlayButton size={1.25} type='info' onClick={() => {navigation.navigate("DietsWithPop")}}/>
                <PlayButton size={1} type='skip'/>
            </View>
            <RecipePop title="My first diet" id="some" isVisible={isPopVisible}/>
        </Pressable>
    )
}