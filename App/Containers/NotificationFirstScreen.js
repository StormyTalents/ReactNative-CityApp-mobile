import React, {Component} from 'react';
import {
  ActivityIndicator,
  Text,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {VerRuler, NotificationComponentItem} from '../Components';
import {Images, Languages, ConvertSize, Colors} from '../Themes';
import {calcHeight, calcWidth} from '../Themes/ConvertSize';
import styles from './Styles/NotificationFirstScreenStyles';
import {connect} from 'react-redux';
import {updateUserNotifications} from 'Actions/User';

class NotificationFirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArr: [false, false, false, false, false, false, false, false],
      selected: false,
    };
  }
  updateNotificationState = () => {
    let {email, token, firstLogin, loading} = this.props;
    if (loading) {
      return;
    }
    let {selectedArr} = this.state;
    const valueArr = [10, 20, 30, 40, 50, 60, 70, 80];
    let notificationCategories = [];
    for (let i = 0; i < selectedArr.length; i++) {
      if (selectedArr[i]) {
        notificationCategories.push(valueArr[i]);
      }
    }
    console.log(notificationCategories);
    this.props.updateUserNotifications({
      notificationCategories,
      email,
      token,
      firstLogin,
    });
  };
  checkFalse = (arr) => {
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j]) i = i + 1;
    }
    this.setState({
      selected: i > 0 ? true : false,
    });
  };
  selectFunc = (index) => {
    let {selectedArr, selected} = this.state;
    let newArr = [...selectedArr];
    newArr[index] = !newArr[index];
    this.checkFalse(newArr);
    this.setState({
      selectedArr: newArr,
    });
  };

  render() {
    let {selectedArr, selected} = this.state;
    const NotificationArr = [
      {
        id: 0,
        label: 'Traffic Announcement',
        state: false,
        value: 10,
        icon: Images.traffic_an,
        color: Colors.notificationColors[0],
      },
      {
        id: 1,
        label: 'Crisis Information',
        state: false,
        value: 20,
        icon: Images.crises_in,
        color: Colors.notificationColors[1],
      },
      {
        id: 2,
        label: 'Cultural Annonuncements',
        state: false,
        value: 30,
        icon: Images.cultural_an,
        color: Colors.notificationColors[2],
      },
      {
        id: 3,
        label: 'Power Outages',
        state: false,
        value: 40,
        icon: Images.power_out,
        color: Colors.notificationColors[3],
      },
      {
        id: 4,
        label: 'Water Disturbances',
        state: false,
        value: 50,
        icon: Images.water_dis,
        color: Colors.notificationColors[4],
      },
      {
        id: 5,
        label: 'Weather Warnings',
        state: false,
        value: 60,
        icon: Images.weather_wa,
        color: Colors.notificationColors[5],
      },
      {
        id: 6,
        label: 'Trash Pickup',
        state: false,
        value: 70,
        icon: Images.trash_pic,
        color: Colors.notificationColors[6],
      },
      {
        id: 7,
        label: 'Buss Delay',
        state: false,
        value: 80,
        icon: Images.bus_delay,
        color: Colors.notificationColors[7],
      },
    ];
    return (
      <View style={styles.mainContainer}>
        <View style={styles.layout}></View>
        <View style={styles.section}>
          <VerRuler height={calcHeight(30)} />
          <Text style={styles.title}>{Languages.Choose_what_to_track}</Text>
          <VerRuler height={calcHeight(22)} />
          <FlatList
            data={NotificationArr}
            renderItem={({item, index}) =>
              (
                <NotificationComponentItem
                  onSyncPress={() => this.selectFunc(index)}
                  state={selectedArr[index]}
                  label={item.label}
                  icon={item.icon}
                  color={item.color}
                  key1={index}
                />
              )
            }
            keyExtractor={(item) => item.id}
            numColumns={2}
            style={{marginLeft: -calcWidth(10)}}
          />
          {/* <NotificationComponentItem
            onSyncPress={() => this.selectFunc(6)}
            state={selectedArr[6]}
            label={NotificationArr[6].label}
            icon={NotificationArr[6].icon}
            color={NotificationArr[6].color}
            key1={6}
          /> */}
          <VerRuler height={calcHeight(60)} />
          <TouchableOpacity
            onPress={() => this.updateNotificationState()}
            style={[
              styles.completebutton,
              {display: selected ? 'flex' : 'none'},
            ]}>
            {this.props.loading ? (
              <ActivityIndicator size={'small'} color={Colors.white} />
            ) : (
              <Text style={styles.completetext}>{Languages.Complete}</Text>
            )}
          </TouchableOpacity>
          <VerRuler height={calcHeight(350)} width={calcWidth(250)} />
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.auth.token,
  email: state.auth.email,
  firstLogin: state.auth.firstLogin,
  loading: state.user.loading,
  userdata: state.user,
});

const mapDispatchToProps = {
  updateUserNotifications,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationFirstScreen);
