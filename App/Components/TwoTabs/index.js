import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'

class TwoTabs extends React.PureComponent {
  render() {
    let { onPress1, onPress2, label2, label1, tabstate1 } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onPress1}
          style={tabstate1 == 10 ? styles.button0 : styles.button1}>
          <Text style={tabstate1 == 10 ? styles.label0 : styles.label1}>{label1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress2}
          style={tabstate1 == 20 ? styles.button0 : styles.button1}>
          <Text style={tabstate1 == 20 ? styles.label0 : styles.label1}>{label2}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default TwoTabs
