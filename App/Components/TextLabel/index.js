import React from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import styles from './style'

class TextButton extends React.PureComponent {
  render() {
    let { label, style, buttonstyle,textstyle } = this.props;
    return (
      <View
        style={[styles.button, buttonstyle]}>
        <Text style={[styles.label, textstyle]}>{label}</Text>
      </View>
    )
  }
}

export default TextButton
