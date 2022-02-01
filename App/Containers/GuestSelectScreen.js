import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View, ScrollView } from 'react-native'
import {
  SearchBackBar,
  VerRuler,
  GuestItem,
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
import styles from './Styles/GuestSelectScreenStyles'
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
export default class GuestSelectScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabstate: false,
      tider: false,
      toastShow: false,
      guestsarr: DummyData.guests,
      selected_guests: [],

    };

  }
  addItem = (item) => {
    let {
      guestsarr,
      selected_guests
    } = this.state;
    if (selected_guests.includes(item)) {
      let index = selected_guests.indexOf(item);
      if (index > -1) {
        selected_guests.splice(index, 1);
      }
      this.setState({
        selected_guests: selected_guests,
        guestsarr: [...guestsarr, item]
      })
    }
    else {
      let index1 = guestsarr.indexOf(item);
      if (index1 > -1) {
        guestsarr.splice(index1, 1);
      }
      this.setState({
        selected_guests: [...selected_guests, item],
        guestsarr: guestsarr,
      })
    }
  }
  // removeItem = (item) => {
  //   let {
  //     guestsarr
  //   } = this.state;
  //   const index = guestsarr.indexOf(item);
  //   // console.log(index);
  //   // return
  //   // let temp=[];
  //   if (index > -1) {
  //     guestsarr.splice(index, 1);
  //   }
  //   this.setState({ guestsarr: guestsarr });
  // }
  // getResult = () => {
  //   alert('')
  // }
  render() {
    let {
      tabstate,
      tider,
      toastShow,
      guestsarr,
      selected_guests
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.layout}>
        </View>
        <View style={styles.section}>
          <VerRuler height={calcHeight(20)} />
          <SearchBackBar
            placeholder={Languages.Guests}
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
              {
                selected_guests.length !== 0 && <View style={styles.topcontainer}>
                  <Text style={styles.titleText}>
                    {Languages.Included_guests}
                  </Text>
                  {
                    selected_guests.map((item, key) => (
                      <GuestItem
                        avatar={item.avatar}
                        name={item.name}
                        email={item.email}
                        selected={true}
                        icon={Images.closeButton}
                        onPress={() => this.addItem(item)}
                        key={key} />
                    ))
                  }
                  <VerRuler height={calcHeight(20)} />
                  <View style={styles.grayline}></View>
                </View>
              }
              <View style={styles.sectionitem}>
                {
                  guestsarr.map((item, key) => (
                    <GuestItem
                      avatar={item.avatar}
                      name={item.name}
                      email={item.email}
                      selected={item.selected}
                      icon={Images.closeButton}
                      onPress={() => this.addItem(item)}
                      key={key} />
                  ))
                }
                <VerRuler height={calcHeight(80)} />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}
