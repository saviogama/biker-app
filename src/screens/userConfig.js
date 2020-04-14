import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
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
              leftComponent={<Icon name='bars' size={21} style={styles.icon} onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer()) } />}
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
  },
  icon: {
    color: commonStyles.colors.white,
    marginLeft: 10
}
})
