/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import {AppRegistry} from 'react-native';
import Index from './App/NativeBase';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => Index);
Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
      }
    }
  });
});
