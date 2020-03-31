import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements'
import commonStyles from '../commonStyles'

export default class Messages extends Component {
    render() {
        return (
          <SafeAreaView style={styles.background}>
            <Header
              centerComponent={{ text: 'Mensagens', style: { color: commonStyles.colors.white, fontSize: 18, fontWeight: 'bold' } }}
              containerStyle={{
              backgroundColor: commonStyles.colors.darkGray,
              justifyContent: 'space-around',
              }}
            />
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
  background:{
      flex: 1,
      width: '100%'
  },
  scrollview:{
    width: '100%',
  },
  title:{
    color: commonStyles.colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30
  }
})