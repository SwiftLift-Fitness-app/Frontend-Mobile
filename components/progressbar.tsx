import React, {useEffect, useRef, useState} from "react";
import { View, StyleSheet, Dimensions, DimensionValue, StyleSheetProperties, Animated, Pressable, AnimatableNumericValue, Easing } from "react-native";

interface Progress {
    prog : number
}

export default function ProgressBar({prog} : Progress) {

    const vw : DimensionValue = Dimensions.get('window').width;
    const vh : DimensionValue = Dimensions.get('window').height;

    const growAnim : Animated.Value = useRef(new Animated.Value(prog)).current;

    const [doesGrow, stimulateGrowth] = useState(false);

    const styles = StyleSheet.create({
        container: {
            width: 0.9*vw,
            height: 0.04*vh,
            borderRadius: 15,
            backgroundColor: '#404040'
        },
        bar: {
            backgroundColor: '#4461ae',
            height: 0.04*vh,
            width: growAnim.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
            }),
            borderRadius: 15
        }
    })

    function testAnim() {
        prog += 20;
        Animated.timing(growAnim, {
            toValue: prog,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: false
        }).start();
    }


    return (
        <Pressable style={styles.container} onPress={testAnim}>
            <Animated.View style={styles.bar}></Animated.View>
        </Pressable>
    )
}