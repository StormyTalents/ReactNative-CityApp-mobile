import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'

class PoolBottomButtons extends React.PureComponent {
  render() {
    let { onPress, } = this.props;
    return (
      <View style={styles.container}>
          <Text style={styles.text}>
            {Languages.You_will_be_directed_to_a_third_party_app_to_book_the_event}
          </Text>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttontext}>
              {Languages.Visit_Site}
            </Text>
          </TouchableOpacity>
      </View>
    )
  }
}

export default PoolBottomButtons
