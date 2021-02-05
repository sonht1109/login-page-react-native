import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Watch() {
    return (
        <View style={styles.container}>
            <Text>Watch</Text>
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
