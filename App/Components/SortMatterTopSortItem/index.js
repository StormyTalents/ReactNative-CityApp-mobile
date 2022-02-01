import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  View
} from 'react-native'
import styles from './style'
import { Metrics, Languages, Images, } from '../../Themes/'

class SortMatterTopSortItem extends React.PureComponent {
  render() {
    let { onPress0, onPress1, onPress2, onPress3, sort, } = this.props;
    return (
      <ScrollView showsHorizontalScrollIndicator={false} style={styles.container} horizontal={true}>
        <View style={{ width: 20, }}></View>
        <TouchableOpacity
          onPress={onPress0}
          style={sort == 0 ? styles.button1 : styles.button}>
          <Text style={styles.label}>{Languages.Category}</Text>
          <Image source={Images.arrow_down} style={[styles.icon]} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress1}
          style={sort == 1 ? styles.button1 : styles.button}>
          <Text style={styles.label}>{Languages.Status}</Text>
          <Image source={Images.arrow_down} style={[styles.icon]} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress2}
          style={sort == 2 ? styles.button1 : styles.button}>
          <Text style={styles.label}>{Languages.Required_Action}</Text>
          <Image source={Images.arrow_down} style={[styles.icon]} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress3}
          style={sort == 3 ? styles.button1 : styles.button}>
          <Text style={styles.label}>{Languages.Date}</Text>
          <Image source={Images.arrow_down} style={[styles.icon]} />
        </TouchableOpacity>
        <View style={{ width: 20, }}></View>
      </ScrollView>
    )
  }
}

export default SortMatterTopSortItem
