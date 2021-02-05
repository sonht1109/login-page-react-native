import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { HelperText, TextInput } from 'react-native-paper'

export default function Signup({navigation}) {

    const [data, setData] = useState({
        user: '',
        password: '',
        confirmPassword: ''
    })

    const checkUser = () => {
        return data.user.length < 4 && data.user.length > 0
    }

    const checkPassword = () => {
        return data.password.length < 4 && data.password.length > 0
    }

    const checkConfirmPassword = () => {
        return data.confirmPassword !== data.password
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={{
                    fontSize: 36, color: "white", fontWeight: "700",
                    marginLeft: 20
                }}>
                    Sign up
                </Text>
            </View>
            <Animatable.View
                animation="fadeInUp"
                style={styles.bottom}>
                <ScrollView>
                    <TextInput
                        style={styles.textInput}
                        label="Username"
                        autoCapitalize='none'
                        value={data.user}
                        onChangeText={val => setData({ ...data, user: val.trim() })}
                    />
                    <HelperText type="error" visible={checkUser()}>
                        Username must be at least 4 characters long
                    </HelperText>
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry={true}
                        label="Password"
                        autoCapitalize='none'
                        value={data.password}
                        onChangeText={val => setData({ ...data, password: val.trim() })}
                    />
                    <HelperText type="error" visible={checkPassword()}>
                        Password must be at least 4 characters long
                    </HelperText>
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry={true}
                        label="Confirm password"
                        autoCapitalize='none'
                        value={data.confirmPassword}
                        onChangeText={val => setData({ ...data, confirmPassword: val.trim() })}
                    />
                    <HelperText type="error" visible={checkConfirmPassword()}>
                        Password doesnot matches
                    </HelperText>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.button}>
                            <Text style={{ textAlign: 'center', color: "white" }}>
                                Sign up
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>navigation.navigate('Login')}>
                        <View style={[styles.button, { backgroundColor: "white", borderColor: "#3c5898", borderWidth: 1 }]}>
                            <Text style={{ textAlign: 'center', color: "#3c5898" }}>Log in</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
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
        paddingVertical: 50
        // justifyContent: "center",
        // alignItems:"center"
    },
    textInput: {
        backgroundColor: "transparent"
    },
    button: {
        backgroundColor: "#3c5898",
        color: "white",
        paddingVertical: 15,
        // paddingHorizontal: 30,
        fontSize: 18,
        borderRadius: 8,
        marginTop: 20,
    }
})
