import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  ActivityIndicator,
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'

class UploadThreeImageButton extends React.PureComponent {
  render() {
    let { onPress, icon, label, loading } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button]}>
        <View style={styles.iconitem}>
          {
            loading ? <ActivityIndicator size={'small'} color={Colors.primary} /> : <Image source={icon} style={[styles.icon]} />
          }
        </View>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    )
  }
}

export default UploadThreeImageButton
