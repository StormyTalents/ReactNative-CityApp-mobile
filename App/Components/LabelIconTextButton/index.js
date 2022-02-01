import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native'
import styles from './style'

class LabelIconTextButton extends React.PureComponent {
  render() {
    let { onPress, icon, label, lefticon, guests } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button]}>
        <View style={styles.leftcontent}>
          <Image source={icon} style={[styles.icon]} />
          {
            guests && guests.length !== 0 ? <Text style={styles.label}>
              {
                guests.map((item, key) => (
                  <Text key={key}>{item.name + ', '}</Text>
                ))
              }
            </Text> : <Text style={styles.label}>{label}</Text>
          }
        </View>
        <Image source={lefticon} style={[styles.lefticon]} />
      </TouchableOpacity>
    )
  }
}

export default LabelIconTextButton
