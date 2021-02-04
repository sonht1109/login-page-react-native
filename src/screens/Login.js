import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-paper'

export default function Login() {

    const [data, setData] = useState({
        user: '',
        password: ''
    })

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={{
                    fontSize: 30, color: "white", fontWeight: "700",
                    marginLeft: 20
                }}>
                    Login
                </Text>
            </View>
            <Animatable.View
                animation="fadeInUp"
                style={styles.bottom}>
                <View>
                    <TextInput
                    style={styles.textInput}
                    label="Username"
                    value={data.user}
                    onChangeText={val => setData({...data, user: val})}
                    />
                    <TextInput
                    style={styles.textInput}
                    secureTextEntry={true}
                    label="Password"
                    value={data.password}
                    onChangeText={val => setData({...data, password: val})}
                    />
                </View>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3c5898"
    },
    top: {
        flex: 1,
        justifyContent: "center"
    },
    bottom: {
        flex: 2,
        backgroundColor: "white",
        marginHorizontal: 10,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        paddingHorizontal: 20,
    },
    textInput: {
        backgroundColor: "transparent"
    }
})
