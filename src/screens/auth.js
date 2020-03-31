import React, { Component } from 'react';
import { ImageBackground, Text, StyleSheet, View } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements'
import backgroundImage from '../../assets/imgs/bikerappbg.png'
import commonStyles from '../commonStyles'
import AuthInput from '../components/authInput'

const theme = {
    Button: {
      titleStyle: {
        color: 'white',
      },
    },
};

export default class Auth extends Component {

    state = {
        email: '',
        password: ''
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <View style={styles.titleTop}>
                    <Text style={styles.title}>
                        BikerApp
                    </Text>
                </View>
                <View style={styles.form}>
                    <AuthInput icon='user' placeholder='Email' value={this.state.email} 
                    style={styles.input} 
                    onChangeText={email => this.setState({ email })} />
                    <AuthInput icon='lock' placeholder='Senha' value={this.state.password} 
                    style={styles.input} secureTextEntry={true} 
                    onChangeText={password => this.setState({ password })} />
                    <Button title='Entrar'
                        color='#009FEF'
                        onPress={() => this.props.navigation.navigate('Feed')}/>
                </View>
                <View style={styles.link}>
                    <View>
                        <ThemeProvider theme={theme}>
                            <Button title='Esqueci minha senha' type='clear'/>
                        </ThemeProvider>
                    </View>
                    <View>
                        <ThemeProvider theme={theme}>
                            <Button title='Registre-se' type='clear' onPress={() => this.props.navigation.navigate('userRegister')}/>
                        </ThemeProvider>
                    </View>
                </View>
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
    titleTop:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 15,
        bottom: 60
    },
    title:{
        color: commonStyles.colors.white,
        fontSize: 30,
        position: 'absolute'
    },
    form:{
        justifyContent: 'center',
        padding: 20,
        width: '90%',
        marginTop: 15
    },
    input:{
        color: commonStyles.colors.white,
        marginTop: 10,
        marginBottom: 10,
        borderBottomColor: commonStyles.colors.white, 
        borderBottomWidth: 1
    },
    link:{
        justifyContent: 'flex-end',
        alignItems: 'center',
        top: 80
    }
})