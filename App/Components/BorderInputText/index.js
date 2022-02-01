import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  View
} from 'react-native'
import styles from './style'

class BorderInputText extends React.PureComponent {
  render() {
    let { placeholder, value, label, show, onChangeText, keyboardType, returnKeyType, width,defaultValue } = this.props;
    return (
      <View style={[styles.container, { width: width }]}>
        <Text style={styles.label}>
          {label}
        </Text>
        <TextInput
          defaultValue={defaultValue}
          placeholder={placeholder}
          secureTextEntry={show}
          onChangeText={onChangeText}
          style={[styles.input]}
          keyboardType={keyboardType}
          value={value}
          returnKeyType={returnKeyType}
        ></TextInput>
      </View>
    )
  }
}

export default BorderInputText
