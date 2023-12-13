import React from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import { StyleSheet, View } from "react-native";
import Enjoy from "../components/cools";
import FooterHome from "../components/footerhome";

export default function HomePage() {
    return (
        <View style={styles.mainc}>
            <Header />
            <Banner />
            <Enjoy />
            <FooterHome />
        </View>
    )
}

const styles = StyleSheet.create({
    mainc: {
        display: 'flex',
        flexDirection: 'column'
    }
})