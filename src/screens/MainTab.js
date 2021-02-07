import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Watch from './Watch';
import Notifications from './Notifications';
import Friends from './Friends';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
import Detail from './Detail';
import NewFeed from './NewFeed';

const Tab = createMaterialBottomTabNavigator()
const HomeStack = createStackNavigator()

function NewFeedStack({navigation}) {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="NewFeed" component={NewFeed}
            options={{
                headerLeft:
                ()=><Icon name="menu-outline" size={25} color="white"
                onPress={() => navigation.openDrawer()} style={{marginLeft: 20}} />,
                headerStyle: {
                    backgroundColor: "#3c5898",
                },
                title: ''
            }} />
            <HomeStack.Screen name="Detail" component={Detail} />
        </HomeStack.Navigator>
    )
}

export default function MainTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="NewFeedStack" component={NewFeedStack}
                options={{
                    tabBarIcon: ({ focused }) => <Icon name="document-text-outline" size={20} color={focused ? "white" : "#b2c9ed"} />,
                    tabBarColor: "#3c5898",
                    title: "Newfeed"
                }} />
            <Tab.Screen name="Watch" component={Watch}
                options={{
                    tabBarIcon: ({ focused }) => <Icon name="play-circle-outline" size={20} color={focused ? "white" : "#b2c9ed"} />,
                    tabBarColor: "black"
                }} />
            <Tab.Screen name="Notifications" component={Notifications}
                options={{
                    tabBarIcon: ({ focused }) => <Icon name="notifications-outline" size={20} color={focused ? "white" : "#b2c9ed"} />,
                    tabBarColor: "#3c5898"
                }} />
            <Tab.Screen name="Friends" component={Friends}
                options={{
                    tabBarIcon: ({ focused }) => <Icon name="people-outline" size={20} color={focused ? "white" : "#b2c9ed"} />,
                    tabBarColor: "#3c5898"
                }} />
        </Tab.Navigator>
    )
}