import React from "react";
import {TextInput, StyleSheet,  View, Text, TouchableOpacity} from "react-native";

import styles from "../../style/styles";
export default function Input({ value, onChangeText, placeholder,errorText, onPress,secureTextEntry, ...rest}){

  
    return (
        <View style={styles.inputRow}>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                style = {[styles.input, {marginBottom: 3}]}
                {...rest}
            />

            {errorText ?(
                <Text style={styles.errorText}>
                    {errorText}
                </Text>
            ):null}

             <TouchableOpacity style={styles.addBtn} onPress={onPress} >
                <Text style={styles.addBtnText}>Add</Text>
            </TouchableOpacity>
                    
       </View>

           
  );
}