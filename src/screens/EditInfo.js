import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, HelperText } from 'react-native-paper'
import { Caption, Title, TextInput } from 'react-native-paper'
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function EditInfo() {

    const [avt, setAvt] = useState('')
    const { colors } = useTheme()
    const [user, setUser] = useState({
        age: '20',
        address: "This is address",
        email: "admin@gmail.com",
        phone: "0987612345"
    })

    const checkUser = () => {
        return user.age !== '' && user.address !== '' && user.email !== '' && user.phone !== ''
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{paddingHorizontal: 20}}>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => console.warn('123')}
                    >
                        {
                            avt === '' ?
                                <Avatar.Text
                                    style={{ backgroundColor: colors.button }}
                                    label="US"
                                    size={100} /> :

                                <Avatar.Image
                                    size={100}
                                    source={{ uri: "https://avatars.githubusercontent.com/u/47313528?s=400&v=4" }}
                                />
                        }
                    </TouchableOpacity>
                    <Title style={{color: colors.text}}>sonht1109</Title>
                    <Caption style={{color: colors.caption}}>#1109</Caption>
                </View>
                <View>
                    <View>
                        <TextInput
                        style={[styles.textInput]} label="Age"
                        theme={{colors: {
                            text: colors.text,
                            primary: colors.input
                        }}}
                        // underlineColor={colors.text}
                        selectionColor="white"
                        keyboardType="number-pad"
                        value={user.age} onChangeText={val => setUser({...user, age: val})}
                        />
                        <HelperText visible={!checkUser()} type='error'>
                            Please fill all fields
                        </HelperText>
                        <TextInput style={styles.textInput} label="Email"
                        theme={{colors: {
                            text: colors.text,
                            primary: colors.input
                        }}}
                        // underlineColor={colors.text}
                        value={user.email} onChangeText={val => setUser({...user, email: val})}
                        />
                        <HelperText visible={!checkUser()} type='error'>
                            Please fill all fields
                        </HelperText>
                        <TextInput style={styles.textInput} label="Phone"
                        // underlineColor={colors.text}
                        keyboardType="number-pad"
                        theme={{colors: {
                            text: colors.text,
                            primary: colors.input
                        }}}
                        value={user.phone} onChangeText={val => setUser({...user, phone: val})}
                        />
                        <HelperText visible={!checkUser()} type="error">
                            Please fill all fields
                        </HelperText>
                        <TextInput style={styles.textInput} label="Address"
                        // underlineColor={colors.text}
                        theme={{colors: {
                            primary: colors.input,
                            text: colors.text,
                        }}}
                        value={user.address} onChangeText={val => setUser({...user, address: val})}
                        />
                        <HelperText visible={!checkUser()} type='error'>
                            Please fill all fields
                        </HelperText>
                    </View>
                    <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.button, {backgroundColor: colors.button}]}
                    >
                        <Text style={{color: 'white'}}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        backgroundColor: "transparent",
        marginVertical: 0
    },
    button: {
        alignItems: "center",
        paddingVertical: 15,
        borderRadius: 5,
        marginVertical: 10
    }
})
