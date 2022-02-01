import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View, ScrollView } from 'react-native'
import {
  ActivityItemComponent,
  VerRuler,
  FourIconButton,
  BottomTabs,
  PoolItemComponent,
  PoolActivityItemComponent,
  OutdoorItemComponent,
  NearActivityItemComponent,
  BooksActivityItemComponent,
  SeeAllTitle,
  CustomSpinner
} from '../Components'
import { Images, Languages, Constants, DummyData, Colors } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/ActivityScreenStyles'
import Modal from 'react-native-modalbox';
import NavigationService from "Navigation/NavigationService";
import { FloatingAction } from "../Components/react-native-floating-action";
import { connect } from 'react-redux'
import { getUserProfile, setMatterType,updateUserEvents } from 'Actions/User';
import Moment from 'moment';

import { getEventsNearby, getPlacesNearby, getOutdoorPlacesNearby, getLibrariesNearby, getEventWithId, getPlaceWithId,getLibraryWithId, } from 'Actions/Activity';
class ActivityScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabstate: 0,
      add_rotate: false,
      sort: -1,
      mysort: -1,
      showbottomtab: 1,
      sort_data: Constants.sort_arr[0],
      radio: 0,
      spinner: false,
      eventnearbyaata: [],
      placesnearbyata: [],
      outdoorplacenearbydata: [],
      librariesnearbydata: [],
    };

  }
  componentDidMount() {
    this.GetEventsNearby();
  }
  GetEventsNearby = () => {
    let { currRegion, email, token } = this.props;
    const types = 10;
    this.props.getEventsNearby({ currRegion, email, token, types });
  }
  GetPlacesNearby = () => {
    let { currRegion, email, token } = this.props;
    const types = 20;
    this.props.getPlacesNearby({ currRegion, email, token, types });
  }
  GetLibrariesNearby = () => {
    let { currRegion, email, token } = this.props;
    const types = 20;
    this.props.getLibrariesNearby({ currRegion, email, token, types });
  }
  GetOutdoorPlacesNearby = () => {
    let { currRegion, email, token } = this.props;
    const types = 20;
    this.props.getOutdoorPlacesNearby({ currRegion, email, token, types });
  }
  onClose = () => {
    this.setState({ showbottomtab: 1 })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.eventnearbyaata !== this.props.eventnearbyaata) {
      this.setState({ eventnearbyaata: this.props.eventnearbyaata })
    }
    if (prevProps.placesnearbyata !== this.props.placesnearbyata) {
      this.setState({ placesnearbyata: this.props.placesnearbyata })
    }
    if (prevProps.outdoorplacenearbydata !== this.props.outdoorplacenearbydata) {
      this.setState({ outdoorplacenearbydata: this.props.outdoorplacenearbydata })
    }
    if (prevProps.librariesnearbydata !== this.props.librariesnearbydata) {
      this.setState({ librariesnearbydata: this.props.librariesnearbydata })
    }
  }
  goEventDetail = (activityId) => {
    let { currRegion, email, token } = this.props;
    this.props.getEventWithId({ activityId, email, token });
  }

  goPoolDetail = (id) => {
    let { currRegion, email, token } = this.props;
    this.props.getPlaceWithId({ id, email, token });
  }

  goLibraryDetail = (id) => {
    let { currRegion, email, token } = this.props;
    this.props.getLibraryWithId({ id, email, token });
  }

  UpdateUserEvents = (eventId) => {
    let { currRegion, email, token } = this.props;
    this.props.updateUserEvents({ eventId, email, token });
  }

  render() {
    let {
      tabstate,
      add_rotate,
      showbottomtab,
      eventnearbyaata,
      placesnearbyata,
      outdoorplacenearbydata,
      librariesnearbydata,
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <VerRuler height={calcHeight(60)} />
        <View style={styles.headersection}>
          <Text style={styles.titleText}>
            {Languages.Activity}
          </Text>
          <TouchableOpacity onPress={()=>NavigationService.navigate('FavorteScreen')}  >
            <Text style={styles.headertext}>
              {Languages.Favorites}
            </Text>
          </TouchableOpacity>
        </View>
        <VerRuler height={calcHeight(30)} />
        <FourIconButton
          onPress0={() => { this.setState({ tabstate: 0 }); this.GetEventsNearby(); }}
          onPress1={() => { this.setState({ tabstate: 1 }); this.GetOutdoorPlacesNearby(); }}
          onPress2={() => { this.setState({ tabstate: 2 }); this.GetPlacesNearby(); }}
          onPress3={() => { this.setState({ tabstate: 3 }); this.GetLibrariesNearby(); }}
          tabstate={tabstate}
        />
        <VerRuler height={calcHeight(22)} />
        {
          tabstate == 0 && eventnearbyaata.length > 0 && (
            <View style={styles.content}>
              <View style={styles.headersection}>
                <Text style={styles.titleText1}>
                  {Languages.TRENDING}
                </Text>
                <TouchableOpacity onPress={() => { this.refs.modal1.open(); this.setState({ showbottomtab: 0 }) }}>
                  <Text style={styles.headertext}>
                    {Languages.See_All}
                  </Text>
                </TouchableOpacity>
              </View>
              <VerRuler height={calcHeight(14)} />
              <View style={styles.scrollcontainer}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
                  {
                    eventnearbyaata.map((item, key) => (
                      <ActivityItemComponent
                        name={item.title}
                        image= {{uri:`data:image/jpeg;base64,${item.thumbnail}`}}
                        time={Moment(item.openingTimes[0].startTime).format('HH:MM')+"-"+Moment(item.openingTimes[0].endTime).format('HH:MM')}
                        location={item.location.street}
                        date={Moment(item.openingTimes[0].startTime).format('d MMM')}
                        city={item.location.zipCode}
                        liked={item.liked}
                        key={key}
                        followers={null}
                        online={item.location.city}
                        distance={item.distance}
                        number={item.attendees}
                        likePress={() => this.UpdateUserEvents(item.eventId)}
                        onPress={() => this.goEventDetail(item.eventId)}
                      />
                    ))
                  }
                </ScrollView>
              </View>
              <View style={styles.headersection}>
                <Text style={styles.titleText1}>
                  {Languages.NEAR_YOU}
                </Text>
                <TouchableOpacity onPress={() => { this.refs.modal1.open(); this.setState({ showbottomtab: 0 }) }}>
                  <Text style={styles.headertext}>
                    {Languages.See_All}
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.scrollcontainer}>
                {
                  eventnearbyaata.map((item, key) => key <= 2 && (
                    <NearActivityItemComponent
                      name={item.title}
                      image= {{uri:`data:image/jpeg;base64,${item.thumbnail}`}}
                      time={Moment(item.openingTimes[0].startTime).format('HH:MM')+"-"+Moment(item.openingTimes[0].endTime).format('HH:MM')}
                      location={item.location.street}
                      date={Moment(item.openingTimes[0].startTime).format('d MMM')}
                      city={item.location.zipCode}
                      liked={item.liked}
                      key={key}
                      // followers={item.followers}
                      online={item.location.city}
                      distance={item.distance}
                      number={item.attendees}
                      likePress={() => this.UpdateUserEvents(item.eventId)}
                      onPress={() => this.goEventDetail(item.eventId)}
                    />
                  ))
                }
                <VerRuler height={calcHeight(110)} />
              </ScrollView>
            </View>
          )
        }
        {
          tabstate == 1 && outdoorplacenearbydata.length > 0 && (
            <View style={styles.content}>
              <VerRuler height={calcHeight(0)} />
              <ScrollView style={styles.scrollcontainer1}>
                {
                  DummyData.activity_outdoor_data.map((item, key) => (
                    <OutdoorItemComponent
                      image={item.icon}
                      icon={item.image}
                      title={item.title}
                      location={item.location}
                      type={item.type}
                      key={key}
                      likePress={() => alert('like')}
                      onPress={() => this.props.navigation.navigate('OutdoorDetailScreen')}
                    />
                  ))
                }
                <VerRuler height={calcHeight(20)} />
              </ScrollView>
            </View>
          )
        }
        {
          tabstate == 2 && placesnearbyata.length > 0 && (
            <View style={styles.content}>
              <View style={styles.headersection}>
                <Text style={styles.titleText1}>
                  {Languages.NEAR_YOU}
                </Text>
                <TouchableOpacity onPress={() => { this.refs.modal2.open(); this.setState({ showbottomtab: 0, }) }}>
                  <Text style={styles.headertext}>
                    {Languages.See_All}
                  </Text>
                </TouchableOpacity>
              </View>
              <VerRuler height={calcHeight(14)} />
              <View style={styles.scrollcontainer}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
                  {
                    placesnearbyata.map((item, key) => (
                      <PoolItemComponent
                        name={item.title}
                        image= {{uri:`data:image/jpeg;base64,${item.thumbnail}`}}
                        time={item.time}
                        location={item.location.street}
                        rate={item.rate}
                        city={item.location.zipCode}
                        key={key}
                        status={item.openStatus}
                        online={item.location.city}
                        distance={item.distance}
                        number={item.number}
                        likePress={() => alert('like')}
                        onPress={() => this.goPoolDetail(item.placeId)}
                      />
                    ))
                  }
                </ScrollView>
              </View>
              <VerRuler height={calcHeight(0)} />
              <View style={styles.headersection}>
                <Text style={styles.titleText1}>
                  {Languages.OTHERS}
                </Text>
                <TouchableOpacity onPress={() => { this.refs.modal2.open(); this.setState({ showbottomtab: 0, }) }}>
                  <Text style={styles.headertext}>
                    {Languages.See_All}
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.scrollcontainer}>
                {
                  placesnearbyata.map((item, key) => key <= 2 && (
                    <PoolActivityItemComponent
                      name={item.title}
                      image= {{uri:`data:image/jpeg;base64,${item.thumbnail}`}}
                      time={item.time}
                      location={item.location.street}
                      rate={item.rate}
                      date={item.date}
                      city={item.location.zipCode}
                      liked={item.liked}
                      key={key}
                      status={item.openStatus}
                      online={item.location.city}
                      distance={item.distance}
                      number={item.number}
                      likePress={() => alert('like')}
                      onPress={() => this.props.navigation.navigate('PoolDetailScreen')}
                    />
                  ))
                }
                <VerRuler height={calcHeight(110)} />
              </ScrollView>
            </View>
          )
        }
        {
          tabstate == 3 && librariesnearbydata.length > 0 && (
            <View style={styles.content}>
              <VerRuler height={calcHeight(0)} />
              <View style={styles.headersection}>
                <Text style={styles.titleText1}>
                  {Languages.ALL_LIBRARIES}
                </Text>
                <TouchableOpacity>
                  <Text style={styles.headertext}>
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.scrollcontainer1}>
                {
                  librariesnearbydata.map((item, key) => (
                    <BooksActivityItemComponent
                      name={item.title}
                      image={item.thumbnail}
                      location={item.location.street}
                      rate={item.rate}
                      books={item.newBooks}
                      city={item.location.zipCode}
                      liked={item.liked}
                      key={key}
                      status={item.openStatus}
                      online={item.location.city}
                      likePress={() => alert('like')}
                      onPress={() => this.goLibraryDetail(item.libraryId)}
                    />
                  ))
                }
                <VerRuler height={calcHeight(40)} />
              </ScrollView>
            </View>
          )
        }
        <BottomTabs
          onPress2={() => {
            this.floatingAction.animateButton();
          }}
          onPress0={() => this.props.navigation.navigate('HomeScreen')}
          onPress1={() => this.props.navigation.navigate('ActivityScreen')}
          onPress3={() => this.props.navigation.navigate('ScheduleScreen')}
          onPress4={() => this.props.navigation.navigate('MatterScreen')}
          add_rotate={add_rotate}
          tabstate={1} display={showbottomtab} />
        <Modal onClosed={this.onClose} style={[styles.modal]} position={"bottom"} ref={"modal1"}>
          <TouchableOpacity style={styles.buttonview}>
            <View style={styles.viewimage}></View>
          </TouchableOpacity>
          <VerRuler height={calcHeight(10)} />
          <SeeAllTitle icon={Images.alarm} label={Languages.Coming_Soon} text={Languages.All_Events} />
          <ScrollView style={styles.scrollcontainer}>
            {
              DummyData.near_you_data.map((item, key) => (
                <NearActivityItemComponent
                  name={item.name}
                  image={item.image}
                  time={item.time}
                  location={item.location}
                  date={item.date}
                  city={item.city}
                  liked={item.liked}
                  key={key}
                  followers={item.followers}
                  online={item.online}
                  distance={item.distance}
                  number={item.number}
                  likePress={() => alert('like')}
                  onPress={() => { }}
                />
              ))
            }
            <VerRuler height={calcHeight(50)} />
          </ScrollView>
          <VerRuler height={calcHeight(30)} />
        </Modal>
        <Modal onClosed={this.onClose} style={[styles.modal]} position={"bottom"} ref={"modal2"}>
          <TouchableOpacity style={styles.buttonview}>
            <View style={styles.viewimage}></View>
          </TouchableOpacity>
          <VerRuler height={calcHeight(10)} />
          <SeeAllTitle icon={Images.pool} label={Languages.Swimming_Pools} text={Languages.All_Pools} />
          <ScrollView style={styles.scrollcontainer}>
            {
              DummyData.near_pool_you_data.map((item, key) => (
                <PoolActivityItemComponent
                  name={item.name}
                  image={item.image}
                  time={item.time}
                  location={item.location}
                  rate={item.rate}
                  date={item.date}
                  city={item.city}
                  liked={item.liked}
                  key={key}
                  status={item.status}
                  online={item.online}
                  distance={item.distance}
                  number={item.number}
                  likePress={() => alert('like')}
                  onPress={() => { }}
                />
              ))
            }
            <VerRuler height={calcHeight(50)} />
          </ScrollView>
          <VerRuler height={calcHeight(30)} />
        </Modal>
        <FloatingAction
          ref={(ref) => { this.floatingAction = ref; }}
          actions={Constants.actions}
          position={'center'}
          onPressItem={name => {
            switch (name) {
              case 'bt_question':
                this.props.navigation.navigate('AddMatterScreen');
                this.props.setMatterType(10);
                break;
              case 'bt_error':
                this.props.navigation.navigate('AddErrorReportScreen');
                this.props.setMatterType(20);
                break;
              case 'bt_suggest':
                this.props.navigation.navigate('AddMatterScreen');
                this.props.setMatterType(30);
                break;
              case 'bt_complaint':
                this.props.navigation.navigate('AddMatterScreen');
                this.props.setMatterType(40);
                break;
              default:
                break;
            }
          }}
          buttonSize={40}
          visible={false}
          overlayColor={Colors.override}
          onOpen={() => this.setState({ add_rotate: true })}
          onClose={() => this.setState({ add_rotate: false })}
        />
        <CustomSpinner
          textContent={'Loading...'}
          visible={this.props.loading} />
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  token: state.auth.token,
  email: state.auth.email,
  currRegion: state.auth.currRegion,
  userdata: state.user,
  loading: state.activity.loading,
  eventnearbyaata: state.activity.eventnearbyaata,
  placesnearbyata: state.activity.placesnearbyata,
  outdoorplacenearbydata: state.activity.outdoorplacenearbydata,
  librariesnearbydata: state.activity.librariesnearbydata,
});

const mapDispatchToProps = {
  getUserProfile,
  setMatterType,
  getEventsNearby,
  getPlacesNearby,
  getOutdoorPlacesNearby,
  getLibrariesNearby,
  getEventWithId,
  getPlaceWithId,
  getLibraryWithId,
  updateUserEvents,
};
export default connect(mapStateToProps, mapDispatchToProps)(ActivityScreen);