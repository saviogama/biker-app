import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, ScrollView, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import commonStyles from '../commonStyles';

export default class newEvent extends Component {

    state = {
        titulo: '',
        data: '',
        hora: '',
        mensagem: ''
    }

    render(){
        return(
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={80} style={styles.container}>
                <SafeAreaView style={styles.background}>
                    <ScrollView style={styles.scrollview}>
                        <View style={styles.form}>
                            <Text style={styles.text}>Título:</Text>
                            <TextInput placeholder='Título' value={this.state.titulo} 
                            style={styles.input} 
                            onChangeText={titulo => this.setState({ titulo })} />
                            <Text style={styles.text}>Data:</Text>
                            <TextInput placeholder='01/01/0001' value={this.state.data} 
                            style={styles.input} 
                            onChangeText={data => this.setState({ data })} />
                            <Text style={styles.text}>Hora:</Text>
                            <TextInput placeholder='00:00' value={this.state.hora} 
                            style={styles.input} 
                            onChangeText={hora => this.setState({ hora })} />
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>
                                    <Icon name="folder" size={20} /> Selecionar imagem
                                </Text>
                            </View>
                            <TextInput placeholder='Mensagem' value={this.state.mensagem} 
                            style={styles.input2} 
                            multiline onChangeText={mensagem => this.setState({ mensagem })} value={this.state.mensagem} />
                            <Button title='Enviar'
                                color='#009FEF'/>
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
    input2:{
        color: commonStyles.colors.black,
        marginBottom: 15,
        borderColor: commonStyles.colors.black,
        borderWidth: 1,
        padding: 10,
        height: 150,
        textAlignVertical: 'top'
    },
    button:{
        backgroundColor: commonStyles.colors.gray,
        marginBottom: 15,
        padding: 10,
        alignItems: 'center'
    },
    buttonText:{
        color: commonStyles.colors.white,
        fontSize: 15,
    },
    text:{
        marginBottom: 10,
        marginTop: 5,
        fontSize: 15
    }
})