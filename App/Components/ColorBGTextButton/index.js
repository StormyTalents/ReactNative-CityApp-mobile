import React from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
} from 'react-native'
import styles from './style'
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes'

class ColorBGTextButton extends React.PureComponent {
  render() {
    let { onPress, label, textstyle, buttonstyle, opacity, loading } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={opacity}
        style={[styles.button, buttonstyle, { opacity: opacity ? 0.6 : 1 }]}>
        {
          loading ? <ActivityIndicator size="small" color={Colors.white} /> :
            <View style={styles.iconcontainer}>
              <Text style={[styles.label, textstyle]}>{label}</Text>
            </View>
        }
      </TouchableOpacity>
    )
  }
}

export default ColorBGTextButton
