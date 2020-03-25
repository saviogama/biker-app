import React, { Component } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Card from '../components/eventDataInput'

export default class eventData extends Component {
    render() {
        return (
            <SafeAreaView style={styles.background}>
            <ScrollView style={styles.scrollview}>
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
    }
})