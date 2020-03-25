import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';

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
        <View style={styles.input}>
                <ThemeProvider theme={theme}>
                    <Button title='Mensalidade' type='clear' disabled buttonStyle={{marginRight: 30}}/>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                    <Button title='Vencimento: 09/09' type='clear' disabled buttonStyle={{marginRight: 30}}/>
                </ThemeProvider> 
                <ThemeProvider theme={theme}>
                    <Button title='Pago' disabled/>
                </ThemeProvider>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})