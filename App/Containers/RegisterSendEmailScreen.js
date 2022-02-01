import React, {Component} from 'react';
import {ScrollView, Text, Image, View} from 'react-native';
import {
  ColorBGTextButton,
  VerRuler,
  BackIconButton,
  TextLabel,
  LabelValidInputText,
  LabelValidInputText1,
} from '../Components';
import DeviceInfo from 'react-native-device-info';
import {Images, Languages, ConvertSize, Constants} from '../Themes';
import {calcHeight} from '../Themes/ConvertSize';
import styles from './Styles/RegisterSendEmailScreenStyles';
import {connect} from 'react-redux';
import {registerSendEmail} from 'Actions/Auth';
import NavigationService from 'Navigation/NavigationService';
import AsyncStorage from '@react-native-community/async-storage';

class RegisterSendEmailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      firstname: '',
      surname: '',
      deviceId: DeviceInfo.getUniqueID(),
      fcmToken:'',
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
  sendVerificationLink = () => {
    let {surname, email,fcmToken, firstname, deviceId} = this.state;
    this.props.registerSendEmail({
      email: email,
      firstname: firstname,
      surname: surname,
      firebaseToken:fcmToken,
      deviceId,
      cityName: Constants.cityName,
    });
  };

  render() {
    let {email, firstname, surname} = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.section}>
          <VerRuler height={calcHeight(35)} />
          <BackIconButton onPress={() => NavigationService.goBack()} />
          <VerRuler height={calcHeight(30)} />
          <TextLabel
            textstyle={styles.firsttitle}
            label={'1/2 ' + Languages.registeration}
          />
          <VerRuler height={calcHeight(5)} />
          <TextLabel label={Languages.Add_your_email} />
          <ScrollView>
            <VerRuler height={calcHeight(27)} />
            <LabelValidInputText1
              title={Languages.Email}
              placeholder={'e.g. samir@olivux.se'}
              keyboardType={'email-address'}
              value={email}
              onChangeText={(email) => {
                this.setState({email});
              }}
              error={false}
            />
            <VerRuler height={calcHeight(15)} />
            <LabelValidInputText
              title={Languages.First_Name}
              placeholder={'Samir'}
              value={firstname}
              onChangeText={(firstname) => {
                this.setState({firstname});
              }}
            />
            <VerRuler height={calcHeight(15)} />
            <LabelValidInputText
              title={Languages.Last_Name}
              placeholder={'Shnino'}
              value={surname}
              onChangeText={(surname) => {
                this.setState({surname});
              }}
            />
            <VerRuler height={calcHeight(23)} />
            <ColorBGTextButton
              loading={this.props.loading}
              onPress={() => this.sendVerificationLink()}
              opacity={
                email !== '' && firstname !== '' && surname !== ''
                  ? false
                  : true
              }
              label={Languages.Create_my_account}
            />
            <VerRuler height={calcHeight(25)} />
          </ScrollView>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

const mapDispatchToProps = {
  registerSendEmail,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterSendEmailScreen);
