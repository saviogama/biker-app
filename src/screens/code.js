import React, { Component } from 'react';
import { ImageBackground, Text, StyleSheet, View, TextInput, Image } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import backgroundImage from '../../assets/imgs/bikerappbg.png';
import codeImage from '../../assets/imgs/codebar.png';
import commonStyles from '../commonStyles';

const theme = {
    Button: {
      titleStyle: {
        color: 'white',
      },
    },
};

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
                    <Button title='Validar'
                        color='#009FEF'
                        onPress={() => this.props.navigation.navigate('Feed')}/>
                </View>
                <View style={styles.link}>
                    <View>
                        <ThemeProvider theme={theme}>
                            <Button title='Não tenho o código' type='clear' onPress={() => this.props.navigation.navigate('motoclubeRegister')}/>
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
        color: commonStyles.colors.black,
        marginTop: 20,
        marginBottom: 20,
        borderColor: commonStyles.colors.white,
        borderWidth: 1,
        padding: 10
    },
    link:{
        justifyContent: 'flex-end',
        alignItems: 'center',
        top: 80
    }
})