import React, { Component } from 'react'
import { Text, ImageBackground, Image, View } from 'react-native'
import {
  BackButton,
  VerRuler,
  BlueIconButton,
  LabelButton,
  InputText,
  LabelInputText,
} from '../Components'
import { Images, Languages, ConvertSize, DummyData } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/BasicInfoScreenStyles'
import { connect } from 'react-redux'
import { getUserProfile } from 'Actions/User';
import NavigationService from "Navigation/NavigationService";

class BasicInfoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail_data: {},
      userdata: {
        address: {},

      },
    }
  }
  componentDidMount() {
    this.sub = this.props.navigation.addListener('didFocus', () => this.handleLoadStructure())
  }
  componentDidUpdate(prevProps) {
    if (prevProps.userdata !== this.props.userdata) {
      this.setState({ userdata: this.props.userdata })
    }
  }
  handleLoadStructure = () => {
    this.props.getUserProfile({ email: this.props.email, token: this.props.token })
  }
  componentWillUnmount() {
    if (this.sub) this.sub.remove()
  }
  render() {
    let {
      userdata
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.section}>
          <VerRuler height={calcHeight(60)} />
          <LabelButton label={Languages.Basic_Info} onPress={() => this.props.navigation.navigate('AccountScreen')} icon={Images.arrow_left} />
          {/* <VerRuler height={calcHeight(15)} /> */}
          {/* <BackButton onPress={() => this.props.navigation.navigate('AccountScreen')} icon={Images.arrow_back} label={Languages.Main_Menu} /> */}
          <VerRuler height={calcHeight(40)} />
          <ImageBackground source={Images.bg_basic_info} style={styles.bg_basic_info} >
            {
              !userdata.profileImage ? <View style={styles.avatarcontainer}>
                <Image source={Images.user} style={styles.avatar} />
              </View> : <Image source={{ uri: `data:image/jpeg;base64,${userdata.profileImage}` }} style={[styles.avatarcontainer, { resizeMode: 'cover' }]} />
            }
          </ImageBackground>
          <VerRuler height={calcHeight(15)} />
          <Text style={styles.nameofuser}>
            {userdata.firstname + ' ' + userdata.surname}
          </Text>
          <LabelInputText placeholder={Languages.Email_Address} label={Languages.Email_Address} value={userdata.email} />
          <VerRuler height={calcHeight(16)} />
          <LabelInputText placeholder={Languages.Phone_Number} label={Languages.Phone_Number} value={userdata.phoneNumber} />
          <VerRuler height={calcHeight(16)} />
          <LabelInputText placeholder={Languages.Address} label={Languages.Address} value={userdata.address == null ? '' : userdata.address.street + ", " + userdata.address.zipCode + " " + userdata.address.city} />
          <VerRuler height={calcHeight(8)} />
          <View style={styles.buttonbar}>
            <BlueIconButton onPress={() => NavigationService.navigate('EditInfoScreen')} icon={Images.edit_blue} label={Languages.Edit} />
          </View>
        </View>
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  token: state.auth.token,
  email: state.auth.email,
  userdata: state.user,
});

const mapDispatchToProps = {
  getUserProfile,
};
export default connect(mapStateToProps, mapDispatchToProps)(BasicInfoScreen);