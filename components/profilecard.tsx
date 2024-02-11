import React from "react";
import { View, Text } from "react-native";
import { style } from "../stylesheets/profilestyle";
import { Image } from "react-native";

interface ProfileInfo {
    name : string,
    photo : string,
    training_streak : number,
    diet_streak : number
}

export default function ProfileCard() {

    let jsonDataString = "";
    let jsonData : ProfileInfo = {
        name : 'Moderator Moderatorov',
        photo : 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.iIuiLMQfxC-__lbkOhCIJAHaIB%26pid%3DApi&sp=1707174731T73f8d28462c5e84b135b8ecbb46245f718b75d19aeff9c3e1032c93e3a142e34',
        training_streak : 10,
        diet_streak : 10
    };

    fetch('http://localhost/user/info', {
        method : "GET"
    }).then(async (response : Response) => {
        jsonDataString = await response.json();
        jsonData = JSON.parse(jsonDataString);
    })
    return (
        <View style={style.wrapper}>
            <View style={style.photo_name}>
                <Text style={style.text}>{jsonData.name}</Text>
                <Image source={{uri : jsonData.photo}}/>
            </View>
            <View style={style.card_info}>
                <View style={style.card_info_elements_wrapper}>
                    <Text style={style.text}>Training streak {jsonData.training_streak}</Text>
                    <Text style={style.text}>Diet streak {jsonData.diet_streak}</Text>
                </View>
            </View>
        </View>
    )
}