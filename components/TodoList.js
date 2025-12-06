import React, { useState } from "react";
import { StyleSheet,TouchableOpacity, Text,Image } from 'react-native';


import Navigation from "../Navigation/Navigation";

export default function TodoList({item, navigation,removeTodoList}) {
        
    return (

        <TouchableOpacity style = {styles.row} onPress={() => navigation.navigate('Details',{todoListId: item.id, title: item.title})} activeOpacity={0.7}>
            <Text style={styles.title}>{item.title}</Text>
        
       <TouchableOpacity 
       style={styles.trashContainer}
        onPress={() => removeTodoList(item.id)} >
                <Image source={require('../assets/trash-can-outline.png')} 
                style={styles.trash} 
                />
        </TouchableOpacity>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({

    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        backgroundColor: "rgba(255,255,255,0.95)",
        paddingVertical: 14,
        paddingHorizontal: 18,

        borderRadius: 18,     // <-- rendu arrondi comme un bouton
        marginVertical: 8,
        shadowColor: "#000",
        shadowOpacity: 0.07,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3,
    },

    title: {
        fontSize: 18,
        fontWeight: "500",
        color: "#333",
        flex: 1,
        marginRight: 10,
        flexWrap: "wrap",
        overflow: "hidden",
        textOveflow: "ellipse",
    },
    trashContainer:{
        padding: 6,


    },
    trash:{
        width: 25,
        height: 25,
        tintColor: "red",
    },
    


});
