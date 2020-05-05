import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { Badge } from 'react-native-elements';

const theme = {
    Button: {
        titleStyle: {
            color: 'black',
            fontSize: 12
        },
    },
};

export default class MessagesInput extends Component {
    render() {
        return (
            <ListItem avatar onPress={() => this.props.navigate.navigate('userMessages')}>
                <Left>
                    <Thumbnail source={{ uri: 'https://jpimg.com.br/uploads/2019/05/john-wick-1024x576.jpg' }} />
                    <Badge
                        value="3" status="primary"
                        containerStyle={{ position: 'absolute', top: 12, left: 1 }}
                    />
                </Left>
                <Body>
                    <Text>John Wick</Text>
                    <Text note style={styles.text}>Você possui novas mensagens</Text>
                </Body>
                <Right>
                    <Text note>09:09</Text>
                </Right>
            </ListItem>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 15
    },
    text: {
        marginBottom: 10
    }
})