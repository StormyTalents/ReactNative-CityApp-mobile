import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View, ScrollView, ImageBackground } from 'react-native'
import {
  OutdoorDetailItem,
  VerRuler,
} from '../Components'
import { Images, Languages, Colors, DummyData } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/OutdoorDetailScreenStyles'

export default class OutdoorDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabstate: true,
      tider: false,
      toastShow: false,
      event_type: 0,
    };
  }

  render() {
    let {
      tabstate,
      event_type,
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.slidercontainer}>
          <ImageBackground
            style={styles.slideritem}
            source={event_type == 0 ? Images.boot1 : (event_type == 1 ? Images.saxphone1 : Images.bicycle1)}
          >
            <Image style={styles.icontop} source={event_type == 0 ? Images.boot : (event_type == 1 ? Images.saxphone : Images.bicycle)} />
            <Text style={styles.texttop}>
              {event_type == 0 ? DummyData.activity_outdoor_data[0].type : (event_type == 1 ? DummyData.activity_outdoor_data[1].type : DummyData.activity_outdoor_data[2].type)}
            </Text>
          </ImageBackground>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ActivityScreen')} style={styles.closebutton}>
            <Image style={styles.closeicon} source={Images.closeButton} />
          </TouchableOpacity>
        </View>
        <View style={tabstate ? styles.maincontent : styles.maincontent1}>
          <VerRuler height={calcHeight(38)} />
          <Text style={styles.name}>
            {event_type == 0 ? DummyData.activity_outdoor_data[0].title : (event_type == 1 ? DummyData.activity_outdoor_data[1].title : DummyData.activity_outdoor_data[2].title)}
          </Text>
          <VerRuler height={calcHeight(29)} />
          <View style={styles.scrollcontainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {
                DummyData.outdoor_detail_data.map((item, key) => (
                  <OutdoorDetailItem
                    leftPress={() => { }}
                    rightPress={() => { }}
                    time={item.time}
                    date={item.date}
                    name={item.name}
                    location={item.location}
                    city={item.city}
                    online={item.online}
                    attendees={item.attendees}
                    distance={item.distance}
                    bookstate={item.bookstate}
                    key={key} />
                ))
              }
            </ScrollView>
          </View>
          <VerRuler height={calcHeight(54)} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.name1}>
              {Languages.Event_Details}
            </Text>
            <Text style={styles.description}>
              {DummyData.near_you_data[0].description}
            </Text>
            <VerRuler height={calcHeight(20)} />
          </ScrollView>
        </View>
      </View>
    )
  }
}
