import React, { Component } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { List, ListItem, Text, Left, Right, Icon } from 'native-base';
import ContactsInput from '../components/contactsInput'

export default class eventDataDetails extends Component {
    render() {
        return (
            <SafeAreaView style={styles.background}>
                <ScrollView style={styles.scrollview}>
                    <List>
                        <ListItem>
                            <Left>
                                <Text>Confirmados</Text>
                            </Left>
                            <Right>
                                <Icon name="md-checkmark" />
                            </Right>
                        </ListItem>
                        <ContactsInput />
                        <ContactsInput />
                        <ListItem>
                            <Left>
                                <Text>Não Confirmados</Text>
                            </Left>
                            <Right>
                                <Icon name="md-close" />
                            </Right>
                        </ListItem>
                        <ContactsInput />
                        <ContactsInput />
                        <ContactsInput />
                        <ContactsInput />
                    </List>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%'
    },
    scrollview: {
        width: '100%'
    }
})