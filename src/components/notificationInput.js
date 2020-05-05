import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Thumbnail } from 'native-base';
import { Card } from 'react-native-elements';
import commonStyles from '../commonStyles'

const theme = {
    Button: {
      titleStyle: {
        color: 'black',
        fontSize: 10
      },
    },
};

export default props => {
    return (
        <Card
            containerStyle={{backgroundColor: commonStyles.colors.blue, marginBottom: 3}}
            >
            <View style={styles.button}>
                <Thumbnail source={{ uri: 'https://jpimg.com.br/uploads/2019/05/john-wick-1024x576.jpg' }} />
                <Text style={styles.text}>
                    John Wick
                </Text>
                <Text style={{color: commonStyles.colors.white, fontSize: 12}}>1h ago</Text>
            </View>
            <View style={styles.button}>
                <Text style={{color: commonStyles.colors.white}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    button:{
        marginRight: 10,
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    text:{
        fontSize: 15,
        paddingHorizontal: 10,
        marginRight: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        color: commonStyles.colors.white
    }
})