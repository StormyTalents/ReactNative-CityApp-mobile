import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'
const maxlimit = 55;
class AddScrollReportItem extends React.PureComponent {
  render() {
    let { title, icon, text, date, onPress } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.topcontent}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
        <Text style={styles.date}>
          {Languages.Creation_date + ': ' + date}
        </Text>
        <View style={styles.bottomcontent}>
          <Text style={styles.text}>
            {((text).length > maxlimit) ?
              (((text).substring(0, maxlimit - 3)) + '...') :
              text}
          </Text>
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttontext}>
              {Languages.Details}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default AddScrollReportItem
