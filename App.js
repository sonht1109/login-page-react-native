import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { ActivityIndicator, View } from 'react-native';
import { StyleSheet } from 'react-native'
import Login from './src/screens/Login'
import Splash from './src/screens/Splash';
import Signup from './src/screens/Signup';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import MainTab from './src/screens/MainTab';
import DrawerContent from './src/screens/DrawerContent';

//#3c5898

const SplashStack = createStackNavigator()
const Drawer = createDrawerNavigator()

function SplashScreen() {
  return (
    <SplashStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <SplashStack.Screen name="Splash" component={Splash} />
      <SplashStack.Screen name="Login" component={Login} />
      <SplashStack.Screen name="Signup" component={Signup} />
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
      <Drawer.Navigator
      drawerContent={() => <DrawerContent />}
      drawerStyle={{padding: 10}}
      >
        <Drawer.Screen name="MainTab" component={MainTab} options={{
          title: "Home"
        }} />
      </Drawer.Navigator>
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