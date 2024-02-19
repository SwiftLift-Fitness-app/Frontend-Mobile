import { NavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface NavProp {
    navigation: NavigationProp<any>
}

export interface PageProps {
    navigation : StackNavigationProp<any>,
    user : string
}