import React, { useState } from 'react'
import { ActivityIndicator, View } from 'react-native';
import { StyleSheet } from 'react-native'
import Login from './src/screens/Login'
import Splash from './src/screens/Splash';

//#3c5898

export default function App() {

  const [isLoading, setIsLoading] = useState(false)

  if(isLoading){
    return <View style={styles.loading}>
       <ActivityIndicator size="large" color="white" />
    </View>
  }
  return (
    // <Splash />
    <Login />
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: "#3c5898",
    justifyContent: "center",
    alignItems: "center"
  }
})