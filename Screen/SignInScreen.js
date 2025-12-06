
import React, {useContext, useState} from 'react'
import {Text , Button} from 'react-native'
import { TokenContext, UsernameContext } from '../Context/Context'
import { TextInput, TouchableOpacity, View,StyleSheet } from 'react-native-web';

import ScreenWrapper from '../components/UI/ScreenWrapper';
import signIn from "../servicesGraphql/signRequests"

import styles from '../style/styles';
import AuthentificationInput from '../components/UI/AuthentificationInput';
export default function SignInScreen ({ navigation}) {
  const [token, setToken] = useContext(TokenContext);
  const [Username, setUsername] = useContext(UsernameContext);
  const[name,setName] = useState('');
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  


  
  const onSignIn = () => {
        console.log('login', login, "pass", password)

    const user = login.trim();
    const pass = password.trim();
    if(!user || !pass){
        setErrorMessage("username and password cannot be empty");
        return;
    }

    setErrorMessage("");

    signIn(user, pass)
        .then(token => {
        setToken(token);
        setUsername(user);
    })
    .catch(err => {
        setErrorMessage(err.message || "Error while signing in")
        setPassword("");
        console.log("err", err.message);
    })
    }

  return(
    
    <ScreenWrapper>
    <View style={styles.authContainer}>
        <Text style={styles.title}>Hello ! Welcome back ! </Text>


        <AuthentificationInput 
            placeholder='Username'
            value={login}
            onChangeText={setLogin}

       
        />

        <AuthentificationInput 
            placeholder='Password'
            onChangeText={setPassword}
            errorText={errorMessage}
            secureTextEntry={true}
            value={password}
            onSubmitEditing={onSignIn}

        />      
       
      <TouchableOpacity style={styles.addBtn} onPress={onSignIn}>
        <Text style={styles.addBtnText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.linkText}> Don't have an account? </Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.link}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    </ScreenWrapper>
  )


}
