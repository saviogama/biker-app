import React, { Component } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements'
import Profile from '../components/userProfileInput'
import commonStyles from '../commonStyles'

export default class userProfile extends Component {
    render() {
        return (
          <SafeAreaView style={styles.background}>
            <Header
              centerComponent={{ text: 'Perfil', style: { color: commonStyles.colors.white, fontSize: 18, fontWeight: 'bold' } }}
              containerStyle={{
              backgroundColor: commonStyles.colors.darkGray,
              justifyContent: 'space-around',
              }}
            />
            <ScrollView style={styles.scrollview}>
              <Profile />
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
  }
})