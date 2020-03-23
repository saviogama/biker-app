import React, { Component } from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';
import commonStyles from '../commonStyles'

export default class Main extends Component {
    render() {
        return (
            <ImageBackground style={styles.background} >
                <Text style={styles.title}>
                    Você está logado!
                </Text>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        color: commonStyles.colors.black,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30
    }
})