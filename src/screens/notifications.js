import React, { Component } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import commonStyles from '../commonStyles'
import Card from '../components/notificationInput'

export default class Notifications extends Component {
    render() {
        return (
            <SafeAreaView style={styles.background}>
                <ScrollView style={styles.scrollview}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        width: '100%'
    },
    scrollview:{
        width: '100%',
    },
    icon: {
        color: commonStyles.colors.white,
        marginLeft: 10
    }
})