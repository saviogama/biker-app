import 'expo/build/Expo.fx';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { activateKeepAwake } from 'expo-keep-awake';

import Routes from './src/routes';
import Teste from './src/screens/newEvent';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(Teste);