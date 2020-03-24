import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems, DrawerActions } from 'react-navigation-drawer';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler'
import Main from './screens/main';
import Auth from './screens/auth';
import userRegister from './screens/userRegister';
import motoclubeRegister from './screens/motoclubeRegister';
import newNotification from './screens/newNotification';
import newEvent from './screens/newEvent';
import userHome from './screens/userHome';
import userConfig from './screens/userConfig';
import commonStyles from './commonStyles';

const DrawerContent = (props) => (
  <View>
    <View
      style={{
        backgroundColor: '#009FEF',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 30 }}>
        BikerApp
      </Text>
    </View>
    <DrawerItems {...props} />
  </View>
)

const menuScreens = {
  userHome:{
    name: 'userHome',
    screen: userHome,
    navigationOptions:{
      title: 'Home',
      drawerIcon: (<Icon name="home" size={20} />)
    }
  },
  /*
  Notification:{
    name: 'newNotification',
    screen: newNotification,
    navigationOptions:{
      title: 'Notificações',
      drawerIcon: (<Icon name="bell" size={20} />)
    }
  },
  Mensages:{
    navigationOptions:{
      title: 'Mensagens',
      drawerIcon: (<Icon name="envelope" size={20} />)
    }
  },
  Financial:{
    navigationOptions:{
      title: 'Financeiro',
      drawerIcon: (<Icon name="coins" size={20} />)
    }
  },
  */
  Config:{
    name: 'userConfig',
    screen: userConfig,
    navigationOptions:{
      title: 'Configurações',
      drawerIcon: (<Icon name="cog" size={20} />)
    }
  },
  /*
  Profile:{
    navigationOptions:{
      title: 'Perfil',
      drawerIcon: (<Icon name="user" size={20} />)
    }
  }
  */
}

const menuRoutes = createDrawerNavigator(menuScreens, {
  contentComponent: DrawerContent
});

const mainScreens = {
    Main:{
        name: 'Main',
        screen: Main,
        navigationOptions: {
            headerShown: false
        }
    },
    Auth: {
        name: 'Auth',
        screen: Auth,
        navigationOptions: {
            headerShown: false
        }
    },
    userRegister: {
        name: 'userRegister',
        screen: userRegister,
        navigationOptions: {
            title: 'Registre-se',
            headerTintColor: commonStyles.colors.white,
            headerStyle: {
              backgroundColor: commonStyles.colors.blue,
            },
            headerTitleStyle: {
              fontSize: 18,
              color: commonStyles.colors.white
            },
        }
    },
    motoclubeRegister: {
        name: 'motoclubeRegister',
        screen: motoclubeRegister,
        navigationOptions: {
            title: 'Cadastro',
            headerTintColor: commonStyles.colors.white,
            headerStyle: {
              backgroundColor: commonStyles.colors.blue,
            },
            headerTitleStyle: {
              fontSize: 18,
              color: commonStyles.colors.white
            },
        }
    },
    userHome: {
      name: 'userHome',
      screen: menuRoutes,
      navigationOptions: {
          headerShown: false
      }
    },
    newNotification: {
        name: 'newNotification',
        screen: newNotification,
        navigationOptions: {
            title: 'Escrever Notificação',
            headerTintColor: commonStyles.colors.white,
            headerStyle: {
              backgroundColor: commonStyles.colors.blue,
            },
            headerTitleStyle: {
              fontSize: 18,
              color: commonStyles.colors.white
            },
        }
    },
    newEvent: {
        name: 'newEvent',
        screen: newEvent,
        navigationOptions: {
            title: 'Novo Evento',
            headerTintColor: commonStyles.colors.white,
            headerStyle: {
              backgroundColor: commonStyles.colors.blue,
            },
            headerTitleStyle: {
              fontSize: 18,
              color: commonStyles.colors.white
            },
        }
    },
    userConfig: {
      name: 'userConfig',
      screen: userConfig,
      navigationOptions: {
          title: 'Configurações',
          headerTintColor: commonStyles.colors.white,
          headerStyle: {
            backgroundColor: commonStyles.colors.blue,
          },
          headerTitleStyle: {
            fontSize: 18,
            color: commonStyles.colors.white
          },
      }
    }
};

const mainRoutes = createStackNavigator(mainScreens, {
  initialRouteName: 'Main'
});

export default createAppContainer(mainRoutes);