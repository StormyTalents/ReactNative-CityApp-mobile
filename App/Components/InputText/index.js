import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  View
} from 'react-native'
import styles from './style'

class InputText extends React.PureComponent {
  render() {
    let { onPress, placeholder, value, icon, show, onChangeText, style, style1, keyboardType, returnKeyType } = this.props;
    return (
      <View style={styles.container}>
       
        <TextInput
          placeholder={placeholder}
          secureTextEntry={show}
          onChangeText={onChangeText}
          style={[styles.input, style1]}
          keyboardType={keyboardType}
          value={value}
          returnKeyType={returnKeyType}
        ></TextInput>
      
      </View>
    )
  }
}

export default InputText
