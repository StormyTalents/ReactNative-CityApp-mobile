import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
} from 'react-native'
import styles from './style'

class BlueButton extends React.PureComponent {
  render() {
    let { onPress, icon, label } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button]}>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    )
  }
}

export default BlueButton
