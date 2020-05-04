import React, { Component } from 'react';
import { StyleSheet, View, TextInput, ScrollView, SafeAreaView, Picker, KeyboardAvoidingView } from 'react-native';
import ContactsInput from '../components/contactsInput'
import commonStyles from '../commonStyles';

export default class newNotification extends Component {

    state = {
        grupo: '',
        tag: '',
        contato: ''
    }

    render(){
        return(
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={80} style={styles.container}>
                <SafeAreaView style={styles.background}>
                    <ScrollView style={styles.scrollview}>
                        <View style={styles.form}>
                            <View style={styles.picker}>
                                <Picker
                                    selectedValue={this.state.grupo}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({grupo: itemValue})
                                    }>
                                    <Picker.Item label="Grupo" value="anuncio" />
                                </Picker>
                            </View>
                            <View style={styles.picker}>
                                <Picker
                                    selectedValue={this.state.tag}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({tag: itemValue})
                                    }>
                                    <Picker.Item label="Tag" value="anuncio" />
                                </Picker>
                            </View>
                            <TextInput placeholder='Buscar' value={this.state.contato} 
                            style={styles.input} 
                            onChangeText={contato => this.setState({ contato })} />
                            <ContactsInput />
                            <ContactsInput />
                            <ContactsInput />
                            <ContactsInput />
                            <ContactsInput />
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
        borderWidth: 1,
        marginBottom: 10
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