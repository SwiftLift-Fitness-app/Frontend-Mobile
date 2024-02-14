import { json } from "d3";
import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Calendar } from "react-native-calendars";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

interface KalendarProps {
    name? : string,
    user? : string
}

interface CalendarProps {
    active_days : Array<number>,
    inactive_days : Array<number>,
    unavailable_days : Array<number>
}

export default function Kalendar({name, user} : KalendarProps) {

    let jsonData : CalendarProps = {
        active_days : [2, 5, 7, 11, 15, 24],
        inactive_days : [1, 3 , 6, 9, 10, 20, 17],
        unavailable_days : getUnavailableDays([2, 5, 7, 11, 15, 24], [1, 3 , 6, 9, 10])
    }

    function getUnavailableDays(active : Array<number>, inactive : Array<number>) {
        const month : number = (new Date()).getMonth();
        let days : number = 0;
        if(month<8 && month%2===1) days = 31;
        else days = 30;
        let res : Array<number> = [];
        for(let i=1; i<=days; i++) {
            if(active.indexOf(i) != -1 || inactive.indexOf(i) != -1) res.push(i);
        }

        return res;
    }

    fetch(`http://localhost/programs/${user}/${name}`, {
        method : "GET"
    }).then(async (response : Response) => {
        let json : string = await response.text();
        jsonData = JSON.parse(json);
        jsonData.unavailable_days = getUnavailableDays(jsonData.active_days, jsonData.inactive_days);
    })

    const year_month : string = (new Date).getFullYear() + "-0" + Number((new Date).getMonth()+1);

    function getMarkedDates(dates : Array<number>, color : string) {
        let res : any = {};
        for(let i=0; i<dates.length; i++) {
            res[year_month+"-"+dates[i]] = {selected : true, marked : true, selectedColor : color}
        }

        return res;
    }

    const give = getMarkedDates(jsonData.active_days, 'blue');
    console.log(give);
    const iveg = getMarkedDates(jsonData.inactive_days, 'red');
    const vegi = getMarkedDates(jsonData.unavailable_days, 'green');

    const g = {...give, ...iveg};

    const vw = Dimensions.get('screen').width;
    const vh = Dimensions.get('screen').height;

    return (
        <Calendar
            markedDates={g}
            style = {{
                backgroundColor : 'black',
                shadowColor : 'black',
                width : 0.85*vw,
                height : 150
            }}
            theme={{
                backgroundColor : 'black',
                selectedDayTextColor : 'white',
                dayTextColor : 'white',
                calendarBackground : 'black',
            }}
        ></Calendar>
    )

}