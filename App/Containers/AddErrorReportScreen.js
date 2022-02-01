import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, YellowBox } from 'react-native'
import {
  AddScrollReportItem,
  VerRuler,
  AddReportItem,
  CustomSpinner
} from '../Components'
import { Images, Languages, Constants, DummyData } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/AddErrorReportScreenStyles'
import { connect } from 'react-redux'
import { getReportsNearbyAPlace, getReportWithId } from 'Actions/Report';
import NavigationService from "Navigation/NavigationService";
import Geocoder from 'react-native-geocoding';
import Moment from 'moment';

Geocoder.init(Constants.Google_Map_API_Key);
class AddErrorReportScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initRegion: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
      },
      spinner: false,
      error_reports_data: [],
      currentAddress: '',
    }
  }

  componentDidMount() {
    this.sub = this.props.navigation.addListener('didFocus', () => this.handleLoadStructure())
  }

  handleLoadStructure = () => {
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
          currentAddress: res[0] + ", " + res[2] + res[1]
        })
      })
      .catch(error => alert(JSON.stringify(error)));
  }

  componentWillUnmount() {
    if (this.sub) this.sub.remove()
  }

  changeLocation = () => {
    NavigationService.navigate('SelectLocationScreen');
  }

  GetReportsNearbyAPlace = () => {
    let { currRegion, email, token } = this.props;
    this.props.getReportsNearbyAPlace({ currRegion, email, token });
  }

  componentDidUpdate(prevProps) {
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
    if (prevProps.error_reports_data !== this.props.error_reports_data) {
      this.setState({ error_reports_data: this.props.error_reports_data })
    }
  }

  goErrorReportDetail = (id) => {
    let { currRegion, email, token } = this.props;
    this.props.getReportWithId({ id, email, token });
  }

  render() {
    let {
      initRegion,
      error_reports_data,
      currentAddress,
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.layout}>
        </View>
        <View style={styles.section}>
          <VerRuler height={calcHeight(35)} />
          <View style={styles.centersection}>
            {
              error_reports_data.length == 0 ?
                <View style={styles.addbuttoncontainer}>
                  <TouchableOpacity
                    onPress={() => NavigationService.navigate('HomeScreen')}>
                    <Image style={styles.arrow_left} source={Images.arrow_left} />
                  </TouchableOpacity>
                  <Text style={styles.titleText}>
                    {Languages.Add_Error_Report}
                  </Text>
                  <View style={styles.arrow_left}>
                  </View>
                </View>
                : <View style={styles.addbar}>
                  <TouchableOpacity
                    onPress={() => NavigationService.navigate('HomeScreen')}
                  >
                    <Image style={styles.arrow_left} source={Images.arrow_left} />
                  </TouchableOpacity>
                  <Text style={styles.titleText1}>
                    {Languages.Add_Error_Report}
                  </Text>
                  <TouchableOpacity
                    onPress={() => this.changeLocation()}
                    style={styles.addbutton}>
                    <Text style={styles.addtext}>
                      {Languages.Add_New}
                    </Text>
                  </TouchableOpacity>
                </View>
            }
            <Text style={styles.text}>
              {Languages.error_reports_in + currentAddress}
            </Text>
            {
              error_reports_data.length == 0 ?
                <AddReportItem
                  onPress={() => this.props.navigation.navigate('SelectLocationScreen')}
                  icon={Images.error_reports}
                  title={Languages.No_Error_reports_in_this_location}
                  text={Languages.Be_the_first_to_raise_an_error___________}
                /> :
                <View style={styles.scrollcontainer}>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                      error_reports_data.map((item, key) => (
                        <AddScrollReportItem
                          title={item.title}
                          text={item.description}
                          date={Moment(item.createdTime).format('DD-MM-YYYY hh:mm')}
                          icon={Images.error_reports}
                          onPress={() => this.goErrorReportDetail(item.id)}
                          key={key} />
                      ))
                    }
                  </ScrollView>
                </View>
            }
          </View>
          <Image style={styles.gradient} source={Images.gradient} />
          <View style={styles.mapcontainer}>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(AddErrorReportScreen);
console.disableYellowBox = true