import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { ActivityIndicator, View } from 'react-native';
import { StyleSheet } from 'react-native'
import Login from './src/screens/Login'
import Splash from './src/screens/Splash';
import Signup from './src/screens/Signup';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

//#3c5898

const SplashStack = createStackNavigator()

function SplashScreen() {
  return (
    <SplashStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <SplashStack.Screen name="splash" component={Splash} />
      <SplashStack.Screen name="login" component={Login} />
      <SplashStack.Screen name="signup" component={Signup} />
    </SplashStack.Navigator>
  )
}

export default function App() {

  const [isLoading, setIsLoading] = useState(false)

  if (isLoading) {
    return <View style={styles.loading}>
      <ActivityIndicator size="large" color="white" />
    </View>
  }
  return (
    <NavigationContainer>
      <SplashScreen />
    </NavigationContainer>
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