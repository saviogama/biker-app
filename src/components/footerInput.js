import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Item, Input, Icon, Button } from 'native-base';

export default class FooterInput extends Component {
    render() {
        return (
            <Item rounded style={styles.footer}>
                <Input placeholder='Digite uma mensagem' />
                <Button rounded info>
                    <Icon name='md-send' />
                </Button>
            </Item>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        margin: 5,
        marginRight: 2,
        width: '100%',
        flexDirection: 'row'
    }
})