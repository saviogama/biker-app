import 'expo/build/Expo.fx';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { activateKeepAwake } from 'expo-keep-awake';

import Routes from './src/routes';
import Main from './src/screens/main';
import { AppRegistry } from 'react-native';


if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(Main);