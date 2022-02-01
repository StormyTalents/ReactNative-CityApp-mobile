import NetInfo from '@react-native-community/netinfo';
import {problems} from '../Service/Api';
import {Notifier, NotifierComponents} from "react-native-notifier";
import {Alert} from "react-native";

export const isResponseValid = (response) => {
  return response.ok && response.status >= 200 && response.status < 400;
};

export async function onApiError(response) {
  let connectionInfo = {};
  try {
    connectionInfo = NetInfo.useNetInfo();
  } catch (e) {
    connectionInfo = {};
  }

  if (
    problems.NETWORK_ERROR === response.problem &&
    connectionInfo.type !== 'wifi' &&
    connectionInfo.type !== 'cellular'
  ) {
    // no internet
    Alert.alert('Error', 'Network error');
  } 
  else if (response.data.message) {
    // show error toast
    const errorMessages = Object.values(response.data.error).join("\n");
    Alert.alert('Error', errorMessages);
  }
}