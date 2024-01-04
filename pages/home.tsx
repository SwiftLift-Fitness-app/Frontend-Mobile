import React from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import { StyleSheet, View } from "react-native";
import Enjoy from "../components/cools";
import FooterHome from "../components/footerhome";
import { NavLinkProps, NavigateProps, Navigation } from "react-router-dom";
import { NavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

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