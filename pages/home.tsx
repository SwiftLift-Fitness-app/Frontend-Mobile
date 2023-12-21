import React from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import { StyleSheet, View } from "react-native";
import Enjoy from "../components/cools";
import FooterHome from "../components/footerhome";
import { Navigation } from "react-router-dom";

export default function HomePage({navigation} : any) {
    return (
        <View style={styles.mainc}>
            <Header outHome={navigation}/>
            <Banner outHome={navigation}/>
            <Enjoy />
            <FooterHome />
        </View>
    )
}

const styles = StyleSheet.create({
    mainc: {
        maxWidth: 900
    }
})