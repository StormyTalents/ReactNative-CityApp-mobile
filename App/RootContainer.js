import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import AppNavigation from './Navigation/AppNavigation'
import NavigationService from 'Navigation/NavigationService'
import styles from './Containers/Styles/RootContainerStyles'
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-community/async-storage';

export default class RootContainer extends Component {
  componentDidMount(){
    this.checkPermission();
  }

  requestUserPermission = async () => {
    const authorizationStatus = await messaging().requestPermission();
    if (authorizationStatus) {
      console.log('Permission status:', authorizationStatus);
    }
  }

  async checkPermission() {
    const enabled = await messaging().hasPermission();
    // If Premission granted proceed towards token fetch
    if (enabled) {
      this.getToken();
    } else {
      // If permission hasn’t been granted to our app, request user in requestPermission method. 
      this.requestPermission();
    }
  }

  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log('token from local', fcmToken);
    if (!fcmToken) {
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem('fcmToken', fcmToken);
        console.log('token from firebase', fcmToken);
      }
    }
  }

  async requestPermission() {
    try {
      await messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }
  
  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <AppNavigation ref={
          navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }} />
      </View>
    )
  }
}