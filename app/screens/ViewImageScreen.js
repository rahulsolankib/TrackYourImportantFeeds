import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import colors from '../config/colors'

export default function ViewImageScreen() {
    return (
    <View style={styles.container}>
        <View style={styles.head}>
            <View style={styles.closeIcon}></View>
        </View>
        <StatusBar style="auto" />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary
    },
    head:{
        top: 20,
        right: 20,
        flexDirection: 'row-reverse'
    }
})