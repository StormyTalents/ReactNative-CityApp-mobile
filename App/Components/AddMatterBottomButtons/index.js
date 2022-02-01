import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'

class AddMatterBottomButtons extends React.PureComponent {
  render() {
    let { onPress1, onPress2, label2, label1, icon } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onPress1}
          style={styles.button1}>
          <Image style={[styles.icon, { display: icon == null ? 'none' : 'flex' }]} source={icon} />
          <Text style={styles.label1}>{label1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress2}
          style={styles.button2}>
          <Text style={styles.label2}>{label2}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default AddMatterBottomButtons
