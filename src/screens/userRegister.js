import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, ScrollView, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import commonStyles from '../commonStyles';

export default class userRegister extends Component {

    state = {
        nome: '',
        telefone: '',
        email: '',
        password: '',
        repeatPassword: ''
    }

    render(){
        return(
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={80} style={styles.container}>
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
                            <TextInput placeholder='Repetir Senha' value={this.state.repeatPassword} 
                            style={styles.input} secureTextEntry={true} 
                            onChangeText={repeatPassword => this.setState({ repeatPassword })} />
                            <Button title='Confirmar'
                                color='#009FEF'
                                onPress={() => this.props.navigation.navigate('Code')}/>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
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
    text:{
        marginBottom: 30,
        marginTop: 5,
        fontSize: 15
    },
    text2:{
        marginBottom: 5
    }
})