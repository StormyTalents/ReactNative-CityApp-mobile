import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  View
} from 'react-native'
import styles from './style'
import { Metrics,  Languages, Images, } from '../../Themes/'

class MatterTopSortItem extends React.PureComponent {
  render() {
    let { onPress0, onPress1, onPress2, onPress3, sort, } = this.props;
    return (
      <ScrollView showsHorizontalScrollIndicator={false} style={styles.container} horizontal={true}>
        <View style={{ width:20, }}></View>
        <TouchableOpacity
          onPress={onPress0}
          style={sort == 0 ? styles.button1 : styles.button}>
          <Image source={Images.questions} style={[styles.icon]} />
          <Text style={styles.label}>{Languages.Questions}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress1}
          style={sort == 1 ? styles.button1 : styles.button}>
            
          <Image source={Images.error_reports} style={[styles.icon]} />
          <Text style={styles.label}>{Languages.Error_Reports}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress2}
          style={sort == 2 ? styles.button1 : styles.button}>
          <Image source={Images.suggestions} style={[styles.icon]} />
          <Text style={styles.label}>{Languages.Suggestions}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress3}
          style={sort == 3 ? styles.button1 : styles.button}>
          <Image source={Images.complaints} style={[styles.icon]} />
          <Text style={styles.label}>{Languages.Complinats}</Text>
        </TouchableOpacity>
        <View style={{ width:20, }}></View>
      </ScrollView>
    )
  }
}

export default MatterTopSortItem
