import 'react-native-gesture-handler';
import React, { useEffect, useMemo, useReducer, useState } from 'react'
import { ActivityIndicator, Alert, View } from 'react-native';
import { StyleSheet } from 'react-native'
import Login from './src/screens/Login'
import Splash from './src/screens/Splash';
import Signup from './src/screens/Signup';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainTab from './src/screens/MainTab';
import DrawerContent from './src/screens/DrawerContent';
import { UserContext } from './src/screens/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import users from './users'
import { setEnabled } from 'react-native/Libraries/Performance/Systrace';

//#3c5898

const SplashStack = createStackNavigator()
const Drawer = createDrawerNavigator()

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3c5898",
    text: "black",
    caption: "gray"
  }
}

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#1a1a1a",
    text: "white",
    caption: "gray"
  }
}

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

  const initState = {
    user: null,
    isLoading: true,
  }

  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const userReducer = (prevState, action) => {
    switch (action.type) {
      case "LOG_IN":
        const user = action.user
        if(user){
          return {
            ...prevState,
            user: { ...action.user },
            isLoading: false
          }
        }
        return { ...prevState, isLoading: false }
      case "LOG_OUT":
        return {
          ...prevState,
          user: null,
          isLoading: false
        }

      default:
        return { ...prevState, isLoading: false }
    }
  }

  const [state, dispatch] = useReducer(userReducer, initState)

  useEffect(() => {
    setTimeout(async () => {
      let user
      try {
        user = await AsyncStorage.getItem('user')
      }
      catch (e) {
        console.log(e)
      }
      dispatch({ type: "LOG_IN", user })
    }, 1000)
  }, [])
  console.log(state)

  const userContext = useMemo(() => (
    {
      logIn: async (user) => {
        if(user){
          if(users.filter(item => item.user === user.user && user.password === item.password).length > 0){
            await AsyncStorage.setItem("user", JSON.stringify(user))
            dispatch({type: "LOG_IN", user})
          }
          else Alert.alert('Invalid user !')
        }
      },
      logOut: async() => {
        await AsyncStorage.removeItem('user')
        dispatch({ type: "LOG_OUT" })
      },
      switchTheme: () => setIsDarkTheme(prev => !prev)
    }
  ), [])

  if (state.isLoading) {
    return <View style={styles.loading}>
      <ActivityIndicator size="large" color="white" />
    </View>
  }
  return (
    <UserContext.Provider value={userContext}>
      <NavigationContainer theme={isDarkTheme ? darkTheme : lightTheme}>
        {state.user
          ? (
            <Drawer.Navigator
              drawerContent={() => <DrawerContent />}
              drawerStyle={{ paddingVertical: 20 }}
            >
              <Drawer.Screen name="MainTab" component={MainTab} options={{
                title: "Home"
              }} />
            </Drawer.Navigator>
          )
          : <SplashScreen />
        }
      </NavigationContainer>
    </UserContext.Provider>
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