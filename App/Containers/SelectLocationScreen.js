import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import {
  LocationItemButton,
  VerRuler,
  CustomSpinner,
} from '../Components'
import { Images, Languages, Colors, DummyData, Constants } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/SelectLocationScreenStyles'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { connect } from 'react-redux'
import { getReportsNearbyAPlace, getReportWithId } from 'Actions/Report';
import { setCustomLocation } from 'Actions/User';
import NavigationService from "Navigation/NavigationService";
import Geocoder from 'react-native-geocoding';
import Moment from 'moment';
class SelectLocationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error_reports_data: [],
      initRegion: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
      },
      currentAddress: '',
      street: '',
      zipCode: '',
      city: '',
      country: '',
    }
  }
  componentDidMount() {
    let { currRegion } = this.props;
    let currRegion1 = {
      latitude: currRegion.latitude,
      longitude: currRegion.longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.015,
    };
    this.setState({
      initRegion: currRegion1
    })
    this.GetReportsNearbyAPlace();
    Geocoder.from(this.props.currRegion)
      .then(json => {
        var addressComponent = json.results[0].formatted_address;
        var res = addressComponent.split(",");
        this.setState({
          currentAddress: res[0] + ", " + res[2] + res[1],
          street: res[0],
          zipCode: res[2],
          city: res[1],
          country: res[3],
        })
      })
      .catch(error => alert(JSON.stringify(error)));
  }
  GetReportsNearbyAPlace = () => {
    let { currRegion, email, token } = this.props;
    this.props.getReportsNearbyAPlace({ currRegion, email, token });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.error_reports_data !== this.props.error_reports_data) {
      this.setState({ error_reports_data: this.props.error_reports_data })
    }
    if (prevProps.currRegion !== this.props.currRegion) {
      let { currRegion } = this.props;
      let currRegion1 = {
        latitude: currRegion.latitude,
        longitude: currRegion.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
      };
      this.setState({ initRegion: currRegion1 })
    }
  }
  seletedItem = (m, k) => {
    let { currRegion } = this.props;
    let {
      street, zipCode, city, country
    } = this.state;
    switch (m) {
      case 0:
        this.props.setCustomLocation({
          custom_address: {
            street: street,
            zipCode: zipCode,
            city: city,
            country: country,
            latitude: currRegion.latitude,
            longitude: currRegion.longitude,
          },
          custom_location: true,
        })
        NavigationService.navigate('AddMatterScreen')
        break;
      case 1:
        this.props.setCustomLocation({
          custom_address: {
            street: k.street,
            zipCode: k.zipCode,
            city: k.city,
            country: k.country,
            latitude: k.latitude,
            longitude: k.longitude,
          },
          custom_location: true,
        })
        NavigationService.navigate('AddMatterScreen')
        break;
      case 2:
        this.props.setCustomLocation({
          custom_address: {
            street: k.address_components[0].short_name,
            zipCode: k.address_components[2].short_name,
            city: k.address_components[1].short_name,
            country: k.address_components[3].short_name,
            latitude: k.geometry.location.lat,
            longitude: k.geometry.location.lng,
          },
          custom_location: true,
        })
        NavigationService.navigate('AddMatterScreen')
        break;
      default:
        break;
    }
  }
  render() {
    let {
      error_reports_data,
      currentAddress,
      initRegion,
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.layout}>
        </View>
        <View style={styles.section}>
          <VerRuler height={calcHeight(20)} />
          <View style={styles.centersection}>
            {
              <View style={styles.scrollcontainer}>
                <ScrollView>
                  <GooglePlacesAutocomplete
                    placeholder={'Discover Location'}
                    minLength={2} // minimum length of text to search
                    autoFocus={false}
                    returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                    keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
                    listViewDisplayed='auto'    // true/false/undefined
                    fetchDetails={true}
                    renderDescription={row => row.description} // custom description render
                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                      this.seletedItem(2, details)
                    }}
                    // getDefaultValue={() => this.state.location}
                    query={{
                      // available options: https://developers.google.com/places/web-service/autocomplete
                      // key: Constants.Google_Map_API_Key,
                      language: 'en', // language of the results
                      key: "AIzaSyAvi8izJBiY5SXocu2gM-UH0cVr6LDpGks",
                      types: '(cities)' // default: 'geocode'
                    }}
                    styles={{
                      textInputContainer: styles.textInputContainer,
                      textInput: styles.textInput,
                      description: styles.descriptiontextt,
                      predefinedPlacesDescription: styles.predefinedPlacesDescription,
                      poweredContainer: styles.poweredContainer,
                    }}
                    textInputProps={{
                      clearButtonMode: false
                    }}
                    currentLocation={false}
                    // currentLocationLabel='Current location'
                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                    GoogleReverseGeocodingQuery={{
                      // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                    }}
                    GooglePlacesSearchQuery={{
                      // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                      rankby: 'distance',
                      type: 'cafe'
                    }}
                    GooglePlacesDetailsQuery={{
                      // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                      fields: ['formatted_address', 'geometry'],
                    }}
                    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                    // predefinedPlaces={[homePlace, workPlace]}
                    debounce={0} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                    renderLeftButton={() => <Image source={Images.search} style={styles.lefticon} />}
                    renderRightButton={() => <Image source={Images.voice} style={styles.righticon} />}
                  />
                  <Text style={styles.bigtitle}>
                    {Languages.Where_is_it_happening}
                  </Text>
                  <Text style={styles.smalltitle}>
                    {Languages.current_location.toUpperCase()}
                  </Text>
                  <LocationItemButton
                    name={currentAddress}
                    icon={Images.checked}
                    onPress={() => this.seletedItem(0, currentAddress)} />
                  <Text style={styles.smalltitle}>
                    {Languages.recent.toUpperCase()}
                  </Text>
                  {
                    error_reports_data.map((item0, key0) => (
                      <LocationItemButton
                        name={item0.location.street + ', ' + item0.location.zipCode + ' ' + item0.location.city}
                        icon={Images.checked}
                        onPress={() => this.seletedItem(1, item0.location)}
                        key={key0} />
                    ))
                  }
                </ScrollView>
              </View>
            }
          </View>
          <Image style={styles.gradient} source={Images.gradient} />
          <View style={styles.mapcontainer}>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={initRegion}
            >
              <Marker
                coordinate={{
                  latitude: initRegion.latitude,
                  longitude: initRegion.longitude,
                }}>
                <View style={styles.markericon}>
                  <Image source={Images.marker} style={styles.marker} />
                </View>
              </Marker>
              {
                error_reports_data.length !== 0 && error_reports_data.map((item1, key1) => key1 < 2 && (
                  <Marker
                    key={key1}
                    coordinate={{
                      latitude: item1.location.latitude,
                      longitude: item1.location.longitude,
                    }}>
                    <Image source={Images.pin_recent} style={styles.marker11} />
                  </Marker>
                ))
              }
            </MapView>
          </View>
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
  loading: state.report.loading,
  error_reports_data: state.report.error_reports_data,
});

const mapDispatchToProps = {
  getReportsNearbyAPlace,
  getReportWithId,
  setCustomLocation,
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectLocationScreen);
console.disableYellowBox = true