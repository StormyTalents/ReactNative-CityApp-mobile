import React, {Component} from 'react';
import {ScrollView, Text, Image, View} from 'react-native';
import {
  ColorBGTextButton,
  IconColorButton,
  VerRuler,
  ColorTextButton,
  LabelValidInputMaskText,
  TextLabel,
  LabelValidInputText,
  OrLabel,
  LabelValidInputText1,
} from '../Components';
import {Images, Languages, ConvertSize} from '../Themes';
import {calcHeight} from '../Themes/ConvertSize';
import styles from './Styles/CheckEmailScreenStyles';
import {connect} from 'react-redux';
import {signInWithEmailPassword} from 'Actions/Auth';
import NavigationService from 'Navigation/NavigationService';
import {isValidEmail} from 'Helpers/Validations';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Modal from 'react-native-modalbox';

class CheckEmailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: '',
      loginerror: false,
    };
  }
  signIn = () => {
    NavigationService.navigate('GetstartedScreen');
    // let {email, password} = this.state;
    // if (isValidEmail(email)) {
    //   alert('Email is invaild type');
    //   return;
    // }
    // this.props.signInWithEmailPassword({email: email, password: password});
  };
  // componentDidMount() {
  //   this.setState({ loginerror: this.props.loginerror })
  //   this.props.signInWithEmailPassword({ email: 'jin.ge@olivux.se', password: '12345d_',rememberMe:true })
  // }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.loginerror !== this.props.loginerror) {
  //     this.setState({ loginerror: this.props.loginerror })
  //   }
  // }
  render() {
    let {email, password, loginerror} = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.section}>
          <VerRuler height={calcHeight(35)} />
          <Image source={Images.check_email} style={styles.check_email} />
          {/* <BackTextButton
            icon={Images.arrow_left}
            label={Languages.Login_with_BankID}
            onPress={() => NavigationService.navigate('IdentificationScreen')}
          /> */}
          <VerRuler height={calcHeight(10)} />
          <TextLabel label={Languages.Check_your_Email} />
          <VerRuler height={calcHeight(30)} />
          <ScrollView>
            <TouchableOpacity
              onPress={() => this.refs.modal1.open()}
              style={styles.helpButton}>
              <Image source={Images.help} style={styles.helpIcon} />
            </TouchableOpacity>
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
            <VerRuler height={calcHeight(30)} />
            <LabelValidInputMaskText
              title={Languages.Phone_Number}
              placeholder={'+46 xx xxx xx xx'}
              value={password}
              onChangeText={(password) => {
                this.setState({password});
              }}
              onChangeText={(formatted, extracted) => {
                this.setState({password: formatted});
                console.log(extracted); // 1234567890
              }}
              show={true}
              keyboardType={'phone-pad'}
              error={loginerror}
              errortext={Languages.You_have_entered_incorrect_password}
            />
            <VerRuler height={calcHeight(50)} />
            <ColorBGTextButton
              loading={this.props.loading}
              onPress={() => this.signIn()}
              opacity={email !== '' && password !== '' ? false : true}
              label={Languages.Complete}
            />
            <VerRuler height={calcHeight(25)} />
          </ScrollView>
        </View>
        <Modal style={[styles.modal]} position={'bottom'} ref={'modal1'}>
          <View style={styles.modalContainter}>
            <VerRuler height={calcHeight(27)} />
            <Image source={Images.check_email} style={styles.check_email} />
            <Text style={styles.modalTitle}>
              {Languages.Why_do_we_ask_for_the_____}
            </Text>
            <Text style={styles.modalText}>
              {Languages.In_order_to_make_sure_whether____________}
            </Text>
          </View>
        </Modal>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  loginerror: state.auth.loginerror,
});

const mapDispatchToProps = {
  signInWithEmailPassword,
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckEmailScreen);
