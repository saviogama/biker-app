import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import { Avatar, Button, ThemeProvider, Header } from 'react-native-elements';
import commonStyles from '../commonStyles'
import { DrawerActions } from 'react-navigation-drawer';

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
            <SafeAreaView style={styles.background}>
            <ScrollView style={styles.scrollview}>
                <Header
                    centerComponent={{ text: 'Painel de Controle', style: { color: commonStyles.colors.white, fontSize: 18, fontWeight: 'bold' } }}
                    containerStyle={{
                        backgroundColor: commonStyles.colors.blue,
                        justifyContent: 'space-around',
                    }}
                />
                <View style={styles.title}>
                    <Avatar size='large' rounded title='MC'/>
                    <Text style={styles.titleText}>
                        Motoclube com um nome gigante
                    </Text>
                </View>
                <View style={styles.button}>
                    <Avatar rounded icon={{name: 'bars', color: 'black', type: 'font-awesome'}}/>
                    <ThemeProvider theme={theme}>
                        <Button title='Menu' type='clear'  onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer()) }/>
                    </ThemeProvider>
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
            </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        width: '100%'
    },
    scrollview:{
        width: '100%',
    },
    title:{
        marginTop: 15,
        marginRight: 50,
        marginLeft: 50,
        marginBottom: 15,
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText:{
        color: commonStyles.colors.black,
        fontSize: 30,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        marginLeft: '15%',
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    buttonText:{
        color: commonStyles.colors.black,
        fontSize: 15,
        marginLeft: 15
    }
})