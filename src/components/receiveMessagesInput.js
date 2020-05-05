import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Body, Text } from 'native-base';

export default class ReceiveMessagesInput extends Component {
  render() {
    return (
          <Card style={styles.messages}>
            <CardItem style={styles.color}>
              <Body>
                <Text>
                   Olá, tudo bem?
                </Text>
              </Body>
            </CardItem>
          </Card>
    );
  }
}

const styles = StyleSheet.create({
    messages:{
        width: '80%',
        alignSelf: 'flex-start'
    },
    color: {
        backgroundColor: '#99999980',
    }
  })