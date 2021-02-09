import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'

export default function Watch() {
    return (
        // <View style={styles.container}>
        //     <Text>Watch</Text>
        // </View>
        <Onboarding
        pages={[
            {
                backgroundColor: "#a6e4d0",
                image: <Image source={require('./img/onboarding-img1.png')} />,
                title: "Connect to the world",
                subtitle: "A new way to connect to the world"
            },
            {
                backgroundColor: "#fdeb93",
                image: <Image source={require('./img/onboarding-img2.png')} />,
                title: "Share your favourites",
                subtitle: "Share your thoughts with similar kind of people"
            },
            {
                backgroundColor: "#e9bcbe",
                image: <Image source={require('./img/onboarding-img3.png')} />,
                title: "Become the star",
                subtitle: "Let the spotlight capture you"
            }
        ]}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
