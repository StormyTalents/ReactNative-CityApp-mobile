import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View, ScrollView } from 'react-native'
import {
  VerRuler,
  AddMatterBottomButtons,
} from '../Components'
import { Images, Languages, Constants, DummyData } from '../Themes'
import { calcHeight, calcWidth } from '../Themes/ConvertSize'
import styles from './Styles/AddResultScreenStyles'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { connect } from 'react-redux'
import NavigationService from "Navigation/NavigationService";
import Moment from 'moment';
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class AddResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketId: '',
      title: '',
      createdTime: '',
      receivingText: '',
      ticketStatus: 0,
      type: 0,
    };
  }
  componentDidMount() {
    let {
      ticketId,
      title,
      createdTime,
      receivingText,
      ticketStatus,
      type,
    } = this.props;
    this.setState({
      ticketId,
      title,
      createdTime,
      receivingText,
      ticketStatus,
      type,
    })
  }
  render() {
    let {
      ticketId,
      title,
      createdTime,
      receivingText,
      ticketStatus,
      type,
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <VerRuler height={calcHeight(62)} />
        <View style={styles.sectionitem}>
          <Image
            style={styles.titleimage}
            source={type == 10 ? Images.large_questions : (type == 20 ? Images.large_error : (type == 30 ? Images.large_suggestion : Images.large_compliant))} />
          <VerRuler height={calcHeight(24)} />
          <Text style={styles.titleText}>
            {Languages.Thank_You}
          </Text>
          <VerRuler height={calcHeight(10)} />
          <Text style={styles.textdescription}>
            {type == 10 ? Languages.Your_question_has_been_successfully_added : (type == 20 ? Languages.Error_report_has_been_successfully_____ : (type == 30 ? Languages.Your_suggestion_has_been_successfully_added : Languages.Your_complaint_has_been_successfully_added))}
          </Text>
          <VerRuler height={calcHeight(33)} />
          <View style={styles.grayline}></View>
          <VerRuler height={calcHeight(27)} />
          <Text style={styles.description}>
            {Languages.Please_do_keep_the_tracking_ID_in_a_safe________}
          </Text>
          <VerRuler height={calcHeight(26)} />
          <Text style={styles.description}>
            {Languages.Ticket_ID}
          </Text>
          <VerRuler height={calcHeight(3)} />
          <View style={styles.copycontainer}>
            <Text style={styles.description1}>
              {ticketId}
            </Text>
            <TouchableOpacity style={styles.copybutton}>
              <Image source={Images.additional_black} style={styles.copyimage} />
            </TouchableOpacity>
          </View>
          <VerRuler height={calcHeight(23)} />
          <View style={styles.bottomcontent}>
            <View>
              <Text style={styles.description2}>
                {Languages.Status}
              </Text>
              <Text style={styles.description2}>
                {ticketStatus == 0 ? 'Active' : 'Close'}
              </Text>
            </View>
            <View style={styles.secondcontent}>
              <Text style={styles.description2}>
                {Languages.Date}
              </Text>
              <Text style={styles.description2}>
                {Moment(createdTime).format('d MMM') + ' ' + Moment(createdTime).format('HH:MM')}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomcontainer}>
          <AddMatterBottomButtons
            label1={Languages.View}
            label2={Languages.Done}
            onPress1={() => NavigationService.navigate('MatterScreen')}
            onPress2={() => NavigationService.navigate('AddMatterScreen')}
          />
        </View>
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  token: state.auth.token,
  email: state.auth.email,
  username: state.auth.username,
  ticketId: state.report.ticketId,
  title: state.report.title,
  createdTime: state.report.createdTime,
  receivingText: state.report.receivingText,
  ticketStatus: state.report.ticketStatus,
  type: state.user.type,
});

const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(AddResultScreen);