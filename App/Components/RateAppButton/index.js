import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native'
import styles from './style'
import { Metrics, ApplicationStyles, Colors, Fonts, Images, Languages } from 'Themes'

class RateAppButton extends React.PureComponent {
  render() {
    let { onPress, rate, label } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.bottomcontainer}>
          <View style={styles.leftcontent}>
            <View style={styles.topitem}>
              <Text style={styles.rate}>{rate.toString()}</Text>
              <Text style={styles.input}>{Languages.out_of + ' ' + 5}</Text>
            </View>
            <View style={styles.starcontainer}>
              {
                Math.floor(rate) <= 0 ? <Image source={Images.star} style={styles.icon} /> : <Image source={Images.star_yellow} style={styles.icon} />
              }
              {
                Math.floor(rate) <= 1 ? <Image source={Images.star} style={styles.icon} /> : <Image source={Images.star_yellow} style={styles.icon} />
              }
              {
                Math.floor(rate) <= 2 ? <Image source={Images.star} style={styles.icon} /> : <Image source={Images.star_yellow} style={styles.icon} />
              }
              {
                Math.floor(rate) <= 3 ? <Image source={Images.star} style={styles.icon} /> : <Image source={Images.star_yellow} style={styles.icon} />
              }
              {
                Math.floor(rate) <= 4 ? <Image source={Images.star} style={styles.icon} /> : <Image source={Images.star_yellow} style={styles.icon} />
              }
            </View>
          </View>
          <TouchableOpacity
            onPress={onPress}
            style={[styles.button]}>
            <Text style={styles.buttontext}>{Languages.Rate_CitiApp}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default RateAppButton
