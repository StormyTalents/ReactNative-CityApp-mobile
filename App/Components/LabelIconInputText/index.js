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

class LabelIconInputText extends React.PureComponent {
  render() {
    let { placeholder, value, show, onChangeText, display, keyboardType, returnKeyType, title, icon, showDraftButton, onPress } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.topcontent}>
          <Text style={styles.title}>
            {title}
          </Text>
          <TouchableOpacity onPress={onPress} style={[styles.button, { opacity: showDraftButton ? 1 : 0 }]}>
            <Text style={[styles.buttontext, { display: showDraftButton ? 'flex' : 'none' }]}>
              {Languages.Drafts}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Image style={[styles.icon, { display: display }]} source={icon} />
          <TextInput
            placeholder={placeholder}
            secureTextEntry={show}
            onChangeText={onChangeText}
            style={[styles.input,]}
            keyboardType={keyboardType}
            value={value}
            returnKeyType={returnKeyType}
            placeholderTextColor={Colors.gray5}
          ></TextInput>
        </View>
      </View>
    )
  }
}

export default LabelIconInputText
