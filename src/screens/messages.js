import React, { Component } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
import commonStyles from '../commonStyles'

export default class Messages extends Component {
  render() {
    return (
      <SafeAreaView style={styles.background}>
        <ScrollView style={styles.scrollview}>
          <Text style={styles.title}>
            Em construção c=
          </Text>
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
    width: '100%',
  },
  title: {
    color: commonStyles.colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30
  },
  icon: {
    color: commonStyles.colors.white,
    marginLeft: 10
  }
})