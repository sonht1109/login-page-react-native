import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Animatable from 'react-native-animatable';

export default function Splash({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.splashTop}>
                <Image source={{uri: "https://vtv1.mediacdn.vn/Uploaded/luonghue/2014_04_02/facebook_0201414.png"}} style={styles.logo} />
            </View>
            <Animatable.View
            animation="fadeInUp"
            style={styles.splashBottom}>
                <Text style={{fontSize: 30, fontWeight: '700',
            color: "black"}}>
                    Welcome !
                </Text>
                <TouchableOpacity activeOpacity={0.8}
                onPress={()=>navigation.navigate("login")}>
                    <View style={styles.button}>
                        <Text style={{textAlign: "center", color: "white"}}>Getting started</Text>
                    </View>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3c5898"
    },
    splashTop: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    splashBottom: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginHorizontal: 10,
        justifyContent: 'center',
        // alignItems: "center",
        paddingHorizontal: 20
    },
    logo:{ 
        width: 200,
        height: 125
    },
    button: {
        backgroundColor: "#3c5898",
        color: "white",
        paddingVertical: 15,
        // paddingHorizontal: 30,
        fontSize: 18,
        borderRadius: 8,
        marginTop: 30,
        // flexGrow: 1
        width: "100%"
    }
})
