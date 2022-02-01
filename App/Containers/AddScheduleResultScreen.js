import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View, ScrollView } from 'react-native'
import {
  TextBackButton,
  VerRuler,
  LabelIconInputText,
  LabelIconButton,
  IconInputText,
  UploadThreeImageButton,
  AddMatterBottomButtons,
  NearActivityItemComponent,
  RadioComponent,
  BooksActivityItemComponent
} from '../Components'
import { Images, Languages, Constants, DummyData } from '../Themes'
import { calcHeight, calcWidth } from '../Themes/ConvertSize'
import styles from './Styles/AddScheduleResultScreenStyles'
import Modal from 'react-native-modalbox';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Toast, { DURATION } from 'react-native-easy-toast'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export default class AddScheduleResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabstate: false,
      tider: false,
      toastShow: false,
      imagearr: [
      ],
    };

  }
  getImage = () => {
    let {
      imagearr
    } = this.state;
    if (imagearr.length == 3) { alert('You can upload images to three!'); return }
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
          imagearr: [...imagearr, source]
        });
      }
    });
  }
  removeItem = (item) => {
    let {
      imagearr
    } = this.state;
    const index = imagearr.indexOf(item);
    // console.log(index);
    // return
    // let temp=[];
    if (index > -1) {
      imagearr.splice(index, 1);
    }
    this.setState({ imagearr: imagearr });
  }
  render() {
    let {
      tabstate,
      tider,
      toastShow,
      imagearr,
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.layout}>
        </View>
        <View style={styles.section}>
          <VerRuler height={calcHeight(62)} />
          <View style={styles.sectionitem}>
            <Text style={styles.titleText}>
              {Languages.Thank_You}
            </Text>
            <VerRuler height={calcHeight(10)} />
            <Text style={styles.textdescription}>
              {Languages.Event_has_been_successfully_created}
            </Text>
            <VerRuler height={calcHeight(15)} />
            <Text style={styles.textdescription1}>
              {Languages.You_can_view_it_now_on_your_Calendar}
            </Text>
            <VerRuler height={calcHeight(47)} />

            <VerRuler height={calcHeight(23)} />
            <View style={styles.itemcontainer}>
              <Text style={styles.eventtitle}>
                {DummyData.add_event_result_data.title}
              </Text>
              <Text style={styles.eventtitle1}>
                {DummyData.add_event_result_data.time}
              </Text>
              <Text style={styles.eventtitle2}>
                {DummyData.add_event_result_data.location}
              </Text>
              <Text style={styles.eventtitle3}>
                {DummyData.add_event_result_data.guestname}
              </Text>
            </View>
          </View>
        </View>
        {/* <View style={styles.bottomcontainer}>
          <AddMatterBottomButtons
            label1={Languages.View}
            label2={Languages.Done}
            onPress1={() => this.props.navigation.navigate('MatterScreen')}
            onPress2={() => this.props.navigation.navigate('MatterScreen')}
          />
        </View> */}
      </View>
    )
  }
}
