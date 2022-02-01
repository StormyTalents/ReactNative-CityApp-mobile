import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import {
  ColorBGTextButton,
  IconColorButton,
  VerRuler,
  ColorTextButton,
  BackTextButton,
  TextLabel,
  LabelValidInputText,
  OrLabel,
  LabelValidInputText1
} from '../Components'
import { Images, Languages, ConvertSize } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/LoginWithEmailScreenStyles'
import { connect } from 'react-redux'
import { signInWithEmailPassword } from 'Actions/Auth';
import NavigationService from 'Navigation/NavigationService'
import { isValidEmail } from 'Helpers/Validations';
class LoginWithEmailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: '',
      loginerror: false,
    }
  }
  signIn = () => {
    let {
      email,
      password
    } = this.state;
    if (isValidEmail(email)) {
      alert('Email is invaild type')
      return
    }
    this.props.signInWithEmailPassword({ email: email, password: password })
  }
  componentDidMount() {
    // this.setState({ loginerror: this.props.loginerror })
    // this.props.signInWithEmailPassword({ email: 'jin.ge@olivux.se', password: '12345d_',rememberMe:true })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.loginerror !== this.props.loginerror) {
      this.setState({ loginerror: this.props.loginerror })
    }
  }
  render() {
    let { email, password, loginerror } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.section} >
          <VerRuler height={calcHeight(35)} />
          <BackTextButton icon={Images.arrow_left} label={Languages.Login_with_BankID} onPress={() => NavigationService.navigate('IdentificationScreen')} />
          <VerRuler height={calcHeight(30)} />
          <TextLabel label={Languages.LogIn_With_Email} />
          <ScrollView>
            <VerRuler height={calcHeight(15)} />
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
            <VerRuler height={calcHeight(30)} />
            <LabelValidInputText
              title={Languages.Password}
              placeholder={''}
              value={password}
              onChangeText={(password) => {
                this.setState({ password });
              }}
              show={true}
              error={loginerror}
              errortext={Languages.You_have_entered_incorrect_password}
            />
            <ColorTextButton onPress={() => NavigationService.navigate('ForgotPasswordScreen')} textstyle={styles.forgottext} buttonstyle={styles.forgotbutton} label={Languages.Forgot_Password} />
            <VerRuler height={calcHeight(23)} />
            <ColorBGTextButton
              loading={this.props.loading}
              onPress={() =>
                this.signIn()
              } opacity={email !== '' && password !== '' ? false : true} label={Languages.Log_In} />
            <VerRuler height={calcHeight(25)} />
            <View style={styles.signupbuttoncontainer}>
              <Text style={styles.signuptext}>
                {Languages.Dont_you_have_an_account}
              </Text>
              <ColorTextButton onPress={() => NavigationService.navigate('RegisterSendEmailScreen')} label={Languages.Register_Now} />
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  loginerror: state.auth.loginerror,
});

const mapDispatchToProps = {
  signInWithEmailPassword,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginWithEmailScreen);
