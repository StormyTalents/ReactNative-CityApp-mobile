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
class BackIconLogoButton extends React.PureComponent {
  render() {
    let { onPress, icon, label, loading } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onPress}
          disabled={loading}
          style={[styles.button]}>
          <Image source={Images.arrow_left} style={[styles.icon]} />
        </TouchableOpacity>
        <Image style={styles.image} source={Images.smallLogo} />
        <View
          style={[styles.button]}>
        </View>
      </View>
    )
  }
}

export default BackIconLogoButton
