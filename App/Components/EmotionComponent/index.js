import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native'
import styles from './style'
import { Metrics, Languages, Colors, Images } from '../../Themes'

class EmotionComponent extends React.PureComponent {
  render() {
    let { onPress0, onPress1, onPress2, emotion } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onPress0}
          style={emotion == 0 ? styles.button1 : styles.button}>
          <Image source={Images.emotion_sad} style={emotion == 0 ? styles.icon1 : styles.icon} />
          <Text style={emotion == 0 ? styles.label1 : styles.label}>{Languages.Not_helpful}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress1}
          style={emotion == 1 ? styles.button1 : styles.button}>
          <Image source={Images.emotion_good} style={emotion == 1 ? styles.icon1 : styles.icon} />
          <Text style={emotion == 1 ? styles.label1 : styles.label}>{Languages.It_helps}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress2}
          style={emotion == 2 ? styles.button1 : styles.button}>
          <Image source={Images.emotion_happy} style={emotion == 2 ? styles.icon1 : styles.icon} />
          <Text style={emotion == 2 ? styles.label1 : styles.label}>{Languages.So_helpful}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default EmotionComponent
