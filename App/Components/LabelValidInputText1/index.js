import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  View
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes'
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
class LabelValidInputText1 extends React.PureComponent {
  render() {
    let { placeholder, value, show, onChangeText, display, keyboardType, returnKeyType, errortext, title, icon, error, onPress } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>
        <View style={[styles.content, { borderBottomColor: error ? Colors.red : Colors.gray5 }]}>
          <TextInput
            placeholder={placeholder}
            secureTextEntry={show}
            onChangeText={onChangeText}
            style={[styles.input,]}
            keyboardType={keyboardType}
            value={value}
            returnKeyType={returnKeyType}
            placeholderTextColor={Colors.gray1}
          ></TextInput>
          {
            validateEmail(value) && <Image style={[styles.icon, { display: display }]} source={Images.email_valid} />
          }
        </View>
        {
          error && <Text style={styles.errortext}>
            {
              errortext
            }
          </Text>
        }

      </View>
    )
  }
}

export default LabelValidInputText1
