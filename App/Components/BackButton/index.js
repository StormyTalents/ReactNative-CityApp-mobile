import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
} from 'react-native'
import styles from './style'

class BackButton extends React.PureComponent {
  render() {
    let { onPress, icon, label } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button]}>
        <Image source={icon} style={[styles.icon]} />
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    )
  }
}

export default BackButton
