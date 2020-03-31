import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, ScrollView, SafeAreaView, Picker, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import commonStyles from '../commonStyles';

export default class newNotification extends Component {

    state = {
        grupo: '',
        titulo: '',
        mensagem: ''
    }

    render(){
        return(
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={80} style={styles.container}>
                <SafeAreaView style={styles.background}>
                    <ScrollView style={styles.scrollview}>
                        <View style={styles.form}>
                            <View style={styles.picker}>
                                <Picker
                                    selectedValue={this.state.language}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({language: itemValue})
                                    }>
                                    <Picker.Item label="Anúncio" value="anuncio" />
                                    <Picker.Item label="Lembrete" value="lembrete" />
                                    <Picker.Item label="Advertência" value="advertencia" />
                                </Picker>
                            </View>
                            <Text style={styles.text}>Título:</Text>
                            <TextInput placeholder='Título' value={this.state.titulo} 
                            style={styles.input} 
                            onChangeText={titulo => this.setState({ titulo })} />
                            <View style={styles.button2}>
                                <Text style={styles.buttonText2}>
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
    picker:{
        padding: 0,
        borderColor: commonStyles.colors.black,
        borderWidth: 1
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
        backgroundColor: commonStyles.colors.blue,
        marginTop: 30,
        padding: 10,
        alignItems: 'center',
    },
    button2:{
        backgroundColor: commonStyles.colors.gray,
        marginBottom: 15,
        padding: 10,
        alignItems: 'center'
    },
    buttonText:{
        color: commonStyles.colors.white,
        fontSize: 20,
    },
    buttonText2:{
        color: commonStyles.colors.white,
        fontSize: 15,
    },
    text:{
        marginBottom: 10,
        marginTop: 5,
        fontSize: 15
    }
})