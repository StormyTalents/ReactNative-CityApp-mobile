import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View, ScrollView, ImageBackground, Linking, Alert } from 'react-native'
import {
  PoolBottomButtons,
  VerRuler,
  Swiper,
  PoolDetailItem,
} from '../Components'
import { Images, Languages, Colors, DummyData, Constants } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/PoolDetailScreenStyles'
import { connect } from 'react-redux'
import { getUserProfile, setMatterType } from 'Actions/User';
import { getEventsNearby, getPlacesNearby, getOutdoorPlacesNearby, getLibrariesNearby, getEventWithId } from 'Actions/Activity';
import Moment from 'moment';

class PoolDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabstate: true,
      tider: false,
      toastShow: false,
      placedata: {
        location: {

        },
        openingTimes: [
          {
            day: 0,
            startTime: '2021-03-06T10:00:00Z',
            endTime: "2021-03-06T19:00:00Z"
          }
        ],
      },
    };
  }

  componentDidMount() {
    this.setState({
      placedata: this.props.placedata
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.placedata !== this.props.placedata) {
      this.setState({ placedata: this.props.placedata })
    }
  }

  visitButton = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }

  render() {
    let {
      tabstate,
      placedata,
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.slidercontainer}>
          <Swiper
            autoplay={true}
            loop={true}
            dotColor={Colors.opacity5}
            activeDotColor={Colors.white}
            showsButtons={false}
            autoplayTimeout={3}
            dotStyle={styles.docStyle}
            activeDotStyle={styles.activeDotStyle}
            style={styles.wrapper}>
            {
              DummyData.pool_detail_data.map((item, key) => (
                <ImageBackground
                  style={styles.slideritem}
                  source={item.image}
                  key={key}
                />
              ))
            }
          </Swiper>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ActivityScreen')} style={styles.closebutton}>
            <Image style={styles.closeicon} source={Images.closeButton} />
          </TouchableOpacity>
        </View>
        <View style={tabstate ? styles.maincontent : styles.maincontent1}>
          <TouchableOpacity
            // onPress={() => this.setState({ tabstate: !this.state.tabstate })} 
            style={styles.buttonview}>
            <View style={styles.viewimage}></View>
          </TouchableOpacity>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.topcontainer}>
              <Text style={placedata.openStatus == 20 ? styles.date1 : styles.date}>
                {placedata.openStatus == 20 ? Languages.OPEN : Languages.CLOSED}
              </Text>
              <TouchableOpacity style={DummyData.near_you_data[0].liked ? styles.likebutton1 : styles.likebutton} onPress={() => { }}>
                <Image style={DummyData.near_you_data[0].liked ? styles.star1 : styles.star} source={Images.star} />
              </TouchableOpacity>
            </View>
            <Text style={styles.name}>
              {placedata.title}
            </Text>
            <Text style={styles.location}>
              {placedata.location.street + ', ' + placedata.location.zipCode + ' ' + placedata.location.city}
            </Text>
            <View style={styles.ratecontainer}>
              <Image source={Images.star_yellow} style={[styles.yellowstar, { display: DummyData.activity_pool_data[0].rate >= 1 ? 'flex' : 'none' }]} />
              <Image source={Images.star_yellow} style={[styles.yellowstar, { display: DummyData.activity_pool_data[0].rate >= 2 ? 'flex' : 'none' }]} />
              <Image source={Images.star_yellow} style={[styles.yellowstar, { display: DummyData.activity_pool_data[0].rate >= 3 ? 'flex' : 'none' }]} />
              <Image source={Images.star_yellow} style={[styles.yellowstar, { display: DummyData.activity_pool_data[0].rate >= 4 ? 'flex' : 'none' }]} />
              <Image source={Images.star_yellow} style={[styles.yellowstar, { display: DummyData.activity_pool_data[0].rate >= 5 ? 'flex' : 'none' }]} />
            </View>
            <VerRuler height={calcHeight(10)} />
            <PoolDetailItem
              attendees={'1.2k'}
              interested={512}
              lowprice={placedata.priceInformation}
              highprice={Constants.days[placedata.openingTimes[0].day] + " - " + Constants.days[placedata.openingTimes[placedata.openingTimes.length - 1].day] + " " + Moment(placedata.openingTimes[0].startTime).format('HH:MM') + "-" + Moment(placedata.openingTimes[0].endTime).format('HH:MM')}
              location={placedata.location.street + ', ' + placedata.location.zipCode}
              city={placedata.location.city}
              liked={DummyData.near_you_data[0].liked}
            />
            <Text style={styles.name1}>
              {Languages.Description}
            </Text>
            <Text style={styles.description}>
              {placedata.description}
            </Text>
            <VerRuler height={calcHeight(80)} />
          </ScrollView>
          <View style={styles.bottomcontainer}>
            <PoolBottomButtons
              onPress={() =>this.visitButton(placedata.url)}
            />
          </View>
        </View>
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  code: state.auth.code,
  email: state.auth.email,
  currRegion: state.auth.currRegion,
  userdata: state.user,
  loading: state.activity.loading,
  eventnearbyaata: state.activity.eventnearbyaata,
  placesnearbyata: state.activity.placesnearbyata,
  outdoorplacenearbydata: state.activity.outdoorplacenearbydata,
  placedata: state.activity.placedata,
});

const mapDispatchToProps = {
  getUserProfile,
  setMatterType,
  getEventsNearby,
  getPlacesNearby,
  getOutdoorPlacesNearby,
  getLibrariesNearby,
  getEventWithId,
};
export default connect(mapStateToProps, mapDispatchToProps)(PoolDetailScreen);