import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native'
import styles from './style'
import { Images, Languages, } from 'Themes/'

class ActivityBottomButtons extends React.PureComponent {
  render() {
    let { leftPress, rightPress, status } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity style={styles.button1} onPress={leftPress}>
            <Text style={styles.buttontext1}>
              {Languages.Book_Tickets}
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
        <View style={styles.textcontainer}>
          <Text style={styles.text}>
            {Languages.You_will_be_directed_to_a_third_party_app_to_book_the_event}
          </Text>
        </View>
      </View>
    )
  }
}

export default ActivityBottomButtons
