import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function NewFeed({navigation}) {
    return (
        <View style={styles.container}>
            <Text>NewFeed</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
                <Text>Go to detail</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})