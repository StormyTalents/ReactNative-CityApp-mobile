import React from 'react'
import {
  Text,
  View,
} from 'react-native'
import styles from './style'

class MyChildrenItem extends React.PureComponent {
  render() {
    let { name, gender, birthday, age } = this.props;
    return (
      <View
        style={styles.container}>
        <Text style={styles.name}>{'Name: ' + name}</Text>
        <Text style={styles.gender}>{'Daughter or Son: ' + gender}</Text>
        <Text style={styles.birthday}>{'Date of birth: ' + birthday}</Text>
        <Text style={styles.age}>{'Age: ' + age}</Text>
      </View>
    )
  }
}

export default MyChildrenItem
