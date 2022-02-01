import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import App from './App/App'
import messaging from '@react-native-firebase/messaging';
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});
AppRegistry.registerComponent('CitiApp0630', () => App)
