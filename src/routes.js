import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Main from './screens/main';
import Auth from './screens/auth';
import userRegister from './screens/userRegister';
import motoclubeRegister from './screens/motoclubeRegister';
import newNotification from './screens/newNotification';
import newEvent from './screens/newEvent';

const screens = {
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

const Routes = createStackNavigator(screens, {
    initialRouteName: 'Auth'
});


export default createAppContainer(Routes);