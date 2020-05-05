import React, { Component } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Button, Text, Icon } from 'native-base';
import MessagesInput from '../components/messagesInput'
import FooterTabs from '../components/footerTabs'

export default class Messages extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.background}>
        <ScrollView style={styles.scrollview}>
          <MessagesInput navigate={navigation} />
          <MessagesInput navigate={navigation} />
          <MessagesInput navigate={navigation} />
          <MessagesInput navigate={navigation} />
          <MessagesInput navigate={navigation} />
          <MessagesInput navigate={navigation} />
          <MessagesInput navigate={navigation} />
          <MessagesInput navigate={navigation} />
          <MessagesInput navigate={navigation} />
        </ScrollView>
        <Button rounded info style={styles.button} onPress={() => this.props.navigation.navigate('searchContacts')}>
          <Icon name='add' />
        </Button>
        <FooterTabs navigate={navigation} />
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
    width: '100%',
  },
  button: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 10,
    marginBottom: 75,
    width: '13%'
  }
})