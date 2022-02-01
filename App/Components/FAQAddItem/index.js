import React from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import styles from './style'

class FAQAddItem extends React.PureComponent {
  render() {
    let { icon, text, onPress, icon1, description, expanded, } = this.props;
    return (
      <View>
        <TouchableOpacity
          onPress={onPress}
          style={styles.container}>
          <Text style={styles.text}>{text}</Text>
          {
            expanded ? <Image source={icon1} style={styles.icon} /> : <Image source={icon} style={styles.icon} />
          }
        </TouchableOpacity>
        {
          expanded ? <Text style={styles.description}>
            {description}
          </Text> : null
        }
      </View>
    )
  }
}

export default FAQAddItem
