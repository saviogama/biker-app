import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Avatar, Button, ThemeProvider, Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const theme = {
    Button: {
      titleStyle: {
        color: 'black',
      },
    },
};

export default props => {
    return (
        <Card
            title='99º TITULO LONGO DE CARUARU-PE'
            >
            <View style={styles.button}>
                <Avatar rounded icon={{name: 'user', color: 'black', type: 'font-awesome'}}/>
                <Badge
                    value="9" status="primary"
                    containerStyle={{ position: 'absolute', top: 8 }}
                />
                <Text style={{fontSize: 16, fontWeight: 'bold', paddingHorizontal: 10, marginRight: 30}}>Confirmados</Text>
                <Icon name={'calendar'} size={20} />
                <Text style={{fontSize: 15, paddingHorizontal: 10}}>09/09</Text>
            </View>
            <View style={styles.button}>
                <Avatar rounded icon={{name: 'user', color: 'gray', type: 'font-awesome'}}/>
                <Badge
                    value="9" status="primary"
                    containerStyle={{ position: 'absolute', top: 12 }}
                />
                <ThemeProvider theme={theme}>
                    <Button title='Não confirmados' type='clear' disabled/>
                </ThemeProvider> 
            </View>
            <Button
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Ver detalhes'/>
        </Card>
    )
}

const styles = StyleSheet.create({
    button:{
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})