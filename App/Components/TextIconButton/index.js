import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'

class TextIconButton extends React.PureComponent {
  render() {
    let { onPress, icon, label } = this.props;
    return (
      <TouchableOpacity style={styles.container}>
        <Image style={styles.icon} source={icon} />
        <Text style={styles.label}>
          {label}
        </Text>
      </TouchableOpacity>
    )
  }
}

export default TextIconButton
