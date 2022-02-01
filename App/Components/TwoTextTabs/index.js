import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'

class TwoTextTabs extends React.PureComponent {
  render() {
    let { onPress1, onPress2, label2, label1, tabstate } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onPress1}
          style={tabstate == 0 ? styles.button0 : styles.button1}>
          <Text style={tabstate == 0 ? styles.label0 : styles.label1}>{label1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress2}
          style={tabstate == 1 ? styles.button0 : styles.button1}>
          <Text style={tabstate == 1 ? styles.label0 : styles.label1}>{label2}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default TwoTextTabs
