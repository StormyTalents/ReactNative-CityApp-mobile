import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  ScrollView,
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'

class BooksActivityItemComponent extends React.PureComponent {
  render() {
    let { onPress, books, liked, name, location, city, online, rate, status, likePress, } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.rightcontainer}>
          <View style={styles.topcontainer}>
            <Text style={[styles.date, { color: status == 0 ? Colors.green : Colors.red }]}>
              {status == 0 ? Languages.OPEN : Languages.CLOSED}
            </Text>
            <TouchableOpacity style={liked ? styles.likebutton1 : styles.likebutton} onPress={likePress}>
              <Image style={liked ? styles.star1 : styles.star} source={Images.star} />
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>
            {name}
          </Text>
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
          <Text style={styles.date}>
            {Languages.New_Coming}
          </Text>
          <ScrollView style={styles.bookscontainer} horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              books && books.map((item, key) => (
                <TouchableOpacity style={styles.bookbutton} key={key} onPress={onPress} >
                  <Image style={styles.book} source={item.coverImage} />
                </TouchableOpacity>
              )
              )
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default BooksActivityItemComponent
