import React, {Component} from 'react';
import {ScrollView, Text, Image, View} from 'react-native';
import {
  IconButton,
  TextButton,
  VerRuler,
  ColorBorderButton,
  CustomSpinner,
} from '../Components';
import {Images, Languages, ConvertSize, Constants} from '../Themes';
import {calcHeight} from '../Themes/ConvertSize';
import styles from './Styles/LaunchScreenStyles';
import {connect} from 'react-redux';
import {signInWithEmailPassword, registerGuestUser} from 'Actions/Auth';
import NavigationService from 'Navigation/NavigationService';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-community/async-storage';
class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      deviceId: DeviceInfo.getUniqueID(),
      fcmToken: '',
    };
  }
  componentDidMount() {
    this.getToken();
  }
  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    this.setState({
      fcmToken: fcmToken,
    });
  }
  guestLogin = () => {
    let {deviceId, fcmToken} = this.state;
    this.props.registerGuestUser({
      deviceId: deviceId,
      firebaseToken: fcmToken,
      cityName: Constants.cityName,
    });
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} />
        <View style={styles.logoshower}>
          <Image source={Images.smallLogo} style={styles.applogo} />
          <Text style={styles.sectionText}>{Languages.Sundsvalls_Kommun}</Text>
        </View>
        <View style={styles.section}>
          <IconButton
            loading={this.props.loading}
            onPress={() => {
              NavigationService.navigate('IdentificationScreen');
            }}
            icon={Images.bankid}
            label={Languages.Log_In}
          />
          <VerRuler height={calcHeight(15)} />
          <ColorBorderButton
            onPress={() => NavigationService.navigate('LoginWithEmailScreen')}
            label={Languages.Change_Login_Method}
          />
          <VerRuler height={calcHeight(60)} />
          <View style={styles.bottomcontainer}>
            <TextButton
              onPress={() => NavigationService.navigate('HelpSupportScreen')}
              label={Languages.Help_Support}
            />
            <View style={styles.verline}></View>
            <TextButton
              onPress={() => this.guestLogin()}
              label={Languages.I_am_a_Guest}
            />
          </View>
        </View>
        <CustomSpinner textContent={''} visible={this.props.loading1} />
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  loading1: state.auth.loading1,
});

const mapDispatchToProps = {
  signInWithEmailPassword,
  registerGuestUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen);
