import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import colors from '../config/colors'

export default function WelcomeScreen() {
    return (
    <ImageBackground style={styles.background} 
        source={require('../assets/welcome.jpg')}
    >
        <View style={styles.loginButton}><Text>Login</Text></View>
        <View style={styles.registerButton}><Text>Register</Text></View>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: 'flex-end'
    },
    loginButton:{
        width:'100%',
        height: 70,
        backgroundColor: colors.primary
    },
    registerButton:{
        width:'100%',
        height: 70,
        backgroundColor: colors.secondary
    }
})