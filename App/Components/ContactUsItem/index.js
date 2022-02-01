import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native'
import styles from './style'

class ContactUsItem extends React.PureComponent {
  render() {
    let { onPress, icon, label, text, icon1 } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button]}>
        <View style={styles.iconitem}>
          <Image source={icon} style={[styles.icon]} />
        </View>
        <View style={styles.rightitem}>
          <Text style={styles.label}>{label}</Text>
          <View style={styles.bottomitem}>
            <Text style={styles.text}>{text}</Text>
            <Image source={icon1} style={[styles.icon1]} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default ContactUsItem
