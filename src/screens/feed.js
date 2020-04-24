import React, { Component } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
import commonStyles from '../commonStyles'
import Notification from '../components/notificationInput'
import Event from '../components/eventCardInput'
import HeaderTabs from '../components/headerTabs'
import FooterTabs from '../components/footerTabs'

export default class Feed extends Component {

    render() {

        return (
            <SafeAreaView style={styles.background}>
                <HeaderTabs>Feed</HeaderTabs>
                <ScrollView style={styles.scrollview}>
                    <Notification />
                    <Event />
                    <Event />
                    <Notification />
                    <Notification />
                    <Event />
                </ScrollView>
                <FooterTabs></FooterTabs>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%'
    },
    scrollview: {
        width: '100%'
    },
    icon: {
        color: commonStyles.colors.white,
        marginLeft: 10
    }
})