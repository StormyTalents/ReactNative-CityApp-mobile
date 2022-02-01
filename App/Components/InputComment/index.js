import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  View
} from 'react-native';
import styles from './style';
import { Textarea } from 'native-base';
import { Images } from "Themes";
class InputComment extends React.PureComponent {
  render() {
    let { onPress, placeholder, value, avatar, onChangeText, returnKeyType } = this.props;
    return (
      <View style={styles.container}>
        <Image source={avatar} style={styles.avatar} />
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={[styles.input,]}
          value={value}
          returnKeyType={returnKeyType}
        ></TextInput>
        <TouchableOpacity disabled={value.length == 0 ? true : false} onPress={onPress} style={styles.button}>
          {
            value.length == 0 ? null : <Image source={Images.send_white} style={styles.icon} />
          }
        </TouchableOpacity>
      </View>
    )
  }
}

export default InputComment
