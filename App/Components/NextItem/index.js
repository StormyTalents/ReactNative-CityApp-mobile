import React from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import styles from './style'

class NextItem extends React.PureComponent {
  render() {
    let { text, icon, title } = this.props;
    return (
      <View
        style={[styles.itemcontainer]}>
        <Image source={icon} style={[styles.icon]} />
        <View style={styles.itemcontent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    )
  }
}

export default NextItem
