import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { useTheme } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Avatar, Caption, Divider, Drawer, Paragraph, Switch, Title } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import { UserContext } from './context';

export default function DrawerContent() {

    const [darkmode, setDarkmode] = useState(false)
    const {colors} = useTheme()
    const {logOut} = useContext(UserContext)

    return (
        <DrawerContentScrollView>
            <View style={styles.top}>
                <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                    <Avatar.Text size={60} style={{ backgroundColor: "#3c5898" }} label="US" />
                    <View style={{ marginLeft: 10 }}>
                        <Title style={{color: colors.text}}>sonht1109</Title>
                        <Caption style={{color: colors.caption}}>#1109</Caption>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 20 }}>
                    <Text>
                        <Paragraph style={{ fontWeight: 'bold', color: colors.text }}>1205 </Paragraph>
                        <Caption style={{color: colors.caption}}>friends</Caption>
                    </Text>
                    <Text>
                        <Paragraph style={{ fontWeight: "bold", color: colors.text }}>302 </Paragraph>
                        <Caption style={{color: colors.caption}}>followings</Caption>
                    </Text>
                </View>
            </View>
            <Divider />

            <Drawer.Section>
                <DrawerItem label="Profile" style={{ color: "black" }}
                    onPress={() => { }} icon={() => <Icon name="person-circle-outline" size={20} color={colors.text} />} />
                <DrawerItem label="Settings" style={{ color: "black" }}
                    icon={() => <Icon name="settings-outline" size={20} color={colors.text} />} />
                <DrawerItem label="Saved" style={{ color: "black" }}
                    icon={() => <Icon name="bookmarks-outline" size={20} color={colors.text} />} />
                <DrawerItem label="Support" style={{ color: "black" }}
                    icon={() => <Icon name="bulb-outline" size={20} color={colors.text} />} />
            </Drawer.Section>

            <Drawer.Section>
                <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20, paddingVertical: 20 }}>
                    {/* <DrawerItem label="Darkmode" style={{ color: "black" }}
                        icon={() => <Icon name="color-palette-outline" size={20} />} /> */}
                        <Text style={{color: colors.text}}>Dark mode</Text>
                    <Switch value={darkmode} onValueChange={() => setDarkmode(prev => !prev)} style={{ marginLeft: "auto" }} />
                </View>
            </Drawer.Section>

            <View>
                <DrawerItem label="Log out" style={{ color: "black" }}
                    icon={() => <Icon name="log-out-outline" size={20} color={colors.text} />} onPress={logOut} />
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({

})
