import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'

class LabelIconImageButton extends React.PureComponent {
  render() {
    let { onPress, icon, label, lefticon, color } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button]}>
        <View style={styles.leftcontent}>
          <Image source={icon} style={[styles.icon]} />
          {
            color ? <Image source={Images.category_item} style={[styles.image, { tintColor: color }]} /> :
              <Text style={styles.label}>{label}</Text>
          }
        </View>
        <Image source={lefticon} style={[styles.lefticon]} />
      </TouchableOpacity>
    )
  }
}

export default LabelIconImageButton
