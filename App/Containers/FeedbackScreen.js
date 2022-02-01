import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import {
  FeedbackComponent,
  VerRuler,
  ColorBGTextButton,
  LabelButton,
  BackButton,
  BackIconButton
} from '../Components'
import { Images, Languages, ConvertSize, DummyData } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/FeedbackScreenStyles'
import NavigationService from 'Navigation/NavigationService'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export default class FeedbackScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    }
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
          avatarSource: source
        });
      }
    });
  }
  render() {
    let {
      selected
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.section}>
          <VerRuler height={calcHeight(60)} />
          <LabelButton onPress={() => this.props.navigation.navigate('AccountScreen')} label={Languages.Feedback} icon={Images.closeButton} />
          <VerRuler height={calcHeight(15)} />
          <BackButton onPress={() => this.props.navigation.navigate('AccountScreen')} icon={Images.arrow_back} label={Languages.Main_Menu} />
          <ScrollView>
            <VerRuler height={calcHeight(20)} />
            <FeedbackComponent icon={Images.upload_blue} label={Languages.upload_an_image_or_screenshot} />
            <VerRuler height={calcHeight(51)} />
            <View style={styles.grayline} ></View>
            <VerRuler height={calcHeight(33)} />
            <ColorBGTextButton label={Languages.Submit} />
            {/* <VerRuler height={calcHeight(14)} />
            <ColorBGTextButton buttonstyle={styles.buttonstyle} textstyle={styles.textstyle} label={Languages.Clear} /> */}
            <VerRuler height={calcHeight(20)} />
          </ScrollView>
        </View>
      </View>
    )
  }
}
