import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'

class BottomToast extends React.PureComponent {
  render() {
    let { onPress, toastShow, } = this.props;
    return (
      <View style={toastShow? styles.container1:styles.container2}>
        <Text style={styles.label}>
          {Languages.Draft_discarded}
        </Text>
        <TouchableOpacity onPress={onPress} style={styles.button}>
         <Text style={styles.untext}>
           {Languages.Undo}
         </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default BottomToast
