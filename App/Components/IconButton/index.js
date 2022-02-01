import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
  View
} from 'react-native'
import styles from './style'
import { Colors } from 'Themes/'
class IconButton extends React.PureComponent {
  render() {
    let { onPress, icon, label, loading, width } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={loading}
        style={[styles.button, { width: width }]}>
        {
          loading ? <ActivityIndicator size="small" color={Colors.white} /> :
            <View style={styles.iconcontainer}>
              <Image source={icon} style={[styles.icon]} />
              <Text style={styles.label}>{label}</Text>
            </View>
        }
      </TouchableOpacity>
    )
  }
}

export default IconButton
