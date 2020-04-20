import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerItems, DrawerActions } from 'react-navigation-drawer';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import 'react-native-gesture-handler'
import Main from './screens/main';
import Auth from './screens/auth';
import Code from './screens/code';
import userRegister from './screens/userRegister';
import motoclubeRegister from './screens/motoclubeRegister';
import newNotification from './screens/newNotification';
import newEvent from './screens/newEvent';
import userHome from './screens/userHome';
import userConfig from './screens/userConfig';
import eventData from './screens/eventData';
import eventDataDetails from './screens/eventDataDetails';
import Financial from './screens/financial';
import Events from './screens/events';
import Notifications from './screens/notifications';
import Messages from './screens/messages';
import userProfile from './screens/userProfile';
import Feed from './screens/feed';
import commonStyles from './commonStyles';

/*
const menuScreensTab = {
  Feed: {
    screen: Feed,
    navigationOptions:{
      tabBarIcon: ({tintColor}) => <Icon name="home" size={20} color={tintColor}/>}
  },
  Notificações: {
    screen: Notifications,
    navigationOptions:{
      tabBarIcon: ({tintColor}) => <Icon name="bell" size={20} color={tintColor}/>}
  },
  Mensagens:{
    screen: Messages,
    navigationOptions:{
      tabBarIcon: ({tintColor}) => <Icon name="envelope" size={20} color={tintColor}/>}
  }
}

createBottomTabNavigator(menuScreensTab, {
      initialRouteName: 'Feed',
      activeTintColor: commonStyles.colors.blue,
      inactiveTintColor: commonStyles.colors.gray,
      tabBarOptions:{ style: { backgroundColor: commonStyles.colors.darkGray} }
    }),
*/

const DrawerContent = (props) => (
  <View>
    <View
      style={{
        backgroundColor: '#454545',
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

const menuScreensDrawer = {
  Home:{
    name: 'Feed',
    screen: Feed,
    navigationOptions:{
      title: 'Feed',
      drawerIcon: (<Icon name="home" size={20}/>)
    }
  },
  userHome:{
    name: 'userHome',
    screen: userHome,
    navigationOptions:{
      title: 'Painel de Controle',
      drawerIcon: (<Icon name="tasks" size={20} />)
    }
  },
  Events:{
    name: 'Events',
    screen: Events,
    navigationOptions:{
      title: 'Eventos',
      drawerIcon: (<Icon name="calendar" size={20} />)
    }
  },
  Financial:{
    name: 'Financial',
    screen: Financial,
    navigationOptions:{
      title: 'Financeiro',
      drawerIcon: (<Icon name="coins" size={20} />)
    }
  },
  Config:{
    name: 'userConfig',
    screen: userConfig,
    navigationOptions:{
      title: 'Configurações',
      drawerIcon: (<Icon name="cog" size={20} />)
    }
  },
  userProfile:{
    name: 'userProfile',
    screen: userProfile,
    navigationOptions:{
      title: 'Perfil',
      drawerIcon: (<Icon name="user" size={20} />)
    }
  }
}

const menuRoutesDrawer = createDrawerNavigator(menuScreensDrawer, {
  initialRouteName: 'Home',
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
    Code: {
      name: 'Code',
      screen: Code,
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
              backgroundColor: commonStyles.colors.darkGray,
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
              backgroundColor: commonStyles.colors.darkGray,
            },
            headerTitleStyle: {
              fontSize: 18,
              color: commonStyles.colors.white
            },
        }
    },
    userHome: {
      name: 'userHome',
      screen: userHome,
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
              backgroundColor: commonStyles.colors.darkGray,
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
              backgroundColor: commonStyles.colors.darkGray,
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
            backgroundColor: commonStyles.colors.darkGray,
          },
          headerTitleStyle: {
            fontSize: 18,
            color: commonStyles.colors.white
          },
      }
    },
    eventData: {
      name: 'eventData',
      screen: eventData,
      navigationOptions: {
          title: 'Acompanhar Eventos',
          headerTintColor: commonStyles.colors.white,
          headerStyle: {
            backgroundColor: commonStyles.colors.darkGray,
          },
          headerTitleStyle: {
            fontSize: 18,
            color: commonStyles.colors.white
          },
      }
    },
    eventDataDetails: {
      name: 'eventDataDetails',
      screen: eventDataDetails,
      navigationOptions: {
          title: 'Detalhes',
          headerTintColor: commonStyles.colors.white,
          headerStyle: {
            backgroundColor: commonStyles.colors.darkGray,
          },
          headerTitleStyle: {
            fontSize: 18,
            color: commonStyles.colors.white
          },
      }
    },
    Financial: {
      name: 'Financial',
      screen: Financial,
      navigationOptions: {
          title: 'Financeiro',
          headerTintColor: commonStyles.colors.white,
          headerStyle: {
            backgroundColor: commonStyles.colors.darkGray,
          },
          headerTitleStyle: {
            fontSize: 18,
            color: commonStyles.colors.white
          },
      }
    },
    Events: {
      name: 'Events',
      screen: Events,
      navigationOptions: {
          title: 'Eventos',
          headerTintColor: commonStyles.colors.white,
          headerStyle: {
            backgroundColor: commonStyles.colors.darkGray,
          },
          headerTitleStyle: {
            fontSize: 18,
            color: commonStyles.colors.white
          },
      }
    },
    Notifications: {
      name: 'Notifications',
      screen: Notifications,
      navigationOptions: {
          title: 'Notificações',
          headerTintColor: commonStyles.colors.white,
          headerStyle: {
            backgroundColor: commonStyles.colors.darkGray,
          },
          headerTitleStyle: {
            fontSize: 18,
            color: commonStyles.colors.white
          },
      }
    },
    Messages: {
      name: 'Messages',
      screen: Messages,
      navigationOptions: {
          title: 'Mensagens',
          headerTintColor: commonStyles.colors.white,
          headerStyle: {
            backgroundColor: commonStyles.colors.darkGray,
          },
          headerTitleStyle: {
            fontSize: 18,
            color: commonStyles.colors.white
          },
      }
    },
    userProfile: {
      name: 'userProfile',
      screen: userProfile,
      navigationOptions: {
          title: 'Perfil',
          headerTintColor: commonStyles.colors.white,
          headerStyle: {
            backgroundColor: commonStyles.colors.darkGray,
          },
          headerTitleStyle: {
            fontSize: 18,
            color: commonStyles.colors.white
          },
      }
    },
    Feed: {
      name: 'Feed',
      screen: menuRoutesDrawer,
      navigationOptions: {
        headerShown: false
      }
    }
};

const mainRoutes = createStackNavigator(mainScreens, {
  initialRouteName: 'Main'
});

export default createAppContainer(mainRoutes);