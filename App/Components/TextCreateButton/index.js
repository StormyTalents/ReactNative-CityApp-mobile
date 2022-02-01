import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'

class TextCreateButton extends React.PureComponent {
  render() {
    let { cancelPress, createPress, label, label1, style, buttonstyle, title } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={cancelPress}
          style={[styles.button, buttonstyle]}>
          <Text style={[styles.label, style]}>{label}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>
          {title}
        </Text>
        <TouchableOpacity
          onPress={createPress}
          style={[styles.button, buttonstyle]}>
          <Text style={[styles.label, style]}>{label1}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default TextCreateButton
