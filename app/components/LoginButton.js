import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LoginButton({style, onPress}) {
  return (
    <View style={style}>
      <Button 
            title='Click'
            onPress={onPress}
      >LoginButton</Button>
    </View>
  )
}

const styles = StyleSheet.create({})