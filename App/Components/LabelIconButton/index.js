import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native'
import styles from './style'

class LabelIconButton extends React.PureComponent {
  render() {
    let { onPress, icon, label, lefticon } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button]}>
        <View style={styles.leftcontent}>
          <Image source={icon} style={[styles.icon]} />
          <Text style={styles.label}>{label}</Text>
        </View>
        <Image source={lefticon} style={[styles.lefticon]} />
      </TouchableOpacity>
    )
  }
}

export default LabelIconButton
