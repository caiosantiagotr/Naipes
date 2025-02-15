import React from "react"
import { Text, View } from "react-native"
import styles from "../constants/styles"
import { Ionicons } from "@expo/vector-icons"
export default function TabCopas(){
    return (
        <View style={styles.centralizado}>
            <Ionicons name = "heart" size={100} color="red"/>
            <Text style ={{fontSize: 20, fontWeight:700, color: 'gray'}}>Copas</Text>
        </View>
    )
}