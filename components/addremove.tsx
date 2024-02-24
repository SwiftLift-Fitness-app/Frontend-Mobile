import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

interface AddRemoveProps {
    amount: number,
    label: string,
    setAmount: any
}

export default function AddRemove({amount, label, setAmount} : AddRemoveProps) {
    
    const [lamount, setlAmount] = useState(0);

    const style = StyleSheet.create({
        wrapper: {
            width: 100,
            height: 20,
            display: 'flex',
            flexDirection: 'row',
            gap: 3
        },
        button: {
            width: 20,
            height: 20,
            borderRadius: 5,
            backgroundColor: 'lightgray',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center'
        },
        display: {
            width: 20,
            height: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        display_text: {
            color: 'white'
        }
    })

    function increase() {
        setAmount(amount + 1)
    }

    function decrease() {
        setAmount(amount - 1)
    }

    return (
        <>
            <Text>{label}</Text>
            <View style={style.wrapper}>
                <Pressable style={style.button} onPress={increase}>
                    <Text style={style.display_text}>+</Text>
                </Pressable>
                <View style={style.display}>
                    <Text>{amount}</Text>
                </View>
                <Pressable style={style.button} onPress={decrease}>
                    <Text style={style.display_text}>-</Text>
                </Pressable>
            </View>
        </>
    )
}