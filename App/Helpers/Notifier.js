import { Notifier, NotifierComponents } from "react-native-notifier";
import { Alert } from 'react-native'
export const showMessage = (message, type) => {
  Notifier.showNotification({
    description: message,
    duration: 4000,
    // showAnimationDuration: 100,
    // showEasing: Easing.linear,
    onHidden: () => console.log('Hidden'),
    onPress: () => console.log('Press'),
    hideOnPress: false,
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: type,
    },
  });
}
export const showPopUpMessage = (message, type) => {
  Alert.alert(
    type,
    message,
    [
      { text: 'OK', onPress: () => console.log('OK Pressed') }
    ],
    { cancelable: false }
  );
}

