import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'

class ErrorDetailItem extends React.PureComponent {
  render() {
    let { category, date, status, description } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>
              {Languages.Category}
            </Text>
            <Text style={styles.text}>
              {category}
            </Text>
          </View>
          <View>
            <Text style={styles.title}>
              {Languages.Date}
            </Text>
            <Text style={styles.text}>
              {date}
            </Text>
          </View>
          <View>
            <Text style={styles.title}>
              {Languages.Status}
            </Text>
            <Text style={styles.text}>
              {status}
            </Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.title}>
            {Languages.Description}
          </Text>
          <Text style={styles.text}>
            {description}
          </Text>
        </View>
      </View>
    )
  }
}

export default ErrorDetailItem
