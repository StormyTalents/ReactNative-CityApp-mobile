import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native'
import styles from './style'
import Switch from 'react-native-switch-pro'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes/'

class NotificationItemButton extends React.PureComponent {
  render() {
    let { onPress, state, label,onSyncPress } = this.props;
    return (
      <TouchableOpacity
        onPress={onSyncPress}
        style={[styles.button]}>
        <Text style={styles.label}>{label}</Text>
        <Switch
          style={styles.switch}
          width={calcWidth(51)}
          height={calcHeight(31)}
          value={state}
          circleColorActive={Colors.Green05}
          circleStyle={{ height: calcHeight(27), width: calcHeight(27) }}
          circleColorInactive={Colors.Gray14}
          backgroundActive={Colors.White}
          backgroundInactive={Colors.White}
          onSyncPress={onSyncPress}
        />
      </TouchableOpacity>
    )
  }
}

export default NotificationItemButton
