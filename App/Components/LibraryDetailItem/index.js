import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'

class LibraryDetailItem extends React.PureComponent {
  render() {
    let { attendees, interested, lowprice, highprice, location, city, liked } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.iconcontainer}>
            <Image source={Images.location_pin} style={styles.icon} />
          </View>
          <View style={styles.leftcontent}>
            <Text style={styles.label}>
              {Languages.Location}
            </Text>
            <Text style={styles.text}>
              {location + ', ' + city}
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.iconcontainer}>
            <Image source={Images.opening_date} style={styles.icon} />
          </View>
          <View style={styles.leftcontent}>
            <Text style={styles.label}>
              {Languages.Opening_Dates}
            </Text>
            <Text style={styles.text}>
              {highprice}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default LibraryDetailItem
