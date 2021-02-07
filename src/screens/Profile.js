import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import EditInfo from './EditInfo';
import { Avatar, Title, Caption, Divider } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const infoFields = [
    {
        key: "username",
        name: "sonht1109",
        icon: (color, size) => <Icon name="person-circle-outline" size={size} color={color} />
    },
    {
        key: 'age',
        name: "18",
        icon: (color, size) => <Icon name="calendar-outline" size={size} color={color} />
    },
    {
        key: 'email',
        name: "sonht1109@gmail.com",
        icon: (color, size) => <Icon name="mail-outline" size={size} color={color} />
    },
    {
        key: "phone",
        name: "0329271723",
        icon: (color, size) => <Icon name="call-outline" size={size} color={color} />
    },
    {
        key: "address",
        name: "Trieu Khuc, Tan Trieu, Thanh Tri, Ha Noi",
        icon: (color, size) => <Icon name="compass-outline" size={size} color={color} />
    },
]

function Profile() {
    const { colors } = useTheme()
    return (
        <View style={{flex: 1}}>
            <ScrollView style={styles.container}>
                <View style={{ flexDirection: "row", alignItems: 'center', marginVertical: 20 }}>
                    <Avatar.Text label="US" size={100} style={{ backgroundColor: colors.button }} />
                    <View style={{ marginLeft: 20 }}>
                        <Title style={{ color: colors.text }}>sonht1109</Title>
                        <Caption style={{ color: colors.caption }}>#1109</Caption>
                    </View>
                </View>
                <Divider />
                <View style={{ marginTop: 20 }}>
                    {
                        infoFields.map((info, index) => {
                            return (
                                <View style={styles.field} key={'field' + index}>
                                    {info.icon(colors.text, 20)}
                                    <Text style={{ marginLeft: 10, color: colors.title }}>
                                        {info.name}
                                    </Text>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const Stack = createStackNavigator()

export default function ProfileTab({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile}
                options={{
                    headerLeft: () => <Icon name="menu-outline" size={25} color="white"
                        onPress={() => navigation.openDrawer()} style={{ marginLeft: 20 }} />,
                    headerStyle: {
                        backgroundColor: "#3c5898",
                    },
                    title: '',
                    headerRight: () => <Icon name="create-outline" size={25} color="white"
                        onPress={() => navigation.navigate("EditInfo")} style={{ marginRight: 20 }}
                    />
                }}
            />
            <Stack.Screen name="EditInfo" component={EditInfo}
                options={{
                    title: '',
                    headerStyle: {
                        backgroundColor: "transparent",
                        elevation: 0, //android
                    }
                }}
            />
        </Stack.Navigator>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 20,
        paddingHorizontal: 20,
        // paddingBottom: 10
    },
    field: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center'
    }
})