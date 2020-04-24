import React, { Component } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import commonStyles from '../commonStyles'
import Card from '../components/notificationInput'
import FooterTabs from '../components/footerTabs'

export default class Notifications extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={styles.background}>
                <ScrollView style={styles.scrollview}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </ScrollView>
                <FooterTabs navigate={navigation} />
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