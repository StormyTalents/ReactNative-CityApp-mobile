import React from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import styles from './style'

class FAQLabel extends React.PureComponent {
  render() {
    let {  icon, label } = this.props;
    return (
      <View
        style={[styles.button]}>
        <Image source={icon} style={[styles.icon]} />
        <Text style={styles.label}>{label}</Text>
      </View>
    )
  }
}

export default FAQLabel
