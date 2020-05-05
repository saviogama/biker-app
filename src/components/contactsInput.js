import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Text, Right, Thumbnail } from "native-base";
import { Badge } from 'react-native-elements';

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
                <Thumbnail source={{ uri: 'https://jpimg.com.br/uploads/2019/05/john-wick-1024x576.jpg' }} />
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