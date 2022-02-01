import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native'
import styles from './style'
import {
  Textarea
} from 'native-base';
import { Metrics, ApplicationStyles, Languages, Fonts } from '../../Themes/'

class FeedbackComponent extends React.PureComponent {
  render() {
    let { onPress, icon, label, onChangeText, } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {Languages.Give_feedback}
        </Text>
        <Textarea
          onChangeText={onChangeText}
          style={styles.textfield}
          placeholder={Languages.Enter_your_feedback} />
        <TouchableOpacity
          onPress={onPress}
          style={[styles.button]}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default FeedbackComponent
