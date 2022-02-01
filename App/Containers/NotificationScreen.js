import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import {
  NotificationItemButton,
  VerRuler,
  LabelButton,
  BackButton,
} from '../Components'
import { Images, Languages, ConvertSize, DummyData } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/NotificationScreenStyles'
import { connect } from 'react-redux'
import { updateUserNotifications } from 'Actions/User';
class NotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArr: [
        false, false, false, false, false, false, false
      ]
    }
  }
  updateNotificationState = () => {
    let { email, token,firstLogin } = this.props;
    let {
      selectedArr,
    } = this.state;
    const valueArr = [10, 20, 30, 40, 50, 60, 70];
    let notificationCategories = [];
    for (let i = 0; i < selectedArr.length; i++) {
      if (selectedArr[i]) {
        notificationCategories.push(valueArr[i]);
      }
    }
    console.log(notificationCategories)
    this.props.updateUserNotifications({ notificationCategories, email, token,firstLogin })
  }
  selectFunc = (index) => {
    let {
      selectedArr
    } = this.state;
    let newArr = [...selectedArr];
    newArr[index] = !newArr[index];
    this.setState({
      selectedArr: newArr
    })
  }

  render() {
    let {
      selectedArr
    } = this.state;
    const NotificationArr = [
      {
        id: 0,
        label: 'Traffic Announcement',
        state: false,
        value: 10
      },
      {
        id: 1,
        label: 'Crisis Information',
        state: false,
        value: 20
      },
      {
        id: 2,
        label: 'Art and Cultural Annonuncements',
        state: false,
        value: 30
      },
      {
        id: 3,
        label: 'Power Outages',
        state: false,
        value: 40
      },
      {
        id: 4,
        label: 'Water Disturbances',
        state: false,
        value: 50
      },
      {
        id: 5,
        label: 'Weather Warnings',
        state: false,
        value: 60
      },
      {
        id: 6,
        label: 'Trash Pickup',
        state: false,
        value: 70
      },
    ]
    return (
      <View style={styles.mainContainer}>
        <View style={styles.section}>
          <VerRuler height={calcHeight(60)} />
          <LabelButton
            //  onPress={() => this.props.navigation.navigate('AccountScreen')}
            onPress={() => this.updateNotificationState()}
            label={Languages.Notifications} icon={Images.arrow_left} />
          <VerRuler height={calcHeight(15)} />
          {/* <BackButton onPress={() => this.props.navigation.navigate('AccountScreen')} icon={Images.arrow_back} label={Languages.Main_Menu} /> */}
          <VerRuler height={calcHeight(20)} />
          {
            NotificationArr.map((item, key) => (
              <NotificationItemButton 
              onSyncPress={() => this.selectFunc(key)} 
              state={selectedArr[key]} 
              label={item.label} key={key}
               />
            ))
          }
        </View>

      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  token: state.auth.token,
  email: state.auth.email,
  firstLogin: state.auth.firstLogin,
  userdata: state.user,
});

const mapDispatchToProps = {
  updateUserNotifications,
};
export default connect(mapStateToProps, mapDispatchToProps)(NotificationScreen);