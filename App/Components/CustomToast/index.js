import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'

class CustomToast extends React.PureComponent {
  render() {
    let { onPress, toastShow, } = this.props;
    return (
      <View style={toastShow? styles.container1:styles.container2}>
        <Text style={styles.label}>
          {Languages.Event_has_been_add_to_Tider}
        </Text>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Image style={styles.icon} source={Images.trashbin} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default CustomToast
