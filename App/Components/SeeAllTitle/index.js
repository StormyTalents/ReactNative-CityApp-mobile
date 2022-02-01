import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'
import { last } from 'ramda';

class SeeAllTitle extends React.PureComponent {
  render() {
    let { icon, label, text } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={icon} />
        <Text style={styles.text}>
          {label.toUpperCase()}
        </Text>
        <Text style={styles.label}>
          {text}
        </Text>
      </View>
    )
  }
}

export default SeeAllTitle
