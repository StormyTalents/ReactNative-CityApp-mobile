import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
} from 'react-native'
import styles from './style'

class ColorTextButton extends React.PureComponent {
  render() {
    let { onPress, label, textstyle, buttonstyle } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, buttonstyle]}>
        <Text style={[styles.label, textstyle]}>{label}</Text>
      </TouchableOpacity>
    )
  }
}

export default ColorTextButton
