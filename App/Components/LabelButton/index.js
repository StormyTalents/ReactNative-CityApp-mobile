import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
} from 'react-native'
import styles from './style'

class LabelButton extends React.PureComponent {
  render() {
    let { onPress, icon, label } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button]}>
        <Image source={icon} style={[styles.icon]} />
        <Text style={styles.label}>{label}</Text>
        <Image style={[styles.icon]} />
      </TouchableOpacity>
    )
  }
}

export default LabelButton
