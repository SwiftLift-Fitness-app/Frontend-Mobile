import IndexHeader from "../components/indexheader";
import { useState, useEffect } from "react";
import { View, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from "react-native";
import { style } from "../stylesheets/indexstyle";
import { Text } from "react-native";
import ExerciseCard from "../components/trainingexercisecard";
import PageTitle from "../components/pagetitle";
import { useFonts } from "expo-font";
import Switch from "../components/switch";
import DietCard from "../components/dietcard";

export default function Index({navigation} : any) {

    const curDate = new Date();
    const dayWeek = convertIndexToWord(curDate.getDay());

    function convertIndexToWord(index : Number) {
        if(index === 0) return 'Monday'
        else if (index === 1) return 'Tuesday'
        else if (index === 2) return 'Wednesday'
        else if (index === 3) return 'Thursday'
        else if (index === 4) return 'Friday'
        else if (index === 5) return 'Saturday'
        else if (index === 6) return 'Sunday'
    }

    const [isLogged, setIsLogged] = useState(true);

    const [isMenuVisible, setMenuVisibility] = useState(false);

    function changeMenuVisibility() {
        setMenuVisibility(!isMenuVisible)
    }

    function changeMenuVisibilityWhenUnFocus() {
        setMenuVisibility(false)
    }

    const [loadedfonts] = useFonts({
        'ProDunex' : require('../assets/fonts/ProDunex/pro-dunex-52272284/Pro-Dunex-Regular.otf')
    });

    if(isLogged) {
        return (
            <TouchableOpacity style={[style.main]} onPress={changeMenuVisibilityWhenUnFocus}>
                <IndexHeader menu={navigation} showMenu={isMenuVisible} changeMenu={changeMenuVisibility}/>
                <PageTitle text='Welcome again'></PageTitle>
                <View>
                    <Text style={style.slider_title}>Exercises for today ({dayWeek})</Text>
                    <View style={style.slider}>
                        <Switch type='left'/>
                        <ExerciseCard></ExerciseCard>
                        <Switch type='right'/>
                    </View>
                </View>
                <View>
                    <Text style={style.slider_title}>Diets for today ({dayWeek})</Text>
                    <View style={style.slider}>
                        <Switch type='left'/>
                        <DietCard></DietCard>
                        <Switch type='right'/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}