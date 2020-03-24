import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import commonStyles from '../commonStyles';

export default class motoclubeRegister extends Component {

    state = {
        nome: '',
        cep: '',
        numero: '',
        complemento: '',
        logradouro: '',
        bairro: '',
        cidade: '',
        estado: ''
    }

    render(){
        return(
            <SafeAreaView style={styles.background}>
            <ScrollView style={styles.scrollview}>
                <View style={styles.form}>
                    <Text style={styles.text}> Novo Motoclube:</Text>
                    <Text style={styles.text2}>* Nome do Motoclube:</Text>
                    <TextInput placeholder='Nome do Motoclube' value={this.state.nome} 
                    style={styles.input} 
                    onChangeText={nome => this.setState({ nome })} />
                    <Text style={styles.text2}>Logotipo:</Text>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            <Icon name="folder" size={20} /> Enviar
                        </Text>
                    </View>
                    <Text style={styles.text2}>Logradouro:</Text>
                    <TextInput placeholder='Logradouro' value={this.state.logradouro} 
                    style={styles.input} 
                    onChangeText={logradouro => this.setState({ logradouro })} />
                    <Text style={styles.text2}>Número:</Text>
                    <TextInput placeholder='Número' value={this.state.numero} 
                    style={styles.input} 
                    onChangeText={numero => this.setState({ numero })} />
                    <Text style={styles.text2}>Complemento:</Text>
                    <TextInput placeholder='Complemento' value={this.state.complemento} 
                    style={styles.input} secureTextEntry={true} 
                     onChangeText={complemento => this.setState({ complemento })} />
                    <Text style={styles.text2}>Bairro:</Text>
                    <TextInput placeholder='Bairro' value={this.state.bairro} 
                    style={styles.input} secureTextEntry={true} 
                    onChangeText={bairro => this.setState({ bairro })} />
                    <Text style={styles.text2}>* CEP:</Text>
                    <TextInput placeholder='CEP' value={this.state.cep} 
                    style={styles.input} secureTextEntry={true} 
                    onChangeText={cep => this.setState({ cep })} />
                    <Text style={styles.text2}>* Cidade:</Text>
                    <TextInput placeholder='Cidade' value={this.state.cidade} 
                    style={styles.input} secureTextEntry={true} 
                    onChangeText={cidade => this.setState({ cidade })} />
                    <Text style={styles.text2}>* Estado:</Text>
                    <TextInput placeholder='Estado' value={this.state.estado} 
                    style={styles.input} secureTextEntry={true} 
                    onChangeText={estado => this.setState({ estado })} />
                    <Button title='Confirmar'
                        color='#009FEF'
                        onPress={() => this.props.navigation.navigate('userHome')}/>
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
        marginBottom: 30,
        marginTop: 5,
        fontSize: 18
    },
    text2:{
        marginBottom: 5
    }
})