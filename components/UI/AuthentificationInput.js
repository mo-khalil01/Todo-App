import React from 'react';
import { TextInput,Text, View } from 'react-native';
import styles from "../../style/styles"; 
import { useContext, useState } from 'react';
export default function AuthentificationInput({value,onChangeText,placeholder,errorText,secureTextEntry,...rest}){

    return(
        <View >
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                style={styles.formInput}
                {...rest}
            />

            {errorText ? (
            <Text style={styles.errorText}>{errorText}</Text>
            ) : null}


        </View>


    );


}
