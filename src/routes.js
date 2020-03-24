import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
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
  Configs:{
    navigationOptions:{
      title: 'Configurações',
      drawerIcon: (<Icon name="cog" size={20} />)
    }
  },
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
            title: 'Registre-se'
        }
    },
    motoclubeRegister: {
        name: 'motoclubeRegister',
        screen: motoclubeRegister,
        navigationOptions: {
            title: 'Cadastro'
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
            title: 'Escrever Notificação'
        }
    },
    newEvent: {
        name: 'newEvent',
        screen: newEvent,
        navigationOptions: {
            title: 'Novo Evento'
        }
    }
};

const mainRoutes = createStackNavigator(mainScreens, {
  initialRouteName: 'Main'
});

export default createAppContainer(mainRoutes);