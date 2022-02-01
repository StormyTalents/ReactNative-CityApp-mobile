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
const maxlimit = 40;

class LocationItemButton extends React.PureComponent {
  render() {
    let { onPress, selected, name, icon } = this.props;
    return (
      <View
        style={[styles.container]}>
        <View style={styles.leftitem}>
          <Image source={Images.map_pin2} style={[styles.avatar]} />
          <Text style={styles.name}>
            {((name).length > maxlimit) ?
              (((name).substring(0, maxlimit - 3)) + '...') :
              name}
          </Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.buttontext}>
            {Languages.Add}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default LocationItemButton
