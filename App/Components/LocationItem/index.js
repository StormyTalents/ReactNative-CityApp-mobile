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

class LocationItem extends React.PureComponent {
  render() {
    let { onPress, selected, name, icon } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button]}>
        <View style={styles.leftitem}>
          <Image source={Images.map_pin2} style={[styles.avatar]} />
          <Text style={styles.name}>{name}</Text>
        </View>
        <Image source={icon} style={[styles.icon, { opacity: selected ? 1 : 0 }]} />
      </TouchableOpacity>
    )
  }
}

export default LocationItem
