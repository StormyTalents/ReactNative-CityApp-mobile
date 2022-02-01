import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  TextInput,
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes'

class ChatInputText extends React.PureComponent {
  render() {
    let { onPress, action1, action2, placeholder, onChangeText,value } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.topsection}>
          <TextInput value={value} style={styles.input} placeholder={placeholder} onChangeText={onChangeText}>
          </TextInput>
          <TouchableOpacity onPress={onPress} style={styles.sendbutton}>
            <Image style={styles.titleimage} source={Images.send_white} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttomsection}>
          <TouchableOpacity style={styles.iconbutton} onPress={action1}>
            <Image style={styles.icon} source={Images.upload_image} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconbutton} onPress={action2}>
            <Image style={styles.icon} source={Images.attach_blue} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default ChatInputText
