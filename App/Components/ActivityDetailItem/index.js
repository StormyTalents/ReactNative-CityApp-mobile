import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from 'Themes/'

class ActivityDetailItem extends React.PureComponent {
  render() {
    let { attendees, interested, lowprice, highprice, location, city, liked } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.iconcontainer}>
            <Image source={Images.status} style={styles.icon} />
          </View>
          <View style={styles.leftcontent}>
            <Text style={styles.label}>
              {Languages.Status}
            </Text>
            {
              liked ?
                <View style={styles.ticmed}>
                  <Image style={styles.avatar} source={Images.follower2} /><Text style={styles.text}>
                    {Languages.You + ', ' + interested + ' ' + Languages.interested}
                  </Text>
                </View> :
                <Text style={styles.text}>
                  {attendees + ' ' + Languages.attendees + ', ' + interested + ' ' + Languages.interested}
                </Text>
            }
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.iconcontainer}>
            <Image source={Images.tickets} style={styles.icon} />
          </View>
          <View style={styles.leftcontent}>
            <Text style={styles.label}>
              {Languages.Tickets}
            </Text>
            <Text style={styles.text}>
              {lowprice}
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.iconcontainer}>
            <Image source={Images.location_pin} style={styles.icon} />
          </View>
          <View style={styles.leftcontent}>
            <Text style={styles.label}>
              {Languages.Location}
            </Text>
            <Text style={styles.text}>
              {location}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default ActivityDetailItem
