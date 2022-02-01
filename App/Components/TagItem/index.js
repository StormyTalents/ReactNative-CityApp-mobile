import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'

class TagItem extends React.PureComponent {
  render() {
    let { onPress, icon, label, selected, color } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button]}>
        <View style={styles.leftitem}>
          <Image source={Images.category_item} style={[styles.image, { tintColor: color }]} />
          <Text style={styles.label}>{label}</Text>
        </View>
        <Image source={icon} style={[styles.icon,
        { opacity: selected ? 1 : 0 }
        ]} />
      </TouchableOpacity>
    )
  }
}

export default TagItem
