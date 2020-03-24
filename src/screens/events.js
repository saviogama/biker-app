import React, { Component } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements'
import commonStyles from '../commonStyles'
import Card from '../components/eventInput'

export default class Events extends Component {
    render() {
        return (
            <SafeAreaView style={styles.background}>
                <Header
                    centerComponent={{ text: 'Eventos', style: { color: commonStyles.colors.white, fontSize: 18, fontWeight: 'bold' } }}
                    containerStyle={{
                        backgroundColor: commonStyles.colors.darkGray,
                        justifyContent: 'space-around',
                    }}
                />
                <ScrollView style={styles.scrollview}>
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
    }
})