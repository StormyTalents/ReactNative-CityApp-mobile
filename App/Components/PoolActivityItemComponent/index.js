import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'

class PoolActivityItemComponent extends React.PureComponent {
  render() {
    let { onPress, date, time, image, liked, name, location, city, online, distance, rate, status, likePress, number } = this.props;
    return (
      <View onPress={onPress} style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <Image style={styles.image} source={image} />
        </TouchableOpacity>
        <View style={styles.rightcontainer}>
          <View style={styles.topcontainer}>
            <Text style={styles.name}>
              {name}
            </Text>
            <TouchableOpacity style={liked ? styles.likebutton1 : styles.likebutton} onPress={likePress}>
              <Image style={liked ? styles.star1 : styles.star} source={Images.star} />
            </TouchableOpacity>
          </View>
          <Text style={styles.location}>
            {location + ', ' + city + ', ' + online}
          </Text>
          <View style={styles.ratecontainer}>
            <Image source={Images.star_yellow} style={[styles.yellowstar, { display: rate >= 1 ? 'flex' : 'none' }]} />
            <Image source={Images.star_yellow} style={[styles.yellowstar, { display: rate >= 2 ? 'flex' : 'none' }]} />
            <Image source={Images.star_yellow} style={[styles.yellowstar, { display: rate >= 3 ? 'flex' : 'none' }]} />
            <Image source={Images.star_yellow} style={[styles.yellowstar, { display: rate >= 4 ? 'flex' : 'none' }]} />
            <Image source={Images.star_yellow} style={[styles.yellowstar, { display: rate >= 5 ? 'flex' : 'none' }]} />
          </View>
          <View style={styles.bottomcontainer}>
            <Text style={[styles.date, { color: status == 0 ? Colors.green : Colors.red }]}>
              {status == 0 ? Languages.OPEN : Languages.CLOSED}
            </Text>
            <View style={styles.rightcontent}>
              <Image style={styles.pin} source={Images.pin} />
              <Text style={styles.pintext}>
                {distance+" km"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default PoolActivityItemComponent
