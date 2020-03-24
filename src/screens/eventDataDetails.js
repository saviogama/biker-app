import React, { Component } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { ListItem } from 'react-native-elements'
import Card from '../components/eventCardDetailsInput'

export default class eventDataDetails extends Component {
    render() {
        return (
            <SafeAreaView style={styles.background}>
            <ScrollView style={styles.scrollview}>
                <Card />
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