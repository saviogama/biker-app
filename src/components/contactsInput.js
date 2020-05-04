import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Text, Right } from "native-base";
import { Avatar, Badge } from 'react-native-elements';

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
        <Card style={styles.button}>
            <CardItem>
                <Avatar rounded size='medium' icon={{ name: 'user', color: 'black', type: 'font-awesome' }} />
                <Text style={styles.text}>John Wick</Text>
                <Right>
                    <Text>Cruz-vazada</Text>
                </Right>
            </CardItem>
        </Card>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 15
    },
    text: {
        marginLeft: 10
    }
})