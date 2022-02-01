import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'

class OutdoorItemComponent extends React.PureComponent {
  render() {
    let { onPress, image, icon, title, type, location, likePress, } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.floatcontainer}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.type}>
            {type}
          </Text>
          <Text style={styles.location}>
            {location}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default OutdoorItemComponent
