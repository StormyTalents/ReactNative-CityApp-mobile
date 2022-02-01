import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native'
import styles from './style'
import { Images, Languages, ConvertSize, Colors } from 'Themes'

class BlueIconButton extends React.PureComponent {
  render() {
    let { onPress, icon, label, loading } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button]}>
        <Image source={icon} style={styles.icon} />
        {
          loading ? <ActivityIndicator style={styles.loading} size={'small'} color={Colors.lightblue} /> : <Text style={styles.label}>{label}</Text>
        }
      </TouchableOpacity>
    )
  }
}

export default BlueIconButton
