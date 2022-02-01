import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  ScrollView,
  Platform,
} from 'react-native';
import {
  LabelIconTextButton,
  VerRuler,
  LabelIconInputText,
  LabelIconButton,
  LabelIconImageButton,
  IconInputText,
  TextCreateButton,
  DateTimePickerButton,
} from '../Components';
import {Images, Languages, Constants, DummyData, Colors} from '../Themes';
import {calcHeight, calcWidth} from '../Themes/ConvertSize';
import styles from './Styles/AddEventScreenStyles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {connect} from 'react-redux';
import {setTagValue} from 'Actions/Calendar';
const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class AddEventScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabstate: false,
      tider: false,
      toastShow: false,
      imagearr: [],
      guests: DummyData.guests_selected,
      value: null,
      language: null,
      startDate: new Date(),
      endDate: new Date(),
      mode: 'date',
      show: false,
      stOrEnd: 0,
      tagValue: this.props.tagValue,
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.tagValue !== this.props.tagValue) {
      this.setState({tagValue: this.props.tagValue});
    }
  }
  getImage = () => {
    let {imagearr} = this.state;
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
        });
      }
    });
  };

  onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    if (this.state.stOrEnd == 0) {
      this.setState({
        startDate: currentDate,
        show: Platform.OS === 'ios' ? true : false,
      });
    } else {
      // if (currentDate < this.state.startDate) {
      //   alert('Please Choos Later Date or Time');
      //   return;
      // }
      this.setState({
        endDate: currentDate,
        show: Platform.OS === 'ios' ? true : false,
      });
    }
  };

  showMode = (currentMode, val) => {
    this.setState({
      show: true,
      mode: currentMode,
      stOrEnd: val,
    });
  };

  showDatepicker = (val) => {
    this.showMode('date', val);
  };

  showTimepicker = (val) => {
    this.showMode('time', val);
  };

  render() {
    let {
      guests,
      startDate,
      endDate,
      stOrEnd,
      show,
      mode,
      tagValue,
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <VerRuler height={calcHeight(45)} />
        <TextCreateButton
          createPress={() => this.props.navigation.goBack()}
          cancelPress={() => this.props.navigation.goBack()}
          label={Languages.Cancel}
          label1={Languages.Create}
          title={Languages.Add_Event}
        />
        <VerRuler height={calcHeight(31)} />
        <LabelIconInputText
          display={'none'}
          onChangeText={(report_title) => this.setState({report_title})}
          placeholder={Languages.Event_title}
          title={Languages.Add_Event}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={stOrEnd == 0 ? startDate : endDate}
              mode={mode}
              is24Hour={true}
              display="default"
              minimumDate={new Date()}
              onChange={this.onChangeDate}
            />
          )}
          <DateTimePickerButton
            timePress={() => this.showTimepicker(0)}
            datePress={() => this.showDatepicker(0)}
            icon={Images.event_calendar}
            time={moment(startDate).format('HH:mm')}
            date={moment(startDate).format('MM/DD/YYYY')}
          />
          <DateTimePickerButton
            timePress={() => this.showTimepicker(1)}
            datePress={() => this.showDatepicker(1)}
            icon={Images.event_calendar}
            time={moment(endDate).format('HH:mm')}
            date={moment(endDate).format('MM/DD/YYYY')}
          />
          <LabelIconImageButton
            color={DummyData.tag_data[tagValue - 1].color}
            onPress={() => this.props.navigation.navigate('TagSelectScreen')}
            icon={Images.tag2}
            lefticon={Images.arrow_right}
            label={Languages.Add_Tag}
          />
          <LabelIconTextButton
            onPress={() => this.props.navigation.navigate('GuestSelectScreen')}
            icon={Images.guest}
            guests={guests}
            label={Languages.Guests}
          />
          <IconInputText
            icon={Images.file_text}
            placeholder={Languages.Description}
            onChangeText={(email) => this.setState({email})}
          />
          <View style={styles.pickercontainer}>
            <Image style={styles.pickericon} source={Images.video_conference} />
            <Picker
              selectedValue={this.state.language}
              style={styles.pickerstyle}
              mode={'dropdown'}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
              }>
              <Picker.Item label="Skype" value="skype" />
              <Picker.Item label="Phone Number" value="phone" />
            </Picker>
          </View>
          <VerRuler height={calcHeight(10)} />
          <LabelIconButton
            onPress={() =>
              this.props.navigation.navigate('LocationSelectScreen')
            }
            icon={Images.map_pin2}
            label={Languages.Location}
          />
          <VerRuler height={calcHeight(50)} />
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.auth.token,
  email: state.auth.email,
  userdata: state.user,
  tagValue: state.calendar.tagValue,
});

const mapDispatchToProps = {
  setTagValue,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddEventScreen);
