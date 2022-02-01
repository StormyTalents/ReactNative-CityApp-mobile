import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native'
import styles from './style'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes'

class NotificationComponentItem extends React.PureComponent {
  render() {
    let { color, state, label, onSyncPress, icon, key1 } = this.props;
    return (
      <TouchableOpacity
        onPress={onSyncPress}
        style={[styles.button, { marginLeft: key1 % 2 !== 0 ? calcWidth(10) : 0, backgroundColor: state ? color : Colors.gray11 }]}>
        <Text style={styles.label}>{label.split(" ")[0]}</Text>
        <Text style={styles.label}>{label.split(" ")[1]}</Text>
        <Image source={icon} style={styles.icon} />
      </TouchableOpacity>
    )
  }
}

export default NotificationComponentItem
