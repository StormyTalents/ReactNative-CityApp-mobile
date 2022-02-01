import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
} from 'react-native'
import styles from './style'

class TextButton extends React.PureComponent {
  render() {
    let { onPress, label, style, buttonstyle } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, buttonstyle]}>
        <Text style={[styles.label, style]}>{label}</Text>
      </TouchableOpacity>
    )
  }
}

export default TextButton
