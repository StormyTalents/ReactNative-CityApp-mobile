import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  TextInput
} from 'react-native'
import styles from './style'

class SearchBackBar extends React.PureComponent {
  render() {
    let { onPress, backPress, icon, label, placeholder, onChangeText, onSubmitEditing } = this.props;
    return (
      <View style={[styles.container]}>
        <View style={styles.leftcontent}>
          <TouchableOpacity onPress={backPress}>
            <Image source={icon} style={[styles.icon]} />
          </TouchableOpacity>
          <TextInput
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            placeholder={placeholder}
            style={styles.input}
          ></TextInput>
        </View>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default SearchBackBar
