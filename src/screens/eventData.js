import React, { Component } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import EventDataInput from '../components/eventDataInput'

export default class eventData extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={styles.background}>
            <ScrollView style={styles.scrollview}>
                <EventDataInput navigate={navigation} />
                <EventDataInput navigate={navigation} />
                <EventDataInput navigate={navigation} />
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