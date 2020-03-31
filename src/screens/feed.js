import React, { Component } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements'
import commonStyles from '../commonStyles'
import Notification from '../components/notificationInput'
import Event from '../components/eventCardInput'

export default class Feed extends Component {
    render() {
        return (
            <SafeAreaView style={styles.background}>
                <Header
                    centerComponent={{ text: 'Feed', style: { color: commonStyles.colors.white, fontSize: 18, fontWeight: 'bold' } }}
                    containerStyle={{
                        backgroundColor: commonStyles.colors.darkGray,
                        justifyContent: 'space-around',
                    }}
                />
                <ScrollView style={styles.scrollview}>
                    <Notification/>
                    <Event/>
                    <Event/>
                    <Notification/>
                    <Notification/>
                    <Event/>
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
        width: '100%'
    }
})