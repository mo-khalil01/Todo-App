
import React, {useContext, useState} from 'react'
import {Text , StyleSheet, View, TextInput, Button,TouchableOpacity} from 'react-native'
import { TokenContext, UsernameContext } from '../Context/Context'

import {signUp} from "../servicesGraphql/signRequests"
import ScreenWrapper from '../components/UI/ScreenWrapper';
import styles from '../style/styles';
import AuthentificationInput from '../components/UI/AuthentificationInput';

export default function SignInScreen ({ navigation}) {
  const [token, setToken] = useContext(TokenContext);
  const [Username, setUsername] = useContext(UsernameContext);
  const[name,setName] = useState('');
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [login, setLogin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  
  const onSignUp = () => {
    console.log('login', login, "pass", password)
    const user = login.trim();
    const pass = password.trim();
    const confirm = confirmPassword.trim();
    if(!user || !pass || !confirm){
        setErrorMessage("All fields are required");
        return;
    }

    if(pass !==confirm){
        setErrorMessage("Passwords do not match");
        setPassword("");
        setConfirmPassword("");
        return;
    }

    setErrorMessage("");

    signUp(user, pass)
        .then(token => {
        setToken(token);
        setUsername(user);
        setErrorMessage("");
    })
    .catch(err => {
        setErrorMessage(err.message || "Error while signing up");
        setPassword("");
        setConfirmPassword("");
        console.log("err", err.message);
    })
    }
    
  
  
  return(
    <ScreenWrapper>
    <View style={styles.authContainer}>
        <Text style={styles.title}>Welcome to To Do</Text>

   


       <AuthentificationInput 
                placeholder='Username'
                value={login}
                onChangeText={setLogin}
        />



        <AuthentificationInput 
              placeholder='Password'
              onChangeText={setPassword}
              secureTextEntry={true}
              value={password}
              type="signup"

          />   

        <AuthentificationInput 
            placeholder='Confirm Password'
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            errorText={errorMessage}
            onSubmitEditing={onSignUp}
        />

  
        <TouchableOpacity style={styles.addBtn} onPress={onSignUp}>
        <Text style={styles.addBtnText}>Sign In</Text>
      </TouchableOpacity>
          
            <Text style={styles.linkText}>  Already have an account?</Text>
          
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        
            <Text style={styles.link}>Sign In</Text>
        </TouchableOpacity>
    </View>
    </ScreenWrapper>
  )


}
