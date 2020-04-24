import React, { Component } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Card from '../components/financialInput'
import commonStyles from '../commonStyles'
import HeaderTabs from '../components/headerTabs'
import FooterTabs from '../components/footerTabs'

export default class Financial extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.background}>
        <HeaderTabs name={'Financeiro'} navigate={navigation} />
        <ScrollView style={styles.scrollview}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
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
  icon: {
    color: commonStyles.colors.white,
    marginLeft: 10
  }
})
