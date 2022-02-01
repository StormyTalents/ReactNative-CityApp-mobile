import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from 'Themes/'

class ActivityItemComponent extends React.PureComponent {
  render() {
    let { onPress, date, time, image, liked, name, location, city, online, distance, followers, likePress, number } = this.props;
    return (
      <View onPress={onPress} style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <Image style={styles.image} source={image} />
        </TouchableOpacity>
        <View style={styles.topcontainer}>
          <Text style={styles.date}>
            {date + ' ' + time}
          </Text>
          <TouchableOpacity style={liked ? styles.likebutton1 : styles.likebutton} onPress={likePress}>
            <Image style={liked ? styles.star1 : styles.star} source={Images.star} />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>
          {name}
        </Text>
        <Text style={styles.location}>
          {location + ' ' + city + ', ' + online}
        </Text>
        <View style={styles.bottomcontainer}>
          <View style={styles.leftcontent}>
            <View style={[styles.followleft, { display: followers ? 'flex' : 'none' }]}>
              {
                followers && followers.map((item, key) => (
                  <Image style={styles.icon} source={item.icon} key={key} />
                ))
              }
            </View>
            <Text style={styles.followertext}>
              {number + " Attendees"}
            </Text>
          </View>
          <View style={styles.rightcontent}>
            <Image style={styles.pin} source={Images.pin} />
            <Text style={styles.pintext}>
              {distance + " km"}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default ActivityItemComponent
