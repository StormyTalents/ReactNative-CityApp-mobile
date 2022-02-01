import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'

class TextBackButton extends React.PureComponent {
  render() {
    let { onPress, label, style, buttonstyle, title } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onPress}
          style={[styles.button, buttonstyle]}>
          <Text style={[styles.label, style]}>{label}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text></Text>
      </View>
    )
  }
}

export default TextBackButton
