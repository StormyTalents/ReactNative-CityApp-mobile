import React from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import styles from './style'
import { Metrics, ApplicationStyles, Colors, Languages } from '../../Themes/'
class OrLabel extends React.PureComponent {
  render() {
    let { label, style, buttonstyle } = this.props;
    return (
      <View
        style={[styles.button, buttonstyle]}>
        <View style={styles.topcontent}>
          <View style={styles.grayline}></View>
          <Text style={[styles.label, style]}>{Languages.Or}</Text>
          <View style={styles.grayline}></View>
        </View>
        <Text style={[styles.text, style]}>{Languages.Login_with_BankID_if_you_______}</Text>
      </View>
    )
  }
}

export default OrLabel
