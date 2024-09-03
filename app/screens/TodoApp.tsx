import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from "react";
import ListItem from '../components/ListItem';
import TodoItem  from "../models/TodoItem";
// import { TodoList } from "./TodoList";
import AddTodo from "../context/actions/AddTodo";
import { useAppSelector } from '../hooks';


  const TodoApp = () => {

    const todos = useAppSelector((state) => state.todos)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
        <AddTodo />
        <FlatList 
          data={todos}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => 
            <ListItem 
                title={item.title}
            />}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 12,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
    },
  });
  
  export default TodoApp