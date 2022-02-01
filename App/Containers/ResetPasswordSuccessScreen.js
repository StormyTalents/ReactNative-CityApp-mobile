import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import {
  ColorBGTextButton,
  LogoLabel,
  VerRuler,
} from '../Components'
import { Images, Languages, ConvertSize } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/ResetPasswordSuccessScreenStyles'
import { connect } from 'react-redux'
import { signInWithEmailPassword } from 'Actions/Auth';
import NavigationService from 'Navigation/NavigationService'

class ResetPasswordSuccessScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: '',
      cpassword: '',
    }
  }
 
  render() {
    let { email, password, cpassword } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.section} >
          <VerRuler height={calcHeight(35)} />
          <LogoLabel />
          <VerRuler height={calcHeight(200)} />
          <ScrollView>
            <VerRuler height={calcHeight(76)} />
            <Text style={styles.firsttitle}>
              {
                Languages.Thank_you_your_password_has_been_changed_successfully
              }
            </Text>
            <VerRuler height={calcHeight(129)} />
            <ColorBGTextButton onPress={() => NavigationService.navigate('ResetPasswordScreen')} opacity={false} label={Languages.Back_to_Citiapp} />
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
export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordSuccessScreen);
