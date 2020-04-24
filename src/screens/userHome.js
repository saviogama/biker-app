import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Avatar, ThemeProvider, Button } from 'react-native-elements';
import commonStyles from '../commonStyles'

const theme = {
    Button: {
      titleStyle: {
        color: 'black',
        fontSize: 15
      },
    },
};

export default class userHome extends Component {
    render() {
        return (
            <SafeAreaView style={styles.background}>
                <ScrollView style={styles.scrollview}>
                    <View style={styles.title}>
                        <Avatar size='large' rounded title='MC'/>
                        <Text style={styles.titleText}>
                            Motoclube 1
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
                        <Avatar rounded icon={{name: 'bar-chart', color: 'black', type: 'font-awesome'}}/>
                        <ThemeProvider theme={theme}>
                            <Button title='Dados sobre Eventos' type='clear' onPress={() => this.props.navigation.navigate('eventData')}/>
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
        marginLeft: '18%',
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    icon: {
        color: commonStyles.colors.white,
        marginLeft: 10
    }
})