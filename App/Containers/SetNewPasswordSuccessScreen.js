import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import {
  ColorBGTextButton,
  LogoLabel,
  VerRuler,
  ColorTextButton,
  BackIconButton,
  TextLabel,
  LabelValidInputText,
  OrLabel,
  IconButton
} from '../Components'
import { Images, Languages, Colors } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/SetNewPasswordSuccessScreenStyles'
import { connect } from 'react-redux'
import { signInWithEmailPassword } from 'Actions/Auth';
import NavigationService from 'Navigation/NavigationService'

class SetNewPasswordSuccessScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: '',
      cpassword: '',
    }
  }
  // componentDidUpdate(){
  //   this.is_email()
  // }
  // is_email = () => {
  //   let { email } = this.state;
  //   alert(isValidEmail(email));
  // }
  render() {
    let { email, password, cpassword } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.section} >
          <VerRuler height={calcHeight(35)} />
          <BackIconButton onPress={() => NavigationService.goBack()} />
          <VerRuler height={calcHeight(50)} />
          <View style={styles.barcontainer}>
            <View style={[styles.barcontent, { borderBottomColor: Colors.black1 }]}>
              <Image style={[styles.icon]} source={Images.email_valid} />
              <Text style={styles.bartext}>
                {`1/2 ${Languages.registeration}`}
              </Text>
            </View>
            <View style={[styles.barcontent, { borderBottomColor: Colors.black1 }]}>
              <Image style={[styles.icon]} source={Images.email_valid} />
              <Text style={[styles.bartext]}>
                {`2/2 ${Languages.Password.toUpperCase()}`}
              </Text>
            </View>
          </View>
          <VerRuler height={calcHeight(50)} />
          <ScrollView>
            <Text style={styles.firsttitle}>
              {
                Languages.Thank_you_your_account_has_been_created_successfully
              }
            </Text>
            <VerRuler height={calcHeight(129)} />
            <ColorBGTextButton onPress={() => NavigationService.navigate('LaunchScreen')} opacity={false} label={Languages.Back_to_Citiapp} />
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
  signInWithEmailPassword,
};
export default connect(mapStateToProps, mapDispatchToProps)(SetNewPasswordSuccessScreen);
