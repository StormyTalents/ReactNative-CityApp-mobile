import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import {
  ColorBGTextButton,
  LogoLabel,
  VerRuler,
  TextLabel,
  LabelValidInputText,
} from '../Components'
import { Images, Languages, ConvertSize } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/ResetPasswordScreenStyles'
import { connect } from 'react-redux'
import { resetPassword } from 'Actions/Auth';
import NavigationService from 'Navigation/NavigationService'

class ResetPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: '',
      cpassword: '',
    }
  }

  resetPassword=()=>{
    let {
      password,
      cpassword,
    } = this.state;
    this.props.resetPassword({})
  }
  
  render() {
    let { email, password, cpassword } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.section} >
          <VerRuler height={calcHeight(35)} />
          <LogoLabel />
          <VerRuler height={calcHeight(30)} />
          <TextLabel textstyle={styles.firsttitle} label={Languages.Reset_Password} />
          <ScrollView>
            <VerRuler height={calcHeight(76)} />
            <LabelValidInputText
              title={Languages.Password}
              placeholder={Languages.Password}
              value={password}
              onChangeText={(password) => {
                this.setState({ password });
              }}
              show={true}
              error={true}
              errortext={Languages.At_least_8_characters_____________}
            />
            <VerRuler height={calcHeight(34)} />
            <LabelValidInputText
              title={Languages.Repeat_Password}
              placeholder={Languages.Repeat_Password}
              value={cpassword}
              onChangeText={(cpassword) => {
                this.setState({ cpassword });
              }}
              show={true}
              error={false}
              errortext={Languages.Passwords_dont_match} 
            />
            <VerRuler height={calcHeight(57)} />
            <ColorBGTextButton onPress={() => NavigationService.navigate('ResetPasswordSuccessScreen')} opacity={password !== '' && cpassword !== '' ? false : true} label={Languages.Change_Password} />
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
  resetPassword,
};
export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordScreen);
