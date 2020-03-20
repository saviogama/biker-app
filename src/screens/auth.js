import React, { Component } from 'react';
import { ImageBackground, Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import backgroundImage from '../../assets/imgs/bikerappbg.png'
import commonStyles from '../commonStyles'

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
                    <TextInput placeholder='Email' value={this.state.email} 
                    style={styles.input} 
                    onChangeText={email => this.setState({ email })} />
                    <TextInput placeholder='Senha' value={this.state.password} 
                    style={styles.input} secureTextEntry={true} 
                    onChangeText={password => this.setState({ password })} />
                    <TouchableOpacity>
                        <View style={styles.button} onPress={this.props.navigation.navigate('userRegister')}>
                            <Text style={styles.buttonText}>
                                Entrar
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.link}>
                    <TouchableOpacity>
                        <View>
                            <Text style={styles.buttonText2}>
                                Esqueci minha senha
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            <Text style={styles.buttonText2}>
                                Registre-se
                            </Text>
                        </View>
                    </TouchableOpacity>
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
        marginTop: 20,
        borderBottomColor: commonStyles.colors.white, 
        borderBottomWidth: 1
    },
    button:{
        backgroundColor: commonStyles.colors.blue,
        marginTop: 30,
        padding: 10,
        alignItems: 'center',
    },
    buttonText:{
        color: commonStyles.colors.white,
        fontSize: 20,
    },
    buttonText2:{
        color: commonStyles.colors.white,
        fontSize: 15,
        marginBottom: 15
    },
    link:{
        justifyContent: 'flex-end',
        alignItems: 'center',
        top: 80
    }
})