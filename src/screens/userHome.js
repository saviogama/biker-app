import React, { Component } from 'react';
import { ImageBackground, Text, StyleSheet, View } from 'react-native';
import { Avatar, Button, ThemeProvider } from 'react-native-elements';
import commonStyles from '../commonStyles'

const theme = {
    Button: {
      titleStyle: {
        color: 'black',
      },
    },
};

export default class Main extends Component {
    render() {
        return (
            <ImageBackground style={styles.background}>
                <View style={styles.title}>
                    <Avatar size='large' rounded title='MC'/>
                    <Text style={styles.titleText}>
                        Motoclube Teste
                    </Text>
                </View>
                <View style={styles.button}>
                    <Avatar rounded icon={{name: 'pencil', color: 'black', type: 'font-awesome'}}/>
                    <ThemeProvider theme={theme}>
                        <Button title='Escrever Notificação' type='clear' onPress={() => this.props.navigation.navigate('newNotification')}/>
                    </ThemeProvider>
                </View>
                <View style={styles.button}>
                    <Avatar rounded icon={{name: 'calendar', color: 'black', type: 'font-awesome'}}/>
                    <ThemeProvider theme={theme}>
                        <Button title='Criar Evento' type='clear' onPress={() => this.props.navigation.navigate('newEvent')}/>
                    </ThemeProvider>
                </View>
                <View style={styles.button}>
                    <Avatar rounded icon={{name: 'line-chart', color: 'black', type: 'font-awesome'}}/>
                    <ThemeProvider theme={theme}>
                        <Button title='Dados sobre Eventos' type='clear'/>
                    </ThemeProvider>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    title:{
        margin: 50,
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    titleText:{
        color: commonStyles.colors.black,
        fontSize: 30,
        marginLeft: 15
    },
    button:{
        marginTop: 15,
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    buttonText:{
        color: commonStyles.colors.black,
        fontSize: 15,
        marginLeft: 15
    }
})