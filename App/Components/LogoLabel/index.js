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
class LogoLabel extends React.PureComponent {
  render() {
    let { onPress, icon, label, loading } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={Images.smallLogo} />
      </View>
    )
  }
}

export default LogoLabel
