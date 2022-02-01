import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View, ScrollView } from 'react-native'
import {
  VerRuler,
  NearActivityItemComponent,
  FavoriteTitle,
  CustomSpinner,
  ActivityItemComponent,
  PoolItemComponent,
  PoolActivityItemComponent,
  OutdoorItemComponent,
  BooksActivityItemComponent,
} from '../Components'
import { Images, Languages, Constants, DummyData, Colors } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/FavorteScreenStyles'
import { connect } from 'react-redux'
import { getUserFavoriteEvents } from 'Actions/Reporter';
import NavigationService from "Navigation/NavigationService";
import Moment from 'moment';

class FavorteScreen extends Component {
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
      favoritedata: [],
      eventnearbyaata: [],
      placesnearbyata: [],
      librariesnearbydata: [],
      outdoorplacenearbydata: [],
    };
  }

  componentDidMount() {
    this.GetUserFavoriteEvents();
    this.setState({
      eventnearbyaata: this.props.eventnearbyaata,
      placesnearbyata: this.props.placesnearbyata,
      librariesnearbydata: this.props.librariesnearbydata,
      outdoorplacenearbydata: this.props.outdoorplacenearbydata,
    });
  }

  GetUserFavoriteEvents = () => {
    let { email, token } = this.props;
    this.props.getUserFavoriteEvents({ email, token });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.favoritedata !== this.props.favoritedata) {
      this.setState({ favoritedata: this.props.favoritedata })
    }
    if (prevProps.eventnearbyaata !== this.props.eventnearbyaata) {
      this.setState({ eventnearbyaata: this.props.eventnearbyaata })
    }
    if (prevProps.placesnearbyata !== this.props.placesnearbyata) {
      this.setState({ placesnearbyata: this.props.placesnearbyata })
    }
    if (prevProps.librariesnearbydata !== this.props.librariesnearbydata) {
      this.setState({ librariesnearbydata: this.props.librariesnearbydata })
    }
    if (prevProps.outdoorplacenearbydata !== this.props.outdoorplacenearbydata) {
      this.setState({ outdoorplacenearbydata: this.props.outdoorplacenearbydata })
    }
  }

  render() {
    let {
      favoritedata,
      eventnearbyaata,
      placesnearbyata,
      outdoorplacenearbydata,
      librariesnearbydata
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={[styles.modal]}>
          <TouchableOpacity onPress={() => NavigationService.navigate('ActivityScreen')} style={styles.buttonview}>
            <View style={styles.viewimage}></View>
          </TouchableOpacity>
          <VerRuler height={calcHeight(10)} />
          <FavoriteTitle icon={Images.pools_lakes} label={Languages.Pools_Lakes} text={Languages.Favortes} />
          <ScrollView style={styles.scrollcontainer}>
            <View style={styles.bottomcontainer}>
              <View style={styles.grayline}></View>
              <View style={styles.centeritem}>
                <Image style={styles.iconx} source={Images.pools_lakes} />
                <Text style={styles.textx}>
                  {Languages.Events}
                </Text>
              </View>
              <View style={styles.grayline}></View>
            </View>
            {
              eventnearbyaata.map((item, key) => favoritedata.includes(item.eventId) && (
                <NearActivityItemComponent
                  style={eventnearbyaata.length - 1 == key ? styles.withoutborder : {}}
                  name={item.title}
                  image={{ uri: `data:image/jpeg;base64,${item.thumbnail}` }}
                  time={Moment(item.openingTimes[0].startTime).format('HH:MM') + "-" + Moment(item.openingTimes[0].endTime).format('HH:MM')}
                  location={item.location.street}
                  date={Moment(item.openingTimes[0].startTime).format('d MMM')}
                  city={item.location.zipCode}
                  liked={true}
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
            <View style={styles.bottomcontainer}>
              <View style={styles.grayline}></View>
              <View style={styles.centeritem}>
                <Image style={styles.iconx} source={Images.pools_lakes} />
                <Text style={styles.textx}>
                  {Languages.Pools_Lakes}
                </Text>
              </View>
              <View style={styles.grayline}></View>
            </View>
         
            <View style={styles.bottomcontainer}>
              <View style={styles.grayline}></View>
              <View style={styles.centeritem}>
                <Image style={styles.iconx} source={Images.books_libraries} />
                <Text style={styles.textx}>
                  {Languages.Books_Libraries}
                </Text>
              </View>
              <View style={styles.grayline}></View>
            </View>
           
            <View style={styles.bottomcontainer}>
              <View style={styles.grayline}></View>
              <View style={styles.centeritem}>
                <Image style={styles.iconx} source={Images.outdoor_activities} />
                <Text style={styles.textx}>
                  {Languages.Outdoor_activities}
                </Text>
              </View>
              <View style={styles.grayline}></View>
            </View>
         
            <VerRuler height={calcHeight(10)} />
          </ScrollView>
        </View>
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
  loading: state.reporter.loading,
  favoritedata: state.reporter.favoritedata,
  librariesnearbydata: state.activity.librariesnearbydata,
  eventnearbyaata: state.activity.eventnearbyaata,
  placesnearbyata: state.activity.placesnearbyata,
  outdoorplacenearbydata: state.activity.outdoorplacenearbydata,
});

const mapDispatchToProps = {
  getUserFavoriteEvents,
};
export default connect(mapStateToProps, mapDispatchToProps)(FavorteScreen);