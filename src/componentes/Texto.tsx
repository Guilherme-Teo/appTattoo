import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({children}:any){
    return <Text style = {estilos.estilos_texto}>{children}</Text>
}

const estilos = StyleSheet.create({
    estilos_texto : {
        color: "navy",
        fontWeight: "bold",
    }
})