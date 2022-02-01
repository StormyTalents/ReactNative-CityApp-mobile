import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  View
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'

class IconInputText extends React.PureComponent {
  render() {
    let { onPress, placeholder, value, icon, show, onChangeText, style, style1, keyboardType, returnKeyType } = this.props;
    return (
      <View style={styles.button}>
        <Image style={styles.icon} source={icon} />
        <TextInput
          placeholder={placeholder}
          secureTextEntry={show}
          onChangeText={onChangeText}
          style={[styles.input, style1]}
          keyboardType={keyboardType}
          value={value}
          returnKeyType={returnKeyType}
          placeholderTextColor={Colors.black0}
        ></TextInput>

      </View>
    )
  }
}

export default IconInputText
