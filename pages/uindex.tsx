import IndexHeader from "../components/indexheader";
import { useState, useEffect } from "react";
import { View, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from "react-native";
import { style } from "../stylesheets/indexstyle";
import { Text } from "react-native-svg";
import ExerciseCard from "../components/trainingexercisecard";

export default function Index({navigation} : any) {

    const [isLogged, setIsLogged] = useState(true);

    const [isMenuVisible, setMenuVisibility] = useState(false);

    function changeMenuVisibility() {
        setMenuVisibility(!isMenuVisible)
    }

    function changeMenuVisibilityWhenUnFocus() {
        setMenuVisibility(false)
    }

    if(isLogged) {
        return (
            <TouchableOpacity style={[style.main]} onPress={changeMenuVisibilityWhenUnFocus}>
                <IndexHeader menu={navigation} showMenu={isMenuVisible} changeMenu={changeMenuVisibility}/>
                <View>
                    <Text>Exercises for today</Text>
                    <ScrollView>
                        <ExerciseCard></ExerciseCard>
                    </ScrollView>
                </View>
            </TouchableOpacity>
        )
    }
}