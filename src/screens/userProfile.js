import React, { Component } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Profile from '../components/userProfileInput'
import commonStyles from '../commonStyles'
import HeaderTabs from '../components/headerTabs'

export default class userProfile extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.background}>
        <HeaderTabs name={'Perfil'} navigate={navigation} />
        <ScrollView style={styles.scrollview}>
          <Profile />
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
  icon: {
    color: commonStyles.colors.white,
    marginLeft: 10
  }
})