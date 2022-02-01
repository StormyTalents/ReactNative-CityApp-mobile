import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'

class AddReportItem extends React.PureComponent {
  render() {
    let { title, icon, text, onPress } = this.props;
    return (
      <View style={styles.container}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.text}>
          {text}
        </Text>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttontext}>
            {Languages.Raise}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default AddReportItem
