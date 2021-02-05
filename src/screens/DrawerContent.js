import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Avatar, Caption, Divider, Drawer, Paragraph, Switch, Title } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'

export default function DrawerContent() {

    const [darkmode, setDarkmode] = useState(false)

    return (
        <DrawerContentScrollView>
            <View style={styles.top}>
                <View style={{ flexDirection: 'row' }}>
                    <Avatar.Text size={60} style={{ backgroundColor: "#3c5898" }} label="HS" />
                    <View style={{ marginLeft: 10 }}>
                        <Title>sonht1109</Title>
                        <Caption>#1109</Caption>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 20 }}>
                    <Text>
                        <Paragraph style={{ fontWeight: 'bold' }}>1205 </Paragraph>
                        <Caption>friends</Caption>
                    </Text>
                    <Text>
                        <Paragraph style={{ fontWeight: "bold" }}>302 </Paragraph>
                        <Caption>followings</Caption>
                    </Text>
                </View>
            </View>
            <Divider />

            <Drawer.Section style={{ }}>
                <DrawerItem label="Profile" style={{ color: "black" }}
                    onPress={() => { }} icon={() => <Icon name="person-circle-outline" size={20} />} />
                <DrawerItem label="Settings" style={{ color: "black" }}
                    icon={() => <Icon name="settings-outline" size={20} />} />
                <DrawerItem label="Saved" style={{ color: "black" }}
                    icon={() => <Icon name="bookmarks-outline" size={20} />} />
                <DrawerItem label="Support" style={{ color: "black" }}
                    icon={() => <Icon name="bulb-outline" size={20} />} />
            </Drawer.Section>
            
            <Drawer.Section>
                <View style={{flexDirection: "row", alignItems: "center", paddingHorizontal: 20}}>
                    <Text>Dark mode</Text>
                    <Switch value={darkmode} onValueChange={() => setDarkmode(prev => !prev)} style={{marginLeft: "auto"}} />
                </View>
            </Drawer.Section>
            <View style={styles.bottom}>
                <DrawerItem label="Log out" style={{ color: "black" }}
                    icon={() => <Icon name="log-out-outline" size={20} />} />
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    top: {
        // alignItems: "center"
    },
    bottom: {

    }
})
