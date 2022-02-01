import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'
const maxlimit = 55;
class HomeComponent extends React.PureComponent {
  render() {
    let { newly, title, text, icon, onPress, menuPress, index, type } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        {
          icon ? (
            <Image style={styles.icon} source={icon} />
          ) :
            <View style={[styles.iconcon, { backgroundColor: Colors.randomColors[8 - index] }]}>
              <Text style={styles.icontext}>
                {title.charAt(0).toUpperCase()}
              </Text>
            </View>
        }
        {
          newly ? <View style={styles.badge}></View> : null
        }
        <View style={styles.leftsection}>
          <View style={styles.topsection}>
            <Text style={styles.title}>
              {((title).length > 45) ?
                (((title).substring(0, 45 - 3)) + '...') :
                title}
            </Text>
            <TouchableOpacity style={styles.button} onPress={menuPress}>
              <Image source={Images.more_horizontal} style={styles.menu} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>
            {((text).length > 70) ?
              (((text).substring(0, 70 - 3)) + '...') :
              text}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default HomeComponent
