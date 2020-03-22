import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import commonStyles from '../commonStyles';

export default class userRegister extends Component {

    state = {
        nome: '',
        telefone: '',
        email: '',
        password: ''
    }

    render(){
        return(
            <SafeAreaView style={styles.background}>
            <ScrollView style={styles.scrollview}>
                <View style={styles.form}>
                    <Text style={styles.text}> Novo usuário:</Text>
                    <Text style={styles.text2}>* Nome Completo:</Text>
                    <TextInput placeholder='Nome Completo' value={this.state.nome} 
                    style={styles.input} 
                    onChangeText={nome => this.setState({ nome })} />
                    <Text style={styles.text2}>* Telefone:</Text>
                    <TextInput placeholder='Telefone' value={this.state.telefone} 
                    style={styles.input} 
                    onChangeText={telefone => this.setState({ telefone })} />
                    <Text style={styles.text2}>* Email:</Text>
                    <TextInput placeholder='Email' value={this.state.email} 
                    style={styles.input} 
                    onChangeText={email => this.setState({ email })} />
                    <Text style={styles.text2}>* Senha:</Text>
                    <TextInput placeholder='Senha' value={this.state.password} 
                    style={styles.input} secureTextEntry={true} 
                     onChangeText={password => this.setState({ password })} />
                    <Text style={styles.text2}>* Repetir Senha:</Text>
                    <TextInput placeholder='Repetir Senha' value={this.state.password} 
                    style={styles.input} secureTextEntry={true} 
                    onChangeText={password => this.setState({ password })} />
                    <TouchableOpacity>
                        <View style={styles.button}>
                             <Text style={styles.buttonText} onPress={this.props.navigation.navigate('motoclubeRegister')}>
                                Confirmar
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    background:{
        flexGrow: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollview:{
        width: '100%',
    },
    form:{
        justifyContent: 'center',
        padding: 20,
        width: '100%',
    },
    input:{
        color: commonStyles.colors.black,
        marginBottom: 15,
        borderColor: commonStyles.colors.black,
        borderWidth: 1,
        padding: 10
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
    text:{
        marginBottom: 30,
        marginTop: 5,
        fontSize: 18
    },
    text2:{
        marginBottom: 5
    }
})