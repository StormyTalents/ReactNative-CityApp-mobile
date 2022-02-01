import React, {Component} from 'react';
import {TouchableOpacity, Text, Image, View, ScrollView} from 'react-native';
import {
  TextBackButton,
  VerRuler,
  LabelIconInputText,
  LabelIconButton,
  IconInputText,
  UploadThreeImageButton,
  AddMatterBottomButtons,
  CustomSpinner,
} from '../Components';
import {Images, Languages, Constants, DummyData} from '../Themes';
import {calcHeight, calcWidth} from '../Themes/ConvertSize';
import styles from './Styles/AddMatterScreenStyles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {connect} from 'react-redux';
import {getUserProfile, setMatterType} from 'Actions/User';
import {getReportsForReporter, createReport} from 'Actions/Report';
import NavigationService from 'Navigation/NavigationService';
import {handleImageUpload} from 'Service/ImageHandler';

const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class AddMatterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabstate: false,
      tider: false,
      toastShow: false,
      imagearr: [],
      type: 0,
      category: 0,
      categoryLabel: '',
      loading: false,
      imagesIds: [],
      priority: 10,
      report_title: '',
      description: '',
      custom_address: {
        street: '',
        zipCode: '',
        city: '',
        country: '',
        latitude: 0,
        longitude: 0,
      },
      custom_location: false,
      eventlocation: '',
      drafts_data: [],
    };
  }

  componentDidMount() {
    this.setState({
      type: this.props.type,
      category: this.props.category,
      categoryLabel: this.props.categoryLabel,
      custom_address: this.props.custom_address,
      custom_location: this.props.custom_location,
    });
    this.getDrafts();
  }

  getDrafts = () => {
    let {email, token, username} = this.props;
    try {
      fetch(`${Constants.BASE_URL}/Report/GetReportsForReporter?id=${username}&isDraft=${true}&email=${email}&token=${token}`)
        // .then((response) => response.json())
        .then((res) => {
          console.log(res);
        });
    } catch (e) {
      console.log(e);
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.type !== this.props.type) {
      this.setState({type: this.props.type});
    }
    if (prevProps.category !== this.props.category) {
      this.setState({category: this.props.category});
    }
    if (prevProps.categoryLabel !== this.props.categoryLabel) {
      this.setState({categoryLabel: this.props.categoryLabel});
    }
    if (prevProps.custom_address !== this.props.custom_address) {
      this.setState({custom_address: this.props.custom_address});
    }
    if (prevProps.custom_location !== this.props.custom_location) {
      this.setState({custom_location: this.props.custom_location});
    }
  }

  getImage = () => {
    let {imagearr, loading} = this.state;
    if (loading) {
      alert('Please Wait...Now uploading picked previously!');
      return;
    }
    if (imagearr.length == 3) {
      alert('You can upload images to three!');
      return;
    }
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};
        this.setState({
          imagearr: [...imagearr, source],
          loading: true,
        });
        this.uploadImageGetId(response);
      }
    });
  };

  uploadImageGetId = (response) => {
    let {imagesIds} = this.state;
    let {username, email, token} = this.props;
    handleImageUpload(response, username, email, token)
      .then((res) => {
        this.setState({
          loading: false,
          imagesIds: [...imagesIds, res[0].imageId],
        });
      })
      .catch((errMsg) => {
        this.setState({
          loading: false,
        });
        alert(JSON.stringify(errMsg));
      });
  };

  removeItem = (item, key) => {
    let {username, email, token} = this.props;
    let {imagearr, imagesIds} = this.state;
    const index = imagearr.indexOf(item);
    fetch(`${Constants.BASE_URL}/Image/DeleteFile`, {
      method: 'DELETE',
      body: JSON.stringify({
        imageId: imagesIds[index],
        email: email,
        token: token,
      }),
    })
      .then(() => {
        if (index > -1) {
          imagearr.splice(index, 1);
          imagesIds.splice(index, 1);
        }
        this.setState({imagearr: imagearr, imagesIds: imagesIds});
      })
      .catch((errMsg) => {
        alert(JSON.stringify(errMsg));
      });
  };

  GetReportsForReporter = () => {
    let {email, token, username} = this.props;
    const isDraft = true;
    this.props.getReportsForReporter({id: username, isDraft, email, token});
  };

  createNewReport = (isDraft) => {
    let {
      imagesIds,
      category,
      categoryLabel,
      priority,
      type,
      report_title,
      description,
      loading,
      custom_address,
      custom_location,
    } = this.state;
    let {customerUsername, email, token, address, currRegion} = this.props;
    if (loading) {
      alert('Please Wait...Now uploading picked image!');
      return;
    }
    this.props.createReport({
      title: report_title,
      description: description,
      location: {
        street: !custom_location ? address.street : custom_address.street,
        zipCode: !custom_location ? address.zipCode : custom_address.zipCode,
        city: !custom_location ? address.city : custom_address.city,
        country: !custom_location ? address.country : custom_address.country,
        latitude: !custom_location
          ? currRegion.latitude
          : custom_address.latitude,
        longitude: !custom_location
          ? currRegion.longitude
          : custom_address.longitude,
      },
      type,
      priority,
      category: category,
      customerUsername: customerUsername,
      imagesIds,
      email,
      isDraft,
      token,
    });
  };

  render() {
    let {
      type,
      imagearr,
      category,
      categoryLabel,
      loading,
      custom_location,
      custom_address,
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <VerRuler height={calcHeight(45)} />
        <TextBackButton
          onPress={() => NavigationService.navigate('HomeScreen')}
          label={Languages.Cancel}
          title={
            type == 10
              ? Languages.Questions
              : type == 20
              ? Languages.Error_Reports
              : type == 30
              ? Languages.Suggestions
              : Languages.Complinats
          }
        />
        <VerRuler height={calcHeight(31)} />
        <LabelIconInputText
          icon={
            type == 10
              ? Images.questions
              : type == 20
              ? Images.error_reports
              : type == 30
              ? Images.suggestions
              : Images.complaints
          }
          onChangeText={(report_title) => this.setState({report_title})}
          placeholder={
            type == 10
              ? Languages.Question_title
              : type == 20
              ? Languages.Error_report_title
              : type == 30
              ? Languages.Suggestion_title
              : Languages.Complaint_title
          }
          showDraftButton={DummyData.drafts_data.length == 0 ? false : true}
          onPress={() => this.GetReportsForReporter()}
          title={
            type == 10
              ? Languages.Add_question
              : type == 20
              ? Languages.Add_Error_Report
              : type == 30
              ? Languages.Add_suggestion
              : Languages.Add_complaint
          }
        />
        <VerRuler height={calcHeight(25)} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {type !== 10 && (
            <LabelIconButton
              onPress={() => NavigationService.navigate('CategorySelectScreen')}
              icon={Images.tag2}
              lefticon={Images.arrow_right}
              label={categoryLabel == '' ? Languages.Category : categoryLabel}
            />
          )}
          <IconInputText
            icon={Images.mail}
            placeholder={Languages.Email_Address}
            onChangeText={(email) => this.setState({email})}
          />
          <IconInputText
            icon={Images.file_text}
            placeholder={Languages.Description}
            onChangeText={(description) => this.setState({description})}
          />
          <IconInputText
            icon={Images.phone2}
            placeholder={Languages.Phone_Number_Optional}
            onChangeText={(phoneNumber) => this.setState({phoneNumber})}
          />
          {type !== 10 && (
            <IconInputText
              icon={Images.map_pin2}
              placeholder={Languages.Location_is_by_default_is_yours}
              onChangeText={(eventlocation) => this.setState({eventlocation})}
            />
          )}
          {/* {type !== 10 && (
            <LabelIconButton
              icon={Images.map_pin2}
              label={
                custom_location
                  ? custom_address.street +
                    ', ' +
                    custom_address.zipCode +
                    ' ' +
                    custom_address.city
                  : Languages.Location_is_by_default_is_yours
              }
            />
          )} */}
          {(type == 20 || type == 30 || type == 40) && (
            <UploadThreeImageButton
              loading={loading}
              label={Languages.Up_to_three_images}
              onPress={() => this.getImage()}
              icon={Images.upload_image}
            />
          )}

          {(type == 20 || type == 30 || type == 40) && (
            <View style={styles.scrollbottom}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {imagearr.map((item, key) => (
                  <View key={key}>
                    <Image style={styles.itemimage} source={{uri: item.uri}} />
                    <TouchableOpacity
                      onPress={() => this.removeItem(item, key)}
                      style={styles.closeButton}>
                      <Image
                        style={styles.closeimage}
                        source={Images.closeButton}
                      />
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </View>
          )}

          <VerRuler height={calcHeight(25)} />
        </ScrollView>
        <AddMatterBottomButtons
          label1={Languages.Send}
          label2={Languages.Save_as_draft}
          onPress1={() => this.createNewReport(false)}
          onPress2={() => this.createNewReport(true)}
          icon={Images.send_white}
        />
        <CustomSpinner
          loading={this.props.loading}
          textContent={Languages.saving}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  email: state.auth.email,
  username: state.auth.username,
  customerUsername: state.auth.customerUsername,
  userdata: state.user,
  type: state.user.type,
  category: state.report.category,
  categoryLabel: state.report.categoryLabel,
  loading: state.report.loading,
  address: state.user.address,
  currRegion: state.auth.currRegion,
  custom_address: state.user.custom_address,
  custom_location: state.user.custom_location,
});

const mapDispatchToProps = {
  getUserProfile,
  setMatterType,
  getReportsForReporter,
  createReport,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMatterScreen);
