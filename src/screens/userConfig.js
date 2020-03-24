import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import { ListItem, Header } from 'react-native-elements'
import commonStyles from '../commonStyles'

const list = [
  {
    title: 'Permitir publicações externas',
  },
  {
    title: 'Convidar Membros',
  },
  {
    title: 'FAQ',
  },
  {
    title: 'Política de privacidade',
  },
  {
    title: 'Sobre o aplicativo',
  },
  {
    title: 'Avaliar o aplicativo',
  },
  {
    title: 'Cancelar minha conta',
  },
  {
    title: 'Encerrar sessão',
  },
]

export default class userConfig extends Component {
    render() {
        return (
          <SafeAreaView style={styles.background}>
            <Header
              centerComponent={{ text: 'Configurações', style: { color: commonStyles.colors.white, fontSize: 18, fontWeight: 'bold' } }}
              containerStyle={{
                backgroundColor: commonStyles.colors.darkGray,
                justifyContent: 'space-around',
              }}
            />
            <ScrollView style={styles.scrollview}>
              <View style={styles.background}>
                {
                  list.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.title}
                        leftIcon={{ name: item.icon }}
                        bottomDivider
                        chevron
                    />
                  ))
                }
              </View>
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
