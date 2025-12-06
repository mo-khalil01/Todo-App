import React, { useState, useEffect } from "react";
import { View, Switch, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


export default function TodoItem(props) {
    const [done, setDone] = useState(props.item.done);
    const toggleSwitch = () => {
        props.updateItem(props.item.id, !done)
    }

    useEffect(() => {setDone(props.item.done)}, [props.item.done])

    return (
        <View style={styles.item}>
            <Text style={[styles.text, done && styles.textDone]}>
                {props.item.content}
            </Text>
            <Switch 
                onValueChange={toggleSwitch}
                value={done}
            />
            <TouchableOpacity onPress={() => props.deleteTodo(props.item.id) } 
                style={styles.deleteBtn}>
                <Image source={require('../assets/trash-can-outline.png')} style={styles.trash} />
                
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    item: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: "#f8f8f8",
        marginVertical: 6,
        borderRadius: 10,
        elevation: 2,          
        shadowColor: "#000",    
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 }
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textDone: {
        textDecorationLine: 'line-through',
        color: "#888",
    },
    text: {
        flex: 1,
        fontSize: 16,
        color: "#333",
        marginRight: 8,
        overflow:"hidden",
        textOverflow: "ellipse"

    },
    trash:{
        height: 22, 
        width: 22,
        tintColor: "red",

    },
    deleteBtn:{
        padding: 6,
    }


});
