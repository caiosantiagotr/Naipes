import React from "react"
import { Text, View } from "react-native"
import styles from "../constants/styles"
import { Ionicons } from "@expo/vector-icons"
export default function TabPaus(){
    return (
        <View style={styles.centralizado}>
            <Ionicons name = "medical" size={100} color="black"/>
            <Text style ={{fontSize: 20, fontWeight:700, color: 'gray'}}>Paus</Text>
        </View>
    )
}