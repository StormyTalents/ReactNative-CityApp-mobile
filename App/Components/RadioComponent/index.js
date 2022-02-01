import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'
import { Images, ApplicationStyles, Colors, Fonts } from '../../Themes/'

class RadioComponent extends React.PureComponent {

  render() {
    let { onPress0, onPress1, onPress2, label0, value0, label1, value1, label2, value2, radio } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress0} style={styles.button} >
          <View>
            <Text style={styles.label}>
              {label0}
            </Text>
            <Text style={styles.value}>
              {value0}
            </Text>
          </View>
          <Image style={styles.icon} source={radio == 0 ? Images.radio : Images.unradio} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress1} style={styles.button} >
          <View>
            <Text style={styles.label}>
              {label1}
            </Text>
            <Text style={styles.value}>
              {value1}
            </Text>
          </View>
          <Image style={styles.icon} source={radio == 1 ? Images.radio : Images.unradio} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress2} style={styles.button} >
          <View>
            <Text style={styles.label}>
              {label2}
            </Text>
            <Text style={styles.value}>
              {value2}
            </Text>
          </View>
          <Image style={styles.icon} source={radio == 2 ? Images.radio : Images.unradio} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default RadioComponent
