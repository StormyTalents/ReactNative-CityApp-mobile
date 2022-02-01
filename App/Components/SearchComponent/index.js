import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  View
} from 'react-native'
import styles from './style'
import { Metrics, Images, Colors, Fonts } from '../../Themes'

class SearchComponent extends React.PureComponent {
  render() {
    let { placeholder, value, icon, onChangeText, keyboardType, onPress, returnKeyType } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.leftitem}>
          <Image style={styles.icon} source={icon} />
          <TextInput
            placeholder={placeholder}
            onChangeText={onChangeText}
            style={[styles.input,]}
            keyboardType={keyboardType}
            value={value}
            returnKeyType={returnKeyType}
          ></TextInput>
        </View>
        <TouchableOpacity onPress={onPress} style={[styles.closebutton,{opacity:value==''?0:1}]}>
          <Image style={styles.closeimage} source={Images.closeButton} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default SearchComponent
