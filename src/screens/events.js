import React, { Component } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from 'react-native-elements'
import commonStyles from '../commonStyles'
import Card from '../components/eventCardInput'

export default class Events extends Component {
    render() {
        return (
            <SafeAreaView style={styles.background}>
                <Header
                    leftComponent={<Icon name='bars' size={21} style={styles.icon} onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer()) } />}
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
        width: '100%'
    },
    icon: {
        color: commonStyles.colors.white,
        marginLeft: 10
    }
})