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

class FavoriteTitle extends React.PureComponent {
  render() {
    let { icon, label, text } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.staricon}>
          <Image style={styles.star} source={Images.star} />
        </View>
        <Text style={styles.label}>
          {text.toUpperCase()}
        </Text>
      </View>
    )
  }
}

export default FavoriteTitle
