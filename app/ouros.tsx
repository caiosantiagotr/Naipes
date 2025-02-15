import React from "react"
import { Text, View } from "react-native"
import styles from "../constants/styles"
import { Ionicons } from "@expo/vector-icons"
export default function TabOuros(){
    return (
        <View style={styles.centralizado}>
            <Ionicons name = "flash" size={100} color="red"/>
            <Text style ={{fontSize: 20, fontWeight:700, color: 'gray'}}>Ouros</Text>
        </View>
    )
}