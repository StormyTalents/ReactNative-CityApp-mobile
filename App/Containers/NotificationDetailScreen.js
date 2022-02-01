import React, {Component} from 'react';
import {TouchableOpacity, Text, Image, View, ScrollView} from 'react-native';
import {
  BlueButton,
  VerRuler,
  TwoTabs,
  BottomTabs,
  HomeComponent,
  TextIconButton,
  CustomSpinner,
  HomeLocationTopItem,
} from '../Components';
import {Textarea} from 'native-base';
import {Images, Languages, Constants, DummyData, Colors} from '../Themes';
import {calcHeight, calcWidth} from '../Themes/ConvertSize';
import styles from './Styles/NotificationDetailScreenStyles';
import NavigationService from 'Navigation/NavigationService';

import {connect} from 'react-redux';
class NotificationDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // notification_detail: this.props.notification_detail,
      notification_detail: {
        category_name: 'CATEGORY NAME',
        created_time: '16:20',
        created_date: '04/05',
        image: Images.sample_noti,
        title: 'Notification title up \nto two lines.',
        activity_time: '4minutes reading',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas scelerisque ut Eget egestas scelerisque ut Eget egestas ',
      },
    };
  }
  render() {
    let {notification_detail} = this.state;
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <VerRuler height={calcHeight(25)} />
          <HomeLocationTopItem
            backPress={() => {
              NavigationService.goBack();
            }}
            image={notification_detail.image}
            title={notification_detail.title}
            description={notification_detail.description}
            created_date={notification_detail.created_date}
            created_time={notification_detail.created_time}
            category_name={notification_detail.category_name}
            activity_time={notification_detail.activity_time}
          />
          <VerRuler height={calcHeight(70)} />
          <View style={styles.submit_form}>
            <Text style={styles.submit_title}>{Languages.Submit_Feedback}</Text>
            <Textarea style={styles.submit_textarea} />
            <TouchableOpacity style={styles.submit_button}>
              <Image source={Images.edit_pencil} style={styles.submit_image} />
              <Text style={styles.submit_text}>{Languages.Submit.toUpperCase()}</Text>
            </TouchableOpacity>
          </View>
          <VerRuler height={calcHeight(70)} />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  email: state.auth.email,
  notification_detail: state.notification.notification_detail,
});

const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationDetailScreen);
