import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
} from 'react-native'
import styles from './style'

class CategoryItem extends React.PureComponent {
  render() {
    let { onPress, icon, label, selected } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button]}>
        <Text style={styles.label}>{label}</Text>
        <Image source={icon} style={[styles.icon,
           { opacity: selected ? 1 : 0 }
        ]} />
      </TouchableOpacity>
    )
  }
}

export default CategoryItem
