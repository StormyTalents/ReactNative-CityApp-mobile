import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'

class FourIconButton extends React.PureComponent {
  render() {
    let { onPress0, onPress1, onPress2, onPress3, icon, label, tabstate } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.firstsection}>
          <TouchableOpacity
            onPress={onPress0}
            style={[tabstate == 0 ? styles.button : styles.button1]}>
            <Image source={Images.alarm} style={[tabstate == 0 ? styles.icon : styles.icon1]} />
            <Text style={tabstate == 0 ? styles.label : styles.label1}>{Languages.Coming_Soon}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPress1}
            style={[tabstate == 1 ? styles.button : styles.button1]}>
            <Image source={Images.nature} style={[tabstate == 1 ? styles.icon : styles.icon1]} />
            <Text style={tabstate == 1 ? styles.label : styles.label1}>{Languages.Outdoor_activities}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.firstsection}>
          <TouchableOpacity
            onPress={onPress2}
            style={[tabstate == 2 ? styles.button : styles.button1]}>
            <Image source={Images.pool} style={[tabstate == 2 ? styles.icon : styles.icon1]} />
            <Text style={tabstate == 2 ? styles.label : styles.label1}>{Languages.Pools_Lakes}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPress3}
            style={[tabstate == 3 ? styles.button : styles.button1]}>
            <Image source={Images.photoalbum} style={[tabstate == 3 ? styles.icon : styles.icon1]} />
            <Text style={tabstate == 3 ? styles.label : styles.label1}>{Languages.Books_Libraries}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default FourIconButton
