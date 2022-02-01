import React from 'react'
import {
  Text,
  View,
} from 'react-native'
import styles from './style'

class AboutCitiAppItem extends React.PureComponent {
  render() {
    let { title, text, } = this.props;
    return (
      <View
        style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    )
  }
}

export default AboutCitiAppItem
