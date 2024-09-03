import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ListItem = (props:any) => {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow'
    },
  });
  