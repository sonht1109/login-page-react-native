import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, HelperText } from 'react-native-paper'
import { Caption, Title, TextInput } from 'react-native-paper'
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';

export default function EditInfo() {

    const [avt, setAvt] = useState('')
    const { colors } = useTheme()
    const [user, setUser] = useState({
        user: "admin",
        age: '20',
        address: "This is address",
        email: "admin@gmail.com",
        phone: "0987612345",
        id: 1238
    })

    const bs = useRef()
    const fall = new Animated.Value(1)

    const checkUser = () => {
        return user.age !== '' && user.address !== '' && user.email !== '' && user.phone !== ''
    }

    const handleTakeAPhoto = () => {
        ImagePicker.openCamera({
            compressImageQuality: 0.7,
            width: 300,
            height: 300,
            cropping: true,
        }).then(image => {
            setAvt(image.path)
            bs.current.snapTo(1)
        })
        .catch(err => console.log(err))
    }

    const handleGetPhotoFromGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true
        }).then(image => {
            setAvt(image.path)
            bs.current.snapTo(1)
        })
        .catch(err => console.log(err))
    }

    const handleDiscardAvatar = () => {
        setAvt('')
        bs.current.snapTo(1)
    }

    const renderContent = () => {
        return (
            <View style={styles.bsContent}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={handleTakeAPhoto}
                    style={[styles.button, { backgroundColor: colors.button }]}
                >
                    <Text style={{ color: 'white' }}>Take a photo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleGetPhotoFromGallery}
                    activeOpacity={0.8}
                    style={[styles.button, { backgroundColor: colors.button }]}
                >
                    <Text style={{ color: 'white' }}>Choose from gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.button, { backgroundColor: colors.button }]}
                    onPress={handleDiscardAvatar}
                >
                    <Text style={{ color: 'white' }}>Discard avatar</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const renderHeader = () => {
        return (
            <View style={styles.bsHeader}>
                <Icon name="remove-outline" color="black" size={30} />
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Update your avatar</Text>
            </View>
        )
    }

    const updateAvatar = () => {
        bs.current.snapTo(0)
    }

    return (
        <View style={styles.container}>
            <BottomSheet ref={bs}
                snapPoints={[320, 0]}
                initialSnap={1}
                callbackNode={fall}
                renderContent={renderContent}
                renderHeader={renderHeader}
            />
            <Animated.ScrollView
                style={{
                    paddingHorizontal: 20,
                    opacity: Animated.add(0.3, Animated.multiply(fall, 1))
                }}
            >
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={updateAvatar}
                    >
                        {
                            avt === '' ?
                                <Avatar.Text
                                    style={{ backgroundColor: colors.button }}
                                    label={user.user.substring(0, 2).toUpperCase()}
                                    size={100} /> :

                                <Avatar.Image
                                    size={100}
                                    source={{ uri: avt }}
                                />
                        }
                    </TouchableOpacity>
                    <Title style={{ color: colors.text }}>
                        {user.user}
                    </Title>
                    <Caption style={{ color: colors.caption }}>
                        #{user.id}
                    </Caption>
                </View>
                <View>
                    <View>
                        <TextInput
                            style={[styles.textInput]} label="Age"
                            theme={{
                                colors: {
                                    text: colors.text,
                                    primary: colors.input
                                }
                            }}
                            // underlineColor={colors.text}
                            selectionColor="white"
                            keyboardType="number-pad"
                            value={user.age} onChangeText={val => setUser({ ...user, age: val })}
                        />
                        <HelperText visible={!checkUser()} type='error'>
                            Please fill all fields
                        </HelperText>
                        <TextInput style={styles.textInput} label="Email"
                            theme={{
                                colors: {
                                    text: colors.text,
                                    primary: colors.input
                                }
                            }}
                            // underlineColor={colors.text}
                            value={user.email} onChangeText={val => setUser({ ...user, email: val })}
                        />
                        <HelperText visible={!checkUser()} type='error'>
                            Please fill all fields
                        </HelperText>
                        <TextInput style={styles.textInput} label="Phone"
                            // underlineColor={colors.text}
                            keyboardType="number-pad"
                            theme={{
                                colors: {
                                    text: colors.text,
                                    primary: colors.input
                                }
                            }}
                            value={user.phone} onChangeText={val => setUser({ ...user, phone: val })}
                        />
                        <HelperText visible={!checkUser()} type="error">
                            Please fill all fields
                        </HelperText>
                        <TextInput style={styles.textInput} label="Address"
                            // underlineColor={colors.text}
                            theme={{
                                colors: {
                                    primary: colors.input,
                                    text: colors.text,
                                }
                            }}
                            value={user.address} onChangeText={val => setUser({ ...user, address: val })}
                        />
                        <HelperText visible={!checkUser()} type='error'>
                            Please fill all fields
                        </HelperText>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={[styles.button, { backgroundColor: colors.button }]}
                    >
                        <Text style={{ color: 'white' }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </Animated.ScrollView>
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
    },
    bsHeader: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "white",
        paddingVertical: 10,
        shadowOffset: { //ios
            width: 10,
            height: 10
        },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 2 //android
    },
    bsContent: {
        backgroundColor: "white",
        padding: 20,
    }
})
