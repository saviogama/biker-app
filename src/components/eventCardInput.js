import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Thumbnail } from 'native-base';
import { Card, Avatar, Button, ThemeProvider, Badge } from 'react-native-elements';

const theme = {
    Button: {
      titleStyle: {
        color: 'black',
        fontSize: 12
      },
    },
};

export default props => {
    return (
        <Card
            containerStyle={{marginBottom: 3}}
            title='99º TITULO LONGO DE CARUARU-PE'
            >
            <View style={styles.button}>
                <Thumbnail large source={{ uri: 'https://blog.masttermoto.com.br/wp-content/uploads/2018/11/saiba-o-que-e-um-moto-clube-e-quais-sao-os-mais-conhecidos-do-brasil.jpeg' }} />
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </Text>
            </View>
            <View style={styles.button2}>
                <Avatar rounded icon={{name: 'calendar', color: 'gray', type: 'font-awesome'}}/>
                <ThemeProvider theme={theme}>
                    <Button title='09/09' type='clear' disabled buttonStyle={{marginRight: 30}}/>
                </ThemeProvider>
                <Avatar rounded icon={{name: 'clock-o', color: 'gray', type: 'font-awesome'}}/>
                <ThemeProvider theme={theme}>
                    <Button title='09:00' type='clear' disabled buttonStyle={{marginRight: 30}}/>
                </ThemeProvider> 
                <Avatar rounded icon={{name: 'thumbs-up', color: 'gray', type: 'font-awesome'}}/>
                <ThemeProvider theme={theme}>
                    <Button title='99' type='clear' disabled/>
                </ThemeProvider> 
            </View>
            <Button
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Confirmar presença'/>
        </Card>
    )
}

const styles = StyleSheet.create({
    button:{
        marginRight: 15,
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    button2:{
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text:{
        fontSize: 15,
        paddingHorizontal: 10,
        marginRight: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
})