import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import {
  ColorBGTextButton,
  IconColorButton,
  VerRuler,
  ColorTextButton,
  BackIconLogoButton,
  TextLabel,
  LabelValidInputText1,
  OrLabel,
  BackTextButton
} from '../Components'
import { Images, Languages, ConvertSize } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/ForgotPasswordScreenStyles'
import { connect } from 'react-redux'
import { sendResetPasswordLink } from 'Actions/Auth';
import NavigationService from 'Navigation/NavigationService'
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
class ForgotPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: '',
    }
  }
  sendResetpasswordLinkFunc = () => {
    let {
      email
    } = this.state;
    this.props.sendResetPasswordLink({ email: email })
  }
  render() {
    let { email, password } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.section} >
          <VerRuler height={calcHeight(35)} />
          <BackTextButton icon={Images.arrow_left} label={Languages.Login_with_BankID} onPress={() => NavigationService.navigate('IdentificationScreen')} />
          <VerRuler height={calcHeight(30)} />
          <TextLabel textstyle={styles.firsttitle} label={Languages.Forget_your_password} />
          <VerRuler height={calcHeight(34)} />
          <TextLabel textstyle={styles.secondtitle} label={Languages.Dont_worry_just_fill_in_your_________} />
          <ScrollView>
            <VerRuler height={calcHeight(66)} />
            <LabelValidInputText1
              title={Languages.Email}
              placeholder={'e.g. samir@olivux.se'}
              keyboardType={'email-address'}
              value={email}
              onChangeText={(email) => {
                this.setState({ email });
              }}
              error={false}
            />
            <VerRuler height={calcHeight(52)} />
            <ColorBGTextButton
              loading={this.props.loading}
              onPress={() => this.sendResetpasswordLinkFunc()} 
              opacity={validateEmail(email) ? false : true} label={Languages.Send_Email} />
            <VerRuler height={calcHeight(25)} />
          </ScrollView>
        </View>
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

const mapDispatchToProps = {
  sendResetPasswordLink,
};
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen);
