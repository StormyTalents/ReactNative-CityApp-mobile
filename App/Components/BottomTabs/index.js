import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'
import { Images, Colors, Fonts, Languages } from '../../Themes/'

class BottomTabs extends React.PureComponent {
  
  render() {
    let { onPress0, onPress1, onPress2, onPress3, onPress4, tabstate, display,add_rotate } = this.props;
    return (
      <View style={[styles.container, { opacity: display }]}>
        <TouchableOpacity
          onPress={onPress0}
          style={tabstate == 0 ? styles.button0 : styles.button1}>
          <Image source={Images.home} style={tabstate == 0 ? styles.icon1 : styles.icon2} />
          <Text style={tabstate == 0 ? styles.label0 : styles.label1}>{Languages.Home}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress1}
          style={tabstate == 1 ? styles.button0 : styles.button1}>
          <Image source={Images.activity} style={tabstate == 1 ? styles.icon1 : styles.icon2} />
          <Text style={tabstate == 1 ? styles.label0 : styles.label1}>{Languages.Activity}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress2}
          style={styles.button1}>
          <View style={styles.roundbutton}>
            <Image style={[styles.plusicon, { transform: add_rotate ? [{ rotate: '45deg' }] : [{ rotate: '0deg' }] }]} source={Images.plus} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress3}
          style={tabstate == 3 ? styles.button0 : styles.button1}>
          <Image source={Images.schedule} style={tabstate == 3 ? styles.icon1 : styles.icon2} />
          <Text style={tabstate == 3 ? styles.label0 : styles.label1}>{Languages.Schedule}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress4}
          style={tabstate == 4 ? styles.button0 : styles.button1}>
          <Image source={Images.matter} style={tabstate == 4 ? styles.icon1 : styles.icon2} />
          <Text style={tabstate == 4 ? styles.label0 : styles.label1}>{Languages.Matter}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default BottomTabs
