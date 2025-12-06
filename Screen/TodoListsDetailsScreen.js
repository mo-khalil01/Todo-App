import React, { useEffect, useState ,useContext} from "react";
import { StyleSheet, View, TextInput, Button, Text, FlatList, Switch , Image,ScrollView,TouchableOpacity} from 'react-native';
import {getTodos, createTodo,deleteTodo, updateTodo,checkAllTodos, uncheckAllTodos} from "../servicesGraphql/requests";
import TodoItem from '../components/TodoItem';
import {TokenContext} from "../Context/Context";
import ScreenWrapper from '../components/UI/ScreenWrapper';
import Input from "../components/UI/Input";
import styles from "../style/styles";



export default function TodoListDetailsScreen({route}) {
    const {todoListId, title}  = route.params;//id liste mere
    const [todos, setTodos] = useState([]);
    const doneCount = todos.filter(t => t.done).length;
    const totalCount = todos.length;
    const progress = totalCount === 0 ? 0 : doneCount/totalCount;
    const [count, setCount] = useState(0);
    const [filter, setFilter] = useState('all');
    const [errorText, setErrorText] = useState('');
    const [token] =  useContext(TokenContext);
    console.log(count);

    const [text,onChangeText] = useState("");


    const getAllTodos = () => {// on retourne la liste des todos
        getTodos(todoListId,token)
            .then((data) => {
                setTodos(data);
                setErrorText('');
            })
            .catch((err) => {
                setErrorText("Error: " + err.message || 'Error while retrieving data');
                console.log(err);
            });
    }
    
    /* si todos ou filter change le compteur se met à jour pour gerer la sync quand on ajoute ou supprime un el 
     */
    useEffect( () => {
        getAllTodos();
    },[])

    useEffect( () => {
        if(filter === 'unchecked'){
            setCount(0)
        }
        else{
            setCount(todos.filter((item) => item.done).length)
        }

    }, [todos, filter])

    /*un update de la liste */

    const updateItem = (todoId , done) => {
        updateTodo(todoId, done, token)
        .then( () => {
            getAllTodos()
        })
        .catch((err) => {
            setErrorText(err.message || 'Error occured while updating  todo');
        });
    }


    const removeTodo = (todoId) => {

        deleteTodo(todoId,token)
        .then(() => {
            getAllTodos();
        })
        .catch((err) => {
            setErrorText(err.message || 'Error  occured while deleting  todo');
        });
        
    }

    const addTodo = () =>{
        const content = text.trim();
        if(!content){
            setErrorText("*Enter a valid task");
            return;
        }
        createTodo(content,todoListId,token)
        .then(() => {
            setErrorText("");
            getAllTodos();
            onChangeText("");

        })
        .catch((err) => {
        setErrorText(err.message || 'Error  occured while adding a new task');
        });
    }

    
    const checkAll = () =>{
        checkAllTodos(todoListId, token)
        .then(() => getAllTodos())
        
    }

    const uncheckAll = () =>{
        uncheckAllTodos(todoListId, token)
        .then(() => getAllTodos())
        

    }



    /*on met à jour todosFiltered  quand todos ou filter change  */
    const todosFiltered = todos.filter( (item) =>{
        if(filter === 'checked') return item.done;
        if(filter === 'unchecked'){
            return !item.done;
        }
        return true;

    })



    return (
        <ScreenWrapper>
        <View style={styles.card}>

            <View>
            <Text style={styles.listTitle}>My to-do lists : {title}</Text>
            
            <Text style= {styles.counterText}>
               Completed tasks : {doneCount} / { totalCount} 
            </Text>
            <Text>Progress : {progress == 0? 0 :Math.round(progress*100)}%</Text>
            <View style={styles.progressBar}>
                <View style={{height: '100%', backgroundColor: progress < 0.5 ? '#fb4040': '#6ae16a', borderRadius: 10, width: `${progress*100}%`}}/>
            </View>

  
        <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.actionBar}
        >
            <TouchableOpacity style={styles.iconBtn} onPress={checkAll}>
                <Image source={require("../assets/check.png")} style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBtn} onPress={uncheckAll}>
                <Image source={require("../assets/uncheck.png")} style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBtn} onPress={() => setFilter('checked')}>
                <Image source={require("../assets/checked.png")} style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBtn} onPress={() => setFilter('unchecked')}>
                <Image source={require("../assets/Unchecked.png")} style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBtn} onPress={() => setFilter('all')}>
                <Image source={require("../assets/showall.png")} style={styles.icon} />
            </TouchableOpacity>
        </ScrollView>

            <Input
                style={styles.input}
                onChangeText={onChangeText}
                onSubmitEditing={addTodo}
                placeholder="Add a new task"
                onPress = {addTodo}
                errorText={errorText}
                value={text}

            />
                          
        </View>

        <View style={{flex: 1}}>
            <FlatList
                data={todosFiltered}
                contentContainerStyle={{ paddingBottom: 30 }}

                renderItem={({ item }) => 
                <View style={styles.listItemWrapper}>

                <TodoItem 
                    item={item}
                    updateItem={updateItem}
                    deleteTodo={removeTodo} />
                </View>

                } 
                    />
           
            </View>
        </View>
        </ScreenWrapper>
    )



}

