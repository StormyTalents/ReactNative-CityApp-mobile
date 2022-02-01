import React, { Component, useCallback } from 'react'
import { TouchableOpacity, Text, Image, View, ScrollView, ImageBackground, Linking, Alert } from 'react-native'
import {
  PoolBottomButtons,
  VerRuler,
  Swiper,
  LibraryDetailItem,
} from '../Components'
import { Images, Languages, Colors, DummyData } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/LibraryDetailScreenStyles'
import { connect } from 'react-redux'
import { getUserProfile, setMatterType } from 'Actions/User';
import { getEventsNearby, getPlacesNearby, getOutdoorPlacesNearby, getLibrariesNearby, getEventWithId } from 'Actions/Activity';
class LibraryDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabstate: true,
      tider: false,
      toastShow: false,
      librarydata: {
        location: {

        },
        newBooks: [
          {
            title: '',
            coverImage: '',
          }
        ]
      }
    };

  }

  componentDidMount() {
    this.setState({
      librarydata: this.props.librarydata
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.librarydata !== this.props.librarydata) {
      this.setState({ librarydata: this.props.librarydata })
    }
  }

  visitButton = async(url) => {
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
      librarydata,
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
              DummyData.library_detail_data.map((item, key) => (
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
              <Text style={librarydata.openStatus == 20 ? styles.date1 : styles.date}>
                {librarydata.openStatus == 20 ? Languages.OPEN : Languages.CLOSED}
              </Text>
              <TouchableOpacity style={DummyData.near_you_data[0].liked ? styles.likebutton1 : styles.likebutton} onPress={() => { }}>
                <Image style={DummyData.near_you_data[0].liked ? styles.star1 : styles.star} source={Images.star} />
              </TouchableOpacity>
            </View>
            <Text style={styles.name}>
              {librarydata.title}
            </Text>
            <Text style={styles.location}>
              {librarydata.location.street + ', ' + librarydata.location.zipCode + ' ' + librarydata.location.city}
            </Text>
            <View style={styles.ratecontainer}>
              <Image source={Images.star_yellow} style={[styles.yellowstar, { display: DummyData.activity_book_data[0].rate >= 1 ? 'flex' : 'none' }]} />
              <Image source={Images.star_yellow} style={[styles.yellowstar, { display: DummyData.activity_book_data[0].rate >= 2 ? 'flex' : 'none' }]} />
              <Image source={Images.star_yellow} style={[styles.yellowstar, { display: DummyData.activity_book_data[0].rate >= 3 ? 'flex' : 'none' }]} />
              <Image source={Images.star_yellow} style={[styles.yellowstar, { display: DummyData.activity_book_data[0].rate >= 4 ? 'flex' : 'none' }]} />
              <Image source={Images.star_yellow} style={[styles.yellowstar, { display: DummyData.activity_book_data[0].rate >= 5 ? 'flex' : 'none' }]} />
            </View>
            <VerRuler height={calcHeight(10)} />
            <LibraryDetailItem
              attendees={'1.2k'}
              interested={512}
              lowprice={45}
              highprice={90}
              location={librarydata.location.street + ', ' + librarydata.location.zipCode}
              city={librarydata.location.city}
              liked={DummyData.near_you_data[0].liked}
            />
            <Text style={styles.name1}>
              {Languages.Description}
            </Text>
            <Text style={styles.description}>
              {librarydata.description}
            </Text>
            <VerRuler height={calcHeight(10)} />
          </ScrollView>
          <View style={styles.bottomcontainer}>
            <PoolBottomButtons
              onPress={() => this.visitButton(librarydata.url)}
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
  librarydata: state.activity.librarydata,
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
export default connect(mapStateToProps, mapDispatchToProps)(LibraryDetailScreen);