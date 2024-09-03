import { StyleSheet, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { addTodo } from './TodoSlice';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


const AddTodo = () => {

    const [text, setText] = useState('');
    const dispatch = useAppDispatch()

    function handleSubmit(){
        console.log(text)
        dispatch(addTodo({
            id: uuidv4().toString(),
            title: text,
          }))
        // setText('');
    }

    
  return (
    <View style={styles.container}>
      <TextInput placeholder="Todo" value={text} onChangeText={setText} style={styles.input} />
      <Button title="Add" onPress={handleSubmit}/>
    </View>
  )
}

export default AddTodo

const styles = StyleSheet.create({
    container: {
      margin: 2,
      flexDirection: 'column',
      width: "100%",
      padding: 10
    },
    input: {
      backgroundColor: 'ghostwhite',
      marginBottom: 8,
      padding: 8,
      height: 40,
      justifyContent: 'center'
    },
  });
  