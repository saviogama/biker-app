import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import 'react-native-gesture-handler'
import Main from './screens/main';
import Auth from './screens/auth';
import userRegister from './screens/userRegister';
import motoclubeRegister from './screens/motoclubeRegister';
import newNotification from './screens/newNotification';
import newEvent from './screens/newEvent';
import userHome from './screens/userHome';

/*
const Drawer = createDrawerNavigator();

function menuRoutes() {
  return (
    <Drawer.Navigator initialRouteName="userHome">
      <Drawer.Screen
        name="userHome"
        component={userHome}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="newEvent"
        component={newEvent}
        options={{ drawerLabel: 'Novo evento' }}
      />
      <Drawer.Screen
        name="newNotification"
        component={newNotification}
        options={{ drawerLabel: 'Nova notificação' }}
      />
    </Drawer.Navigator>
  );
}
*/

const menuScreens = {
  userHome:{
    name: 'userHome',
    screen: userHome,
    navigationOptions:{
      title: 'Home'
    }
  },
  Events:{
    name: 'newEvent',
    screen: newEvent,
    navigationOptions:{
      title: 'Novo Evento'
    }
  },
  Notification:{
    name: 'newNotification',
    screen: newNotification,
    navigationOptions:{
      title: 'Nova Notificação'
    }
  }
}

const menuRoutes = createDrawerNavigator(menuScreens);

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
            title: 'Escrever notificação'
        }
    },
    newEvent: {
        name: 'newEvent',
        screen: newEvent,
        navigationOptions: {
            title: 'Escrever notificação'
        }
    }
};

const mainRoutes = createStackNavigator(mainScreens, {
  initialRouteName: 'Main'
});

export default createAppContainer(mainRoutes);