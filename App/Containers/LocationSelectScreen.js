import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View, ScrollView } from 'react-native'
import {
  SearchBackBar,
  VerRuler,
  LocationItem,
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
import styles from './Styles/LocationSelectScreenStyles'
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
export default class LocationSelectScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabstate: false,
      tider: false,
      toastShow: false,
      location_data: DummyData.location_data,
    };

  }
  seletedItem = (k) => {
    let {
      location_data
    } = this.state;
    let temp = location_data;
    for (let i = 0; i < temp.length; i++) {
      if (i == k) {
        if (temp[k].selected) {
          temp[k].selected = false;
        }
        else {
          temp[k].selected = true;
        }
      }
      else {
        temp[i].selected = false;
      }
    }
    this.setState({
      location_data: temp
    });
  }
  render() {
    let {
      tabstate,
      tider,
      toastShow,
      location_data,
      selected_guests
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.layout}>
        </View>
        <View style={styles.section}>
          <VerRuler height={calcHeight(20)} />
          <SearchBackBar
            placeholder={Languages.Enter_Location}
            label={Languages.Done}
            icon={Images.arrow_left}
            onChanageText={(clue) => this.setState({ clue })}
            onSubmitEditing={() => this.getResult()}
            onPress={() => this.props.navigation.navigate('AddEventScreen')}
            backPress={() => this.props.navigation.navigate('AddEventScreen')}
          />
          <VerRuler height={calcHeight(20)} />
          <View style={styles.scrollcontainer}>
            <ScrollView >
              <View style={styles.sectionitem}>
                {
                  location_data.map((item, key) => (
                    <LocationItem
                      name={item.location}
                      selected={item.selected}
                      icon={Images.checked}
                      onPress={() => this.seletedItem(key)}
                      key={key} />
                  ))
                }
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}
