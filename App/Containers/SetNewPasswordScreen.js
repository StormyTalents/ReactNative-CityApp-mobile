import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import {
  ColorBGTextButton,
  LogoLabel1,
  VerRuler,
  ColorTextButton,
  BackIconButton,
  TextLabel,
  LabelValidInputText,
  OrLabel,
  IconButton
} from '../Components'
import { Images, Languages, ConvertSize } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/SetNewPasswordScreenStyles'
import { connect } from 'react-redux'
import { signInWithEmailPassword } from 'Actions/Auth';
import NavigationService from 'Navigation/NavigationService'

class SetNewPasswordScreen extends Component {
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
          <VerRuler height={calcHeight(25)} />
          <LogoLabel1 />
          <VerRuler height={calcHeight(50)} />
          <TextLabel textstyle={styles.firsttitle} label={'2/2 ' + Languages.Password.toUpperCase()} />
          <VerRuler height={calcHeight(5)} />
          <TextLabel label={Languages.Set_new_password} />
          <ScrollView>
            <VerRuler height={calcHeight(50)} />
            <LabelValidInputText
              title={Languages.Password}
              // placeholder={Languages.Password}
              value={password}
              onChangeText={(password) => {
                this.setState({ password });
              }}
              show={true}
              error={true}
              errortext={Languages.At_least_8_characters_____________}
            />
            <VerRuler height={calcHeight(15)} />
            <LabelValidInputText
              title={Languages.Repeat_Password}
              // placeholder={Languages.Repeat_Password}
              value={cpassword}
              onChangeText={(cpassword) => {
                this.setState({ cpassword });
              }}
              show={true}
              error={false}
              errortext={Languages.Passwords_dont_match}
            />
            <VerRuler height={calcHeight(45)} />
            <LabelValidInputText
              title={Languages.Mobile_number}
              // placeholder={Languages.Mobile_number}
              value={password}
              onChangeText={(password) => {
                this.setState({ password });
              }}
              keyboardType={'phone-pad'}
              show={false}
              error={true}
              errortext={Languages.e_g}
            />
            <VerRuler height={calcHeight(57)} />
            <ColorBGTextButton onPress={() => NavigationService.navigate('SetNewPasswordSuccessScreen')} opacity={email !== '' ? false : true} label={Languages.verify} />
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
export default connect(mapStateToProps, mapDispatchToProps)(SetNewPasswordScreen);
