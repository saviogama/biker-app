import React, { Component } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import ReceiveMessagesInput from '../components/receiveMessagesInput'
import SendMessagesInput from '../components/sendMessagesInput'
import FooterInput from '../components/footerInput'

export default class Messages extends Component {
  render() {
    return (
      <SafeAreaView style={styles.background}>
        <ScrollView style={styles.scrollview}>
          <ReceiveMessagesInput/>
          <SendMessagesInput/>
          <ReceiveMessagesInput/>
          <ReceiveMessagesInput/>
          <ReceiveMessagesInput/>
          <SendMessagesInput/>
          <SendMessagesInput/>
          <ReceiveMessagesInput/>
          <ReceiveMessagesInput/>
          <ReceiveMessagesInput/>
          <ReceiveMessagesInput/>
          <SendMessagesInput/>
        </ScrollView>
        <FooterInput/>
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
  }
})