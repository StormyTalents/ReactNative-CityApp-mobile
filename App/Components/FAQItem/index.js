import React from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import styles from './style'

class FAQItem extends React.PureComponent {
  render() {
    let { icon, text, onPress } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Image source={icon} style={styles.icon} />
      </TouchableOpacity>
    )
  }
}

export default FAQItem
