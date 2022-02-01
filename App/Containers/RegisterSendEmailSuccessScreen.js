import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import {
  ColorBGTextButton,
  VerRuler,
  BackIconButton,
  TextLabel,
} from '../Components'
import { Images, Languages, Colors } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/RegisterSendEmailSuccessScreenStyles'
import { connect } from 'react-redux'
import { signInWithEmailPassword } from 'Actions/Auth';
import NavigationService from 'Navigation/NavigationService'

class RegisterSendEmailSuccessScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: '',
    }
  }

  render() {
    let { email, password } = this.state;
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
            <View style={styles.barcontent}>
              <Text style={[styles.bartext, { color: Colors.black3 }]}>
                {`2/2 ${Languages.Password.toUpperCase()}`}
              </Text>
            </View>
          </View>
          <VerRuler height={calcHeight(25)} />
          <TextLabel textstyle={styles.firsttitle} label={Languages.We_have_sent_you_a_confirmation_email_please__________} />
          <VerRuler height={calcHeight(100)} />
          <ScrollView>
            <ColorBGTextButton onPress={() => NavigationService.navigate('LoginWithEmailScreen')} opacity={false} label={Languages.Back_to_login} />
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
export default connect(mapStateToProps, mapDispatchToProps)(RegisterSendEmailSuccessScreen);
