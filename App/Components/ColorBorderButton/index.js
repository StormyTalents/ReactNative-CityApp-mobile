import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
} from 'react-native'
import styles from './style'

class ColorBorderButton extends React.PureComponent {
  render() {
    let { onPress, label, textstyle, buttonstyle, width } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, buttonstyle, { width: width }]}>
        <Text style={[styles.label, textstyle]}>{label}</Text>
      </TouchableOpacity>
    )
  }
}

export default ColorBorderButton
