import { useNavigation } from '@react-navigation/core'
import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>I am theHomeScreen</Text>
      <Button title='Go to Chat Screen' onPress={() => navigation.navigate("Chat")}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})