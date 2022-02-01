import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'

class ItemNotes extends React.PureComponent {
  render() {
    let { icon, text } = this.props;
    return (
      <View style={styles.inputpart}>
        <Image style={styles.avatar} source={icon} />
        <Text style={styles.inputitem}>
          {
            text
          }
        </Text>
      </View>
    )
  }
}

export default ItemNotes
