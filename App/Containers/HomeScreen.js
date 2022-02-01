import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  ScrollView,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {
  BlueButton,
  VerRuler,
  TwoTabs,
  BottomTabs,
  HomeComponent,
  TextIconButton,
  CustomSpinner,
} from '../Components';
import {Images, Languages, Constants, DummyData, Colors} from '../Themes';
import {calcHeight, calcWidth} from '../Themes/ConvertSize';
import styles from './Styles/HomeScreenStyles';
import {FloatingAction} from '../Components/react-native-floating-action';
import RBSheet from 'react-native-raw-bottom-sheet';
import Geolocation from '@react-native-community/geolocation';
import {connect} from 'react-redux';
import {getUserProfile, setMatterType} from 'Actions/User';
import {setDeviceLocation} from 'Actions/Auth';
import {
  getNotificationsNearby,
  getNotificationWithId,
} from 'Actions/Notification';
import NavigationService from 'Navigation/NavigationService';
import moment from 'moment';
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    let today = new Date();
    this.state = {
      tabstate: 0,
      add_rotate: false,
      detail_data: {},
      userdata: {},
      loading: false,
      latitude: 0,
      longitude: 0,
      notificationdata: [],
      notificationType: 10,
      dis_today: moment(today).format('Do MMM YYYY'),
    };
  }
  componentDidMount() {
    if (Platform.OS == 'ios') {
      this.initFunc();
    } else {
      this.requestLocationPermission();
    }
  }
  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'CitiApp Location Permission',
          message:
            'CitiApp needs access to your location ' +
            'so you can get current locations.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        this.initFunc();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidUpdate(prevProps) {
    let {token, email} = this.props;
    let {latitude, longitude} = this.state;
    if (prevProps.userdata !== this.props.userdata) {
      this.setState({
        userdata: this.props.userdata,
      });
    }
    if (
      prevProps.notificationCategories !== this.props.notificationCategories
    ) {
      this.setState({
        notificationCategories: this.props.notificationCategories,
      });
      this.props.getNotificationsNearby({
        latitude,
        longitude,
        notificationCategories:
          this.props.notificationCategories == null
            ? []
            : this.props.notificationCategories,
        notificationType: 10,
        email,
        token,
      });
    }
    if (prevProps.notificationdata !== this.props.notificationdata) {
      this.setState({notificationdata: this.props.notificationdata});
    }
    if (prevProps.notificationType !== this.props.notificationType) {
      this.setState({notificationType: this.props.notificationType});
    }
  }
  initFunc = () => {
    Geolocation.getCurrentPosition(
      (info) => {
        console.log(info);
        let currRegion = {
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        };

        this.setState({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });

        this.props.setDeviceLocation(currRegion);
        if (this.props.userType == 10) {
          this.props.getUserProfile({
            email: this.props.email,
            token: this.props.token,
          });
        } else {
          return;
        }
      },
      (error) => console.log(error),
      {
        // enableHighAccuracy: true,
        timeout: 60000,
        // maximumAge: 1000,
      },
    );
  };
  componentWillUnmount() {
    if (this.sub) this.sub.remove();
  }
  GetNotificationsNearby = (val) => {
    let {token, email, notificationCategories} = this.props;
    let {latitude, longitude} = this.state;
    this.props.getNotificationsNearby({
      latitude,
      longitude,
      notificationCategories,
      notificationType: val,
      email,
      token,
    });
  };
  goDetailNotification = (id) => {
    let {email, token} = this.props;
    this.props.getNotificationWithId({id, email, token});
  };
  render() {
    let {
      add_rotate,
      userdata,
      notificationdata,
      notificationType,
      dis_today,
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <VerRuler height={calcHeight(25)} />
        <View style={styles.topbar}>
          <View style={styles.topcontent}>
            <TouchableOpacity
              onPress={() => NavigationService.navigate('AccountScreen')}
              style={styles.leftcontent}>
              {userdata.profileImage ? (
                <Image
                  source={{
                    uri: `data:image/jpeg;base64,${userdata.profileImage}`,
                  }}
                  style={styles.iconitem11}
                />
              ) : (
                <View style={styles.iconitem}>
                  <Image source={Images.user} style={styles.iconimage} />
                </View>
              )}
              {/* <TouchableOpacity onPress={() => NavigationService.navigate('AccountScreen')} style={styles.textbutton}>
                <Text style={styles.toptext}>
                  {Languages.Account}
                </Text>
              </TouchableOpacity> */}
            </TouchableOpacity>
          </View>
          <Text style={styles.toplabel}>{''}</Text>
          <View style={[styles.topcontent, {opacity: 0}]}>
            <View style={styles.leftcontent}>
              <View style={styles.iconitem}>
                <Image source={Images.user} style={styles.iconimage} />
              </View>
              <TouchableOpacity style={styles.textbutton}>
                <Text>{Languages.Account}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.secondbar}>
          <View>
            <Text style={styles.titleText}>
              {userdata.firstname == undefined
                ? Languages.Hi
                : Languages.Hi + ' ' + userdata.firstname}
            </Text>
            <Text style={styles.datetext}>{dis_today}</Text>
          </View>
          <View>
            <Image source={Images.we_sunny} style={styles.iconimage1} />
            <Text style={styles.weathertext}>{'21C - Cloudy'}</Text>
          </View>
        </View>
        <View>
          <VerRuler height={calcHeight(40)} />
          <TwoTabs
            label1={Languages.Alert}
            label2={Languages.News}
            onPress1={() => {
              this.GetNotificationsNearby(10);
            }}
            onPress2={() => {
              this.GetNotificationsNearby(20);
            }}
            tabstate1={notificationType}
          />
        </View>
        {notificationdata.length == 0 && notificationType == 10 && (
          <View style={styles.section}>
            <Image style={styles.bg_dashboard} source={Images.bg_dashboard} />
            <Text style={styles.titleText1}>
              {Languages.You_have_nothing_to_track_yet}
            </Text>
            <VerRuler height={calcHeight(24)} />
            <BlueButton onPress={()=>NavigationService.navigate('NotificationFirstScreen')} label={Languages.Customize_your_dashboard} />
          </View>
        )}
        {notificationdata.length == 0 && notificationType == 20 && (
          <View style={styles.section}>
            <Image style={styles.bg_dashboard} source={Images.bg_dashboard} />
            <Text style={styles.titleText1}>
              {Languages.You_have_nothing_to_track_yet}
            </Text>
            <VerRuler height={calcHeight(24)} />
            <BlueButton onPress={()=>NavigationService.navigate('NotificationFirstScreen')} label={Languages.Customize_your_dashboard} />
          </View>
        )}
        {notificationdata.length !== 0 && (
          <View style={styles.section}>
            {notificationType == 10 && (
              <ScrollView>
                {notificationdata.map(
                  (item, key) =>
                    item.category == 10 && (
                      <HomeComponent
                        onPress={() => this.goDetailNotification(item.id)}
                        menuPress={() => this.RBSheet.open()}
                        newly={item.newly}
                        title={item.title}
                        text={item.text}
                        icon={item.icon}
                        type={item.type}
                        index={key}
                        key={key}
                      />
                    ),
                )}
                <VerRuler height={calcHeight(370)} />
              </ScrollView>
            )}
          </View>
        )}
        {notificationdata.length !== 0 && (
          <View style={styles.section}>
            {notificationType == 20 && (
              <ScrollView>
                {notificationdata.map(
                  (item, key) =>
                    item.category == 20 && (
                      <HomeComponent
                        onPress={() => this.goDetailNotification(item.id)}
                        menuPress={() => this.RBSheet.open()}
                        newly={item.newly}
                        title={item.headline}
                        text={item.description}
                        icon={item.icon}
                        type={item.type}
                        index={key}
                        key={key}
                      />
                    ),
                )}
                <VerRuler height={calcHeight(370)} />
              </ScrollView>
            )}
          </View>
        )}
        <BottomTabs
          tabstate={0}
          onPress2={() => {
            this.floatingAction.animateButton();
          }}
          onPress0={() => NavigationService.navigate('HomeScreen')}
          onPress1={() => NavigationService.navigate('ActivityScreen')}
          onPress3={() => NavigationService.navigate('ScheduleScreen')}
          onPress4={() => NavigationService.navigate('MatterScreen')}
          add_rotate={add_rotate}
        />

        <FloatingAction
          ref={(ref) => {
            this.floatingAction = ref;
          }}
          actions={Constants.actions}
          position={'center'}
          onPressItem={(name) => {
            switch (name) {
              case 'bt_question':
                NavigationService.navigate('AddMatterScreen');
                this.props.setMatterType(10);
                break;
              case 'bt_error':
                NavigationService.navigate('AddErrorReportScreen');
                this.props.setMatterType(20);
                break;
              case 'bt_suggest':
                NavigationService.navigate('AddMatterScreen');
                this.props.setMatterType(30);
                break;
              case 'bt_complaint':
                NavigationService.navigate('AddMatterScreen');
                this.props.setMatterType(40);
                break;
              default:
                break;
            }
          }}
          buttonSize={40}
          visible={false}
          overlayColor={Colors.override}
          onOpen={() => this.setState({add_rotate: true})}
          onClose={() => this.setState({add_rotate: false})}
        />
        <RBSheet
          ref={(ref) => {
            this.RBSheet = ref;
          }}
          height={calcHeight(166)}
          openDuration={250}
          customStyles={{
            container: {
              justifyContent: 'center',
              alignItems: 'center',
              borderTopRightRadius: calcHeight(8),
              borderTopLeftRadius: calcHeight(8),
            },
          }}>
          <TextIconButton
            onPress={() => {}}
            icon={Images.recycle_bin}
            label={Languages.Remove_this_notification}
          />
          <VerRuler height={calcHeight(20)} />
          <TextIconButton
            onPress={() => {}}
            icon={Images.hide_eye}
            label={Languages.Stop_seeing_notification_about_this}
          />
          <VerRuler height={calcHeight(20)} />
          <TextIconButton
            onPress={() => {}}
            icon={Images.setting}
            label={Languages.Customize_your_notifications}
          />
        </RBSheet>
        <CustomSpinner visible={this.props.loading || this.props.userloading} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  email: state.auth.email,
  userdata: state.user,
  loading: state.notification.loading,
  userloading: state.user.loading,
  notificationCategories: state.user.notificationCategories,
  notificationdata: state.notification.notificationdata,
  notificationType: state.notification.notificationType,
  userType: state.auth.userType,
});

const mapDispatchToProps = {
  getUserProfile,
  setMatterType,
  setDeviceLocation,
  getNotificationsNearby,
  getNotificationWithId,
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
