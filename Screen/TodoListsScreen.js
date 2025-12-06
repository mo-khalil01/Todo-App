import { StyleSheet, View, TextInput, Button, Text, FlatList,ScrollView, TouchableOpacity } from 'react-native';
import {createTodoList,deleteTodoList, getTodoLists, updateTodoList} from "../servicesGraphql/requests";
import TodoItem from '../components/TodoItem';
import {TokenContext, UsernameContext} from "../Context/Context";
import React, { useEffect, useState ,useContext} from "react";
import TodoList from '../components/TodoList';
import Input from '../components/UI/Input';
import styles from '../style/styles';
import ScreenWrapper from '../components/UI/ScreenWrapper';

export default function TodoListsScreen({navigation}) {
    const [token] =  useContext(TokenContext);
    const [username] = useContext(UsernameContext);
    const [errorText, setErrorText] = useState('');
    const [todolists, setTodolists] = useState([])
    const [text,onChangeText] = useState("");


    const getAllTodoLists = () => {
        getTodoLists(username,token)
            .then((data) => {
                setTodolists(data);
                setErrorText('');
                console.log("lists : ",data)
            })
            .catch((err) => {
                setErrorText("Error: " + err.message || 'Error while retrieving data');
                console.log(err);
            });
    }
    
    /* si todos ou filter change le compteur se met à jour pour gerer la sync quand on ajoute ou supprime un el 
     */
    useEffect( () => {
        getAllTodoLists();
    },[])

    


    const removeTodoList = (todoListId) => {

        deleteTodoList(todoListId,token)
        .then(() => {
            getAllTodoLists();
        })
        .catch((err) => {
            setErrorText(err.message || 'Error  occured while deleting list');
        });
        
    }

    const addTodoList = () =>{
        const title = text.trim();
        if(!title){
            setErrorText("*Enter a valid title");
            return;
        }
        createTodoList(username, title, token)
            .then(() => {
                setErrorText("")
                getAllTodoLists();
                onChangeText("");
                
            })
            .catch((err) => {
                setErrorText(err.message || 'Error  occured while adding a new list');
            });
            
    }



    return (
        <ScreenWrapper>

        <View style={styles.card}>
            <Text style={{fontSize: 24, textAlign: "center",fontWeight:"bold"}}>My to-do Lists</Text>
           
            <Input
                onChangeText={onChangeText}
                placeholder="Add a new todo List"
                onSubmitEditing={addTodoList}
                onPress={addTodoList}
                errorText={errorText}
                value={text}

            />
               
            <FlatList
                contentContainerStyle={{ paddingBottom: 30 }}
                data={todolists}
                renderItem={({ item }) =>(
                    <View style={styles.listItemWrapper}>
                    <TodoList 
                    item={item}
                    navigation ={navigation}
                    removeTodoList = {removeTodoList} 
                    />
                    </View>

                )}
            />
           

        </View>
        </ScreenWrapper>
    )



}

