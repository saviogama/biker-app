import React, { Component } from 'react';
import { ImageBackground, Text, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native';
import backgroundImage from '../../assets/imgs/bikerappbg.png';
import codeImage from '../../assets/imgs/codebar.png';
import commonStyles from '../commonStyles';

export default class Code extends Component {

    state = {
        code: ''
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <View style={styles.titleTop}>
                    <Image style={{width: 150, height: 150}} source={codeImage} />
                    <Text style={styles.title}>
                        Digite abaixo o código
                    </Text>
                    <Text style={styles.title}>
                        de convite do seu Motoclube
                    </Text>
                </View>
                <View style={styles.form}>
                    <TextInput placeholder='Código' value={this.state.code} 
                    style={styles.input} 
                    onChangeText={code => this.setState({ code })} />
                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Validar
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.link}>
                    <TouchableOpacity>
                        <View>
                            <Text style={styles.buttonText2}>
                                Não tenho o código
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
        bottom: 30
    },
    title:{
        color: commonStyles.colors.white,
        fontSize: 21,
    },
    form:{
        justifyContent: 'center',
        padding: 20,
        width: '90%',
        marginTop: 15
    },
    input:{
        backgroundColor: commonStyles.colors.white,
        color: commonStyles.colors.white,
        marginTop: 20,
        borderColor: commonStyles.colors.white,
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