import IndexHeader from "../components/indexheader";
import { useState, useEffect } from "react";
import { View, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from "react-native";
import { style } from "../stylesheets/indexstyle";
import ExerciseCard from "../components/trainingexercisecard";
import PageTitle from "../components/pagetitle";
import { useFonts } from "expo-font";
import DietTab from "../components/indextab";
import ExerciseTab from "../components/trainingtab";
import UserMenu from "../components/usermenu";
import NavBar from "../components/navbar";
import Circles from "../components/circles";

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
    const [isCirclesVisible, setCirclesVisibility] = useState(false);

    function changeMenuVisibility() {
        setMenuVisibility(!isMenuVisible)
    }

    function changeMenuVisibilityWhenUnFocus() {
        setMenuVisibility(false)
    }

    function changeCirclesVisibility() {
        setCirclesVisibility(!isCirclesVisible)
    }

    function changeCirclesVisibilityWhenUnfocused() {
        setCirclesVisibility(false);
    }

    const [loadedfonts] = useFonts({
        'ProDunex' : require('../assets/fonts/ProDunex/pro-dunex-52272284/Pro-Dunex-Regular.otf')
    });

    if(isLogged) {
        return (
            <TouchableOpacity style={[style.main]} onPress={() => {changeMenuVisibilityWhenUnFocus(); changeCirclesVisibilityWhenUnfocused}}>
                <IndexHeader menu={navigation} showMenu={isMenuVisible} changeMenu={changeMenuVisibility}/>
                <PageTitle text='Welcome again'></PageTitle>
                <View style={style.tab_wrapper}>
                    <DietTab progress={81}></DietTab>
                    <ExerciseTab navigation={navigation}></ExerciseTab>
                </View>
                <UserMenu isVisible={isMenuVisible} menu={navigation}/>
                <NavBar setVisibility={setCirclesVisibility}/>
                <Circles visible={isCirclesVisible}/>               
            </TouchableOpacity>
        )
    }
}