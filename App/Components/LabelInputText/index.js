import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  View
} from 'react-native'
import styles from './style'

class LabelInputText extends React.PureComponent {
  render() {
    let { placeholder, value, label, show, onChangeText, keyboardType, returnKeyType } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          {label}
        </Text>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={show}
          onChangeText={onChangeText}
          style={[styles.input,]}
          keyboardType={keyboardType}
          value={value}
          returnKeyType={returnKeyType}
          editable={false}
        ></TextInput>
      </View>
    )
  }
}

export default LabelInputText
