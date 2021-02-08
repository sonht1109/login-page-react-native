import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import notifications from './notificationsList'
import { useTheme } from '@react-navigation/native';
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/Ionicons'

export default function Notifications() {

    const [notis, setNotis] = useState(notifications.map((item, i) => ({
        key: `${i}`,
        title: item.title
    })))
    const [heights, setHeights] = useState([])
    const { colors } = useTheme()

    const onLayout = index => ({ nativeEvent }) => {
        // let tempHeights = [...heights]
        // tempHeights[index] = nativeEvent.layout.height
        // setHeights([...tempHeights])
    }

    const handleDeleteRow = (rowMap, rowKey) => {
        let tempList = [...notis]
        let index = tempList.findIndex(item => item.key === rowKey)
        if (index !== -1) tempList.splice(index, 1)
        setNotis([...tempList])
    }

    const handleCloseRow = (rowMap, rowKey) => {
        console.log(rowMap[rowKey])
        rowMap[rowKey].closeRow()
    }

    const renderItem = (data, rowMap) => {
        return (
            <View
                onLayout={onLayout(data.index)}
                style={[styles.rowFront, { backgroundColor: colors.button }]}
            >
                <Text style={{ color: "white" }} numberOfLines={1} ellipsizeMode="tail">
                    {data.item.title}
                </Text>
            </View>
        )
    }

    const renderHiddenItem = (data, rowMap) => {
        return (
            <View style={[styles.rowBack]}>
                {/* archive */}
                <View style={[styles.hiddenLeftButton, { backgroundColor: "#32a852" }]}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={[styles.hiddenButton]}>
                            <Icon name="archive-outline" size={22} color="white"
                                style={styles.innerHiddenButton} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row" }}>
                    {/* close */}
                    <View>
                        <TouchableOpacity activeOpacity={0.8}
                            onPress={() => handleCloseRow(rowMap, data.item.key)}
                        >
                            <View style={[{ backgroundColor: "#7bb0e3" }, styles.hiddenButton]}>
                                <Icon name="close-circle-outline" size={22} color="white"
                                    style={styles.innerHiddenButton} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* delete */}
                    <View style={[styles.hiddenButton, { backgroundColor: "#de4343" }]}>
                        <TouchableOpacity activeOpacity={0.8}
                            onPress={() => handleDeleteRow(rowMap, data.item.key)}
                            style={{ width: "100%" }}
                        >
                            <View style={[{ backgroundColor: "#de4343" }, styles.hiddenButton,
                            styles.hiddenRightButton]}>
                                <Icon name='trash-bin-outline' size={25} color="white"
                                    style={styles.innerHiddenButton} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SwipeListView
            closeOnRowPress={true}
            data={notis}
            renderItem={(data, rowMap) => renderItem(data, rowMap)}
            renderHiddenItem={(data, rowMap) => renderHiddenItem(data, rowMap)}
            leftOpenValue={75}
            rightOpenValue={-150}
            recalculateHiddenLayout={true}
            rightActionValue={-200}
        />
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowFront: {
        marginHorizontal: 20,
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
        elevation: 5,
        shadowColor: "#000000",
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowOpacity: 1,
        height: 60,
        justifyContent: "center"
    },
    rowBack: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 5,
        justifyContent: 'space-between',
    },
    hiddenButton: {
        width: 75,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerHiddenButton: {
        color: "white", textAlign: "center"
    },
    hiddenRightButton: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    hiddenLeftButton: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    }
})