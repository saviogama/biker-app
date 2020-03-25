import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import commonStyles from '../commonStyles'

const list = [
  {
    title: 'Iniciante',
    subtitle: 'Nível'
  },
  {
    title: '81 9 9999-9999',
    subtitle: 'Telefone'
  },
  {
    title: 'Caruaru',
    subtitle: 'Cidade'
  },
  {
    title: 'PDU-0101',
    subtitle: 'Placa'
  },
  {
    title: 'Yamaha Neo 125',
    subtitle: 'Modelo'
  }
]

export default class userConfig extends Component {
    render() {
        return (
            <View style={styles.background}>
                <View style={styles.profile}>
                    <Avatar size= 'large' rounded icon={{name: 'user', color: 'black', type: 'font-awesome'}}/>
                    <Text style={styles.userName}>
                        John Wick
                    </Text>
                </View>
                <View >
                {
                    list.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.title}
                        subtitle={item.subtitle}
                        leftIcon={{ name: item.icon }}
                        bottomDivider
                        chevron
                    />
                    ))
                }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  background:{
      flex: 1,
      width: '100%'
  },
  profile:{
    marginTop: 15,
    marginRight: 50,
    marginLeft: 50,
    marginBottom: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  userName:{
    color: commonStyles.colors.black,
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
