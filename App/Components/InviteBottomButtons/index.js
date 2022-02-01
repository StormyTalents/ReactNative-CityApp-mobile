import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'

class InviteBottomButtons extends React.PureComponent {
  render() {
    let { leftPress, rightPress, status } = this.props;
    return (
      <View style={styles.buttoncontainer}>
        <TouchableOpacity style={styles.button2} onPress={leftPress}>
          <Text style={styles.buttontext2}>
            {Languages.Reject}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={status ? styles.button3 : styles.button2} onPress={rightPress}>
          <Image style={styles.icon} source={status ? Images.in_tider : Images.add_to_tider} />
          <Text style={status ? styles.buttontext3 : styles.buttontext2}>
            {
              status ? Languages.In_Tider : Languages.Add_to_Tider
            }
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default InviteBottomButtons
