import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  TextInput
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'

class GuestItem extends React.PureComponent {
  render() {
    let { onPress, selected, avatar, name, email, icon } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button]}>
        <View style={styles.leftitem}>
          <Image source={avatar} style={[styles.avatar]} />
          <View style={styles.rightitem}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
        </View>
        <View style={[styles.iconitem, { opacity: selected ? 1 : 0 }]}>
          <Image source={icon} style={[styles.icon]} />
        </View>
      </TouchableOpacity>
    )
  }
}

export default GuestItem
