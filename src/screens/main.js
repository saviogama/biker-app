import React, { Component } from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';
import backgroundImage from '../../assets/imgs/bikerappbg.png'
import commonStyles from '../commonStyles'

export default class Main extends Component {

    componentDidMount(){
        this.timeoutHandle = setTimeout(()=>{
            this.props.navigation.navigate('Auth')
        }, 1500);
   }

   componentWillUnmount(){
        clearTimeout(this.timeoutHandle);
   }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <Text style={styles.title} onPress={() => this.props.navigation.navigate('Auth')}>
                    BikerApp
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
        color: commonStyles.colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30
    }
})