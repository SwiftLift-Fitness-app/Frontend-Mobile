import React from "react";
import { View, Dimensions, StyleSheet, DimensionValue, Pressable, Text } from "react-native";
import { style } from "../stylesheets/exercisecardstyle";
import Images from "./cardimages";
import PlayButton from "./playbutton";
import DietInfo from "./dietinfo";

interface dietJsonFetch {
    name : string,
    images : Array<string>,
    info : Array<number>
}

export default function DietCard() {

    let jsonDataString : string = "";

    let jsonData : dietJsonFetch = {
        name : 'My first diet',
        images : ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fplant%2Fapple-fruit-and-tree&psig=AOvVaw0DZeBQdD0CHW5FNhTI2ul1&ust=1706808590386000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDn8dKTiIQDFQAAAAAdAAAAABAE", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fplant%2Fapple-fruit-and-tree&psig=AOvVaw0DZeBQdD0CHW5FNhTI2ul1&ust=1706808590386000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDn8dKTiIQDFQAAAAAdAAAAABAEhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fplant%2Fapple-fruit-and-tree&psig=AOvVaw0DZeBQdD0CHW5FNhTI2ul1&ust=1706808590386000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDn8dKTiIQDFQAAAAAdAAAAABAE", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fplant%2Fapple-fruit-and-tree&psig=AOvVaw0DZeBQdD0CHW5FNhTI2ul1&ust=1706808590386000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDn8dKTiIQDFQAAAAAdAAAAABAE"],
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
          paddingTop: 10,
          width: 0.875*vw,
          minHeight: 0.3*vh,
          paddingBottom: 10,
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
        }
    });
    return (
        <Pressable style={styles.container} >
            <Text style={styles.top_bar}>{jsonData.name}</Text>
            <View style={style.container}>
                {
                    //expecting 4 images from the GET request 
                }
                <Images images={jsonData.images}></Images>
                <DietInfo calories={jsonData.info[0]} protein={jsonData.info[1]} carbs={jsonData.info[2]} fat={jsonData.info[3]}/>
            </View>       
            <View style={styles.controls_wrapper}>
                <PlayButton size={1} type='edit'/>
                <PlayButton size={1.25} type='info'/>
                <PlayButton size={1} type='skip'/>
            </View>
        </Pressable>
    )
}