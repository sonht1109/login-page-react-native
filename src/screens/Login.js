import React, { useContext, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { HelperText, TextInput } from 'react-native-paper'
import { UserContext } from './context';

export default function Login({navigation}) {

    const [data, setData] = useState({
        user: '',
        password: ''
    })

    const checkUser = () => {
        return data.user.length < 4 && data.user.length > 0
    }

    const checkPassword = () => {
        return data.password.length < 4 && data.password.length > 0
    }

    const {logIn} = useContext(UserContext)

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={{
                    fontSize: 36, color: "white", fontWeight: "700",
                    marginLeft: 20
                }}>
                    Log in
                </Text>
            </View>
            <Animatable.View
                animation="fadeInUp"
                style={[styles.bottom]}>
                <ScrollView>
                    <TextInput
                        style={styles.textInput}
                        label="Username"
                        value={data.user}
                        autoCapitalize='none'
                        onChangeText={val => setData({ ...data, user: val.trim() })}
                    />
                    <HelperText type="error" visible={checkUser()}>
                        Username must be at least 4 characters long
                    </HelperText>
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry={true}
                        label="Password"
                        value={data.password}
                        autoCapitalize='none'
                        onChangeText={val => setData({ ...data, password: val.trim() })}
                    />
                    <HelperText type="error" visible={checkPassword()}>
                        Password must be at least 4 characters long
                    </HelperText>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>{
                        if(!checkPassword() && !checkUser()){
                            logIn(data)
                        }
                    }}>
                        <View style={styles.button}>
                            <Text style={{ textAlign: 'center', color: "white" }}>Log in</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>navigation.navigate('Signup')}>
                        <View style={[styles.button, { backgroundColor: "white", borderColor: "#3c5898", borderWidth: 1 }]}>
                            <Text style={{ textAlign: 'center', color: "#3c5898" }}>Sign up</Text>
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
        paddingVertical: 50,
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
