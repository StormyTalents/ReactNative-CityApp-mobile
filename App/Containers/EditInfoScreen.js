import React, { Component } from 'react'
import { ActivityIndicator, Text, Image, View, TouchableOpacity } from 'react-native'
import {
  VerRuler,
  CustomSpinner,
  BlueIconButton,
  BorderInputText,
} from '../Components'
import { Images, Languages, ConvertSize, Constants } from '../Themes'
import { calcHeight, calcWidth } from '../Themes/ConvertSize'
import styles from './Styles/EditInfoScreenStyles'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { connect } from 'react-redux'
import { getUserProfile, editUserProfile } from 'Actions/User';
import { uploadProfileImage } from 'Actions/Image';
import NavigationService from "Navigation/NavigationService";
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
class EditInfoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: '',
      userdata: {
        address: {

        }
      },
      image: null,
      imageId: null,
      firstname: '',
      surname: '',
      email: '',
      phoneNumber: '',
      street: '',
      zipCode: '',
      city: '',
    };

  }
  getImage = () => {
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };
        // console.log(source);
        this.setState({
          avatarSource: source,
        });
        this.uploadImage(response);
      }
    });
  }
  uploadImage = async (response) => {
    let { email, token } = this.props;
    let imageName = response.fileName;
    let file = response.uri;
    this.props.uploadProfileImage({ email, token, imageName, file });
  }
  componentDidMount() {
    this.setState({
      userdata: this.props.userdata,
      image: this.props.image,
      imageId: this.props.imageId,
    })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.userdata !== this.props.userdata) {
      this.setState({ userdata: this.props.userdata })
    }
    if (prevProps.imageId !== this.props.imageId) {
      this.setState({ imageId: this.props.imageId })
    }
    if (prevProps.image !== this.props.image) {
      this.setState({ image: this.props.image })
    }
  }
  EditUserProfile = () => {
    if (this.props.loading) { return; }
    let {
      userdata,
      firstname,
      surname,
      email,
      phoneNumber,
      street,
      zipCode,
      city,
      image,
      imageId,
    } = this.state;
    this.props.editUserProfile({
      username: userdata.username,
      firstname: firstname == '' ? userdata.firstname : firstname,
      surname: surname == '' ? userdata.surname : surname,
      email: email == '' ? userdata.email : email,
      phoneNumber: phoneNumber == '' ? userdata.phoneNumber : phoneNumber,
      token: this.props.token,
      address: {
        street: street,
        zipCode: zipCode,
        city: city,
        country: userdata.address == null ? '' : userdata.address.country,
      },
      hasChildren: userdata.hasChildren,
      profileImageId: imageId == null ? userdata.profileImageId : imageId,
    });
  }
  render() {
    let {
      avatarSource,
      userdata,
      image,
      imageId,
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.layout}>
        </View>
        <View style={styles.section}>
          <VerRuler height={calcHeight(30)} />
          <View style={styles.buttongroup}>
            <TouchableOpacity onPress={() => NavigationService.navigate('BasicInfoScreen')}>
              <Text style={styles.cancel1}>
                {Languages.Cancel}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.edit_info}>
                {Languages.Edit_Info}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.EditUserProfile()}>
              <Text style={styles.cancel}>
                {Languages.Save}
              </Text>
            </TouchableOpacity>
          </View>
          <VerRuler height={calcHeight(52)} />
          <View style={styles.sectionone}>
            <View style={styles.leftpart}>
              {
                avatarSource == '' && !userdata.profileImage ?
                  <View style={styles.imageitem}>
                    <Image style={styles.usericon} source={Images.user} />
                  </View> :
                  <Image style={styles.imageitem} source={avatarSource !== '' ? avatarSource : { uri: `data:image/jpeg;base64,${userdata.profileImage}` }} />
              }
              <Text style={styles.profile}>
                {Languages.Profile_Picture}
              </Text>
            </View>
            <BlueIconButton loading={this.props.loading} onPress={() => this.getImage()} icon={Images.upload_blue} label={Languages.Upload} />
          </View>
          <VerRuler height={calcHeight(17)} />
          <View style={styles.setiontwo}>
            <BorderInputText onChangeText={(firstname) => this.setState({ firstname })} defaultValue={userdata.firstname} label={Languages.First_Name} width={calcWidth(154)} />
            <BorderInputText onChangeText={(surname) => this.setState({ surname })} defaultValue={userdata.surname} label={Languages.Last_Name} width={calcWidth(154)} />
          </View>
          <VerRuler height={calcHeight(17)} />
          <BorderInputText onChangeText={(email) => this.setState({ email })} defaultValue={userdata.email} label={Languages.Email_Address} width={calcWidth(335)} keyboardType={'email-address'} />
          <VerRuler height={calcHeight(17)} />
          <BorderInputText onChangeText={(phoneNumber) => this.setState({ phoneNumber })} defaultValue={userdata.phoneNumber} label={Languages.Phone_Number} width={calcWidth(335)} keyboardType={'phone-pad'} />
          <VerRuler height={calcHeight(17)} />
          <View style={styles.setiontwo}>
            <BorderInputText onChangeText={(street) => this.setState({ street })} defaultValue={userdata.address == null ? '' : userdata.address.street} label={Languages.Street_Name} width={calcWidth(104)} />
            <BorderInputText onChangeText={(zipCode) => this.setState({ zipCode })} defaultValue={userdata.address == null ? '' : userdata.address.zipCode} label={Languages.ZIP_Code} width={calcWidth(88)} />
            <BorderInputText onChangeText={(city) => this.setState({ city })} defaultValue={userdata.address == null ? '' : userdata.address.city} label={Languages.City} width={calcWidth(117)} />
          </View>
        </View>
        <CustomSpinner textContent={Languages.loading} visible={this.props.userdata.loading} />
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  token: state.auth.token,
  email: state.auth.email,
  userdata: state.user,
  loading: state.image.loading,
  image: state.image.image,
  imageId: state.image.imageId,
});

const mapDispatchToProps = {
  getUserProfile,
  uploadProfileImage,
  editUserProfile,
};
export default connect(mapStateToProps, mapDispatchToProps)(EditInfoScreen);