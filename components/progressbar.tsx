import React, {useEffect, useRef, useState} from "react";
import { View, StyleSheet, Dimensions, DimensionValue, StyleSheetProperties, Animated, Pressable, AnimatableNumericValue, Easing } from "react-native";

interface Progress {
    prog : number
}

export default function ProgressBar({prog} : Progress) {

    const vw : DimensionValue = Dimensions.get('window').width;
    const vh : DimensionValue = Dimensions.get('window').height;

    const growAnim : Animated.Value = useRef(new Animated.Value(prog)).current;

    const [progress, setProgress] = useState(prog);

    const styles = StyleSheet.create({
        container: {
            width: vw,
            height: 0.04*vh,
            backgroundColor: '#404040',
            position : 'absolute',
            bottom : 0,
            left : 0
        },
        bar: {
            backgroundColor: '#4461ae',
            height: 0.04*vh,
            minWidth : prog*vw,
            width: growAnim.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
            }),
            borderTopEndRadius : 15,
            borderBottomEndRadius : 15
        }
    })

    function testAnim() {
        prog += 33;
        Animated.timing(growAnim, {
            toValue: prog,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: false
        }).start();
    }

    testAnim();

    return (
        <Pressable style={styles.container}>
            <Animated.View style={styles.bar}></Animated.View>
        </Pressable>
    )
}