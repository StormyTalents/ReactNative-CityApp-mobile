import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View, ScrollView } from 'react-native'
import {
  ActivityDetailItem,
  VerRuler,
  ActivityBottomButtons,
  CustomToast,
} from '../Components'
import { Images, Languages, Constants, DummyData } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/ActivityDetailScreenStyles'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Toast, { DURATION } from 'react-native-easy-toast'
import { connect } from 'react-redux'
import { getUserProfile, setMatterType } from 'Actions/User';
import { getEventsNearby, getPlacesNearby, getOutdoorPlacesNearby, getLibrariesNearby, getEventWithId } from 'Actions/Activity';
import Moment from 'moment';

const latitudeDelta = 0.015;
const longitudeDelta = 0.0121;
class ActivityDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabstate: true,
      tider: false,
      toastShow: false,
      eventdata: {
        location: {
          latitude: 0,
          longitude: 0,
          street: '',
          zipCode: '',
          city: '',
          country: ''
        },
        openingTimes: [
          {
            day: 5,
            startTime: "2021-03-03T17:29:56.615Z",
            endTime: "2021-03-03T17:29:56.615Z"
          }
        ],
        imagesIds: [

        ],
        thumbnail: '',
      },
    };

  }
  componentDidMount() {
    this.setState({
      eventdata: this.props.eventdata
    })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.eventdata !== this.props.eventdata) {
      this.setState({ eventdata: this.props.eventdata })
      // alert(JSON.stringify(this.props.eventdata))
    }
  }
  /*
  must display eventdata
  */
  render() {
    let {
      tabstate,
      tider,
      toastShow,
      eventdata
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.mapcontainer}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: eventdata.location.latitude,
              longitude: eventdata.location.longitude,
              latitudeDelta: latitudeDelta,
              longitudeDelta: longitudeDelta
            }}
          >
            <Marker
              coordinate={{
                latitude: eventdata.location.latitude,
                longitude: eventdata.location.longitude,
              }}>
              <Image source={Images.marker} style={styles.marker} />
            </Marker>
          </MapView>
          <View style={styles.floatingcontent}>
            <Image source={{ uri: `data:image/jpeg;base64,${eventdata.thumbnail}` }} style={styles.floatingimage} />
            <Text style={styles.floatingtext}>
              {eventdata.location.street + ", " + eventdata.location.zipCode + " " + eventdata.location.city}
            </Text>
          </View>
        </View>
        <View style={tabstate ? styles.opacitybg1 : styles.opacitybg}>
        </View>
        <View style={tabstate ? styles.maincontent : styles.maincontent1}>
          <TouchableOpacity onPress={() => this.setState({ tabstate: !this.state.tabstate })} style={styles.buttonview}>
            <View style={styles.viewimage}></View>
          </TouchableOpacity>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.topcontainer}>
              <Text style={styles.date}>
                {Moment(eventdata.openingTimes[0].startTime).format('d MMM') + ' ' + Moment(eventdata.openingTimes[0].startTime).format('HH:MM') + "-" + Moment(eventdata.openingTimes[0].endTime).format('HH:MM')}
              </Text>
              <TouchableOpacity style={DummyData.near_you_data[0].liked ? styles.likebutton1 : styles.likebutton} onPress={() => { }}>
                <Image style={DummyData.near_you_data[0].liked ? styles.star1 : styles.star} source={Images.star} />
              </TouchableOpacity>
            </View>
            <Text style={styles.name}>
              {eventdata.title}
            </Text>
            <Text style={styles.location}>
              {eventdata.location.street + ", " + eventdata.location.zipCode + " " + eventdata.location.city}
            </Text>
            <VerRuler height={calcHeight(10)} />
            <ActivityDetailItem
              attendees={eventdata.attendees}
              interested={eventdata.interested}
              lowprice={eventdata.priceInformation}
              highprice={90}
              location={eventdata.location.street + ", " + eventdata.location.zipCode + " " + eventdata.location.city}
              city={'city name'}
              liked={DummyData.near_you_data[0].liked}
            />
            <Text style={styles.name1}>
              {Languages.Description}
            </Text>
            <Text style={styles.description}>
              {eventdata.description}
            </Text>
          </ScrollView>
          <View style={styles.bottomcontainer}>
            <ActivityBottomButtons
              status={tider}
              leftPress={() => this.props.navigation.navigate('ActivityScreen')}
              rightPress={() => {
                this.setState({ tider: !this.state.tider, toastShow: true });
              }} />
          </View>
        </View>
        <CustomToast
          toastShow={toastShow}
          onPress={() => this.setState({ toastShow: false })}
        />
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
  eventdata: state.activity.eventdata,
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

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDetailScreen);