import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import { StatusBar,Permission,Platform } from 'react-native'
import ConfigureStore from "./Config/ConfigureStore";
import messaging from '@react-native-firebase/messaging';

const store = ConfigureStore();

export default class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <StatusBar translucent backgroundColor="transparent" />
        <RootContainer />
      </Provider>
    )
  }
}
