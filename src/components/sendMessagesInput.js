import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Body, Text } from 'native-base';

export default class SendMessagesInput extends Component {
  render() {
    return (
          <Card style={styles.messages}>
            <CardItem style={styles.color}>
              <Body>
                <Text>
                   Oi, bem e vc?
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
        alignSelf: 'flex-end'
    },
    color: {
        backgroundColor: '#009FEF80',
    }
  })