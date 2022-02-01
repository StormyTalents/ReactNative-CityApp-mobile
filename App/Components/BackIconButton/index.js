import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
  View
} from 'react-native'
import styles from './style'
import { Colors, Images } from 'Themes/'
class BackIconButton extends React.PureComponent {
  render() {
    let { onPress, icon, label, loading } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={loading}
        style={[styles.button]}>
        <Image source={Images.arrow_left} style={[styles.icon]} />
      </TouchableOpacity>
    )
  }
}

export default BackIconButton
