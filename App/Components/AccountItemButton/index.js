import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native'
import styles from './style'

class AccountItemButton extends React.PureComponent {
  render() {
    let { onPress, icon, label, icon1 } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button]}>
        <View style={styles.leftcontent}>
          <Image source={icon} style={[styles.icon]} />
          <Text style={styles.label}>{label}</Text>
        </View>
        <Image source={icon1} style={[styles.icon1]} />
      </TouchableOpacity>
    )
  }
}

export default AccountItemButton
