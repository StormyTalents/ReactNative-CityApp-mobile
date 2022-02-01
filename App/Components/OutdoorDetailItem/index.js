import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'

class OutdoorDetailItem extends React.PureComponent {
  render() {
    let { leftPress, rightPress, bookstate, date, time, name, location, city, online, attendees, distance } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.datetime}>
          {date + ' ' + time}
        </Text>
        <Text style={styles.name}>
          {name}
        </Text>
        <Text style={styles.location}>
          {location + ', ' + city + ', ' + online}
        </Text>
        <View style={styles.textcontainer}>
          <Text style={styles.attendees}>
            {attendees + ' ' + Languages.attendees}
          </Text>
          <View style={styles.rightcontent}>
            <Image style={styles.icon} source={Images.pin} />
            <Text style={styles.distance}>
              {distance}
            </Text>
          </View>
        </View>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity style={styles.button1} onPress={leftPress}>
            <Text style={styles.buttontext1}>
              {Languages.Event_Site}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={bookstate ? styles.button3 : styles.button2} onPress={rightPress}>
            <Image style={styles.icon} source={bookstate ? Images.in_tider : Images.add_to_tider} />
            <Text style={bookstate ? styles.buttontext3 : styles.buttontext2}>
              {
                bookstate ? Languages.In_Tider : Languages.Add_to_Tider
              }
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default OutdoorDetailItem
