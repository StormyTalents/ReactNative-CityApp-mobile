import React, {Component} from 'react';
import {TouchableOpacity, Text, Image, View, ScrollView} from 'react-native';
import {
  InvitationItemCompoent,
  VerRuler,
  BottomTabs,
  ColorBorderButton,
  IconButton,
  CustomSpinner,
} from '../Components';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';

import {Images, Languages, Constants, DummyData, Colors} from '../Themes';
import {calcHeight, calcWidth} from '../Themes/ConvertSize';
import styles from './Styles/ScheduleScreenStyles';
import Modal from 'react-native-modalbox';
import {FloatingAction} from '../Components/react-native-floating-action';
const pastMonthRange = 2;
const futureMonthRange = 2;
const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key: 'workout', color: 'green'};
import {connect} from 'react-redux';
import {getUserProfile, setMatterType} from 'Actions/User';
import {openCalendarScreen} from 'Actions/Calendar';
import NavigationService from 'Navigation/NavigationService';

class ScheduleScreen extends Component {
  constructor(props) {
    super(props);
    const Today = new Date();

    this.state = {
      tabstate: 0,
      add_rotate: false,
      sort: -1,
      mysort: -1,
      showbottomtab: 1,
      sort_data: Constants.sort_arr[0],
      radio: 0,
      TodayDateString: moment(Today).format('YYYY-MM-DD'),
      invitations: [],
      colorDots: [],
      events: [],
      weekArr: [],
      eventsDisplayData: [],
      spiner: false,
    };
  }
  componentDidMount() {
    let {invitations, colorDots, events} = this.props;
    let {eventsDisplayData} = this.state;
    let today = new Date();
    let weekArr = [];
    for (let i = 0; i < 7; i++) {
      weekArr.push({
        startDate: moment(today).add(i, 'days'),
        tags: [],
        selected: false,
      });
    }
    weekArr[0].selected = true;
    if (colorDots == null || colorDots == []) {
      this.setState({
        weekArr: weekArr,
        invitations: invitations == null ? [] : invitations,
        colorDots: colorDots == null ? [] : colorDots,
      });
      return;
    }
    for (let j = 0; j < 7; j++) {
      for (let k = 0; k < colorDots.length; k++) {
        if (
          moment(weekArr[j].startDate).format('MMM Do YY') ==
          moment(colorDots[k].startDate).format('MMM Do YY')
        ) {
          weekArr[j].tags.push(colorDots[k].tag);
        }
      }
    }

    this.setState({
      invitations: invitations == null ? [] : invitations,
      colorDots: colorDots == null ? [] : colorDots,
      events: events == null ? [] : events,
      weekArr: weekArr,
    });
    // console.log(this.props.userType);
    if (this.props.userType == 12) {
      this.refs.modal1.open();
    } else {
      this.callGetData();
    }
  }

  callGetData = () => {
    let {email, token} = this.props;
    ///// need to get fromDate and toDate, date //////
    let date = new Date();
    let fromDate = date;
    let toDate = moment(date).add(6, 'days');
    console.log('todate', toDate);
    this.props.openCalendarScreen({
      date: date,
      fromDate: fromDate,
      toDate: toDate,
      email,
      token,
    });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.invitations !== this.props.invitations) {
      this.setState({
        invitations:
          this.props.invitations == null ? [] : this.props.invitations,
      });
    }
    if (prevProps.colorDots !== this.props.colorDots) {
      let today = new Date();
      let weekArr = [];
      for (let i = 0; i < 7; i++) {
        weekArr.push({
          startDate: moment(today).add(i, 'days'),
          tags: [],
          selected: false,
        });
      }
      weekArr[0].selected = true;
      if (this.props.colorDots == null || this.props.colorDots == []) {
        this.setState({
          colorDots: this.props.colorDots == null ? [] : this.props.colorDots,
          weekArr: weekArr,
        });
        return;
      }
      for (let j = 0; j < 7; j++) {
        for (let k = 0; k < this.props.colorDots.length; k++) {
          if (
            moment(weekArr[j].startDate).format('MMM Do YY') ==
            moment(this.props.colorDots[k].startDate).format('MMM Do YY')
          ) {
            weekArr[j].tags.push(this.props.colorDots[k].tag);
          }
        }
      }
      console.log('weekArr', weekArr);
      this.setState({
        colorDots: this.props.colorDots == null ? [] : this.props.colorDots,
        weekArr: weekArr,
      });
    }
    if (prevProps.events !== this.props.events) {
      this.setState({
        events: this.props.events == null ? [] : this.props.events,
      });
    }
  }

  onClose = () => {
    NavigationService.goBack();
  };
  generateBookingItems = () => {
    const TodayDateString = this.state.TodayDateString;
    const bookings = DummyData.bookings;
    console.log(bookings);
    if (bookings.length === 0) return {};
    const minDate = moment(TodayDateString)
      .subtract(pastMonthRange, 'months')
      .format('YYYY-MM-DD');
    const maxDate = moment(TodayDateString)
      .add(futureMonthRange, 'months')
      .format('YYYY-MM-DD');
    let result = {};
    let temp = minDate;
    while (temp < maxDate) {
      result[temp] = bookings.filter(
        (book) => moment(book.time).format('YYYY-MM-DD') === temp,
      );
      temp = moment(temp).add(1, 'days').format('YYYY-MM-DD');
    }
    return result;
  };

  switchSelection = (k, item) => {
    this.setState({
      spiner: true,
    });
    let {weekArr} = this.state;
    let {email, token} = this.props;
    try {
      fetch(`${Constants.BASE_URL}/Calendar/GetEventsByDay`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: item.startDate,
          email: email,
          token: token,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.length !== 0) {
            console.log(moment(res[0].endTime).format('H'));
            for (let i = 0; i < 7; i++) {
              weekArr[i].selected = false;
            }
            weekArr[k].selected = true;
            this.setState({
              weekArr: weekArr,
              spiner: false,
              events: res,
            });
          } else {
            for (let i = 0; i < 7; i++) {
              weekArr[i].selected = false;
            }
            weekArr[k].selected = true;
            this.setState({
              weekArr: weekArr,
              spiner: false,
              events: res,
            });
          }
        });
    } catch (e) {
      console.log(e);
    }
  };
  renderBookingItem = (item, firstItemInDay) => {
    const statusText = ['Cancelled', 'Pending', 'Completed'];
    const statusColors = [Colors.red, Colors.outline, Colors.success];
    return (
      <View>
        <View row justify="space-between">
          <Image source={Images.account} />
          <View style={{flex: 1}}>
            <Text>{'dddd'}</Text>
          </View>
          <View align="flex-end">
            <Text>{'dddd'}</Text>
          </View>
        </View>
      </View>
    );
  };
  render() {
    let {
      add_rotate,
      showbottomtab,
      TodayDateString,
      invitations,
      colorDots,
      events,
      weekArr,
      spiner,
    } = this.state;
    console.log(JSON.stringify(events));
    return (
      <View style={styles.mainContainer}>
        <VerRuler height={calcHeight(60)} />
        <View style={styles.headersection}>
          <Text style={styles.titleText}>{Languages.Calendar}</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AddEventScreen')}
            style={styles.bluebutton}>
            <Text style={styles.headertext}>{Languages.Add_Event}</Text>
          </TouchableOpacity>
        </View>
        <VerRuler height={calcHeight(12)} />
        <Text style={styles.invitation_label}>
          {invitations.length + ' ' + Languages.Invitations}
        </Text>
        <View style={styles.horscrollcontainer}>
          <ScrollView horizontal={true}>
            {invitations.map((item, key) => (
              <InvitationItemCompoent
                onPress={() =>
                  this.props.navigation.navigate('CalendarInviteScreen')
                }
                label={item.toString()}
                icon={Images.mailbox}
                key={key}
              />
            ))}
          </ScrollView>
        </View>
        <View style={styles.displaytoday}>
          <Text style={styles.todaylabel}>
            {Languages.Today +
              ', ' +
              moment(TodayDateString).format('Do MMM YYYY')}
          </Text>
          <Text style={styles.todayevents}>
            {events.length + ' ' + Languages.Events}
          </Text>
        </View>
        <VerRuler height={calcHeight(16)} />
        <View style={styles.grayline}></View>
        <Text style={styles.titleweek}>
          {moment(TodayDateString).format('MMM YYYY') + ' >'}
        </Text>
        <View style={styles.horweekcontainer}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {weekArr.map((item, key) => (
              <View key={key} style={styles.weekitem}>
                <TouchableOpacity
                  onPress={() => this.switchSelection(key, item)}
                  style={[
                    styles.dottedbutton,
                    {
                      borderBottomColor: item.selected
                        ? Colors.primary
                        : Colors.white,
                    },
                  ]}
                  key={key}>
                  <Text style={styles.dottedtopbutton}>
                    {moment(item.startDate).format('ddd')}
                  </Text>
                  <View style={styles.dottedtemcontent}>
                    {item.tags.map((itemm, keyy) => (
                      <View
                        style={[
                          styles.dotteditem,
                          {
                            backgroundColor:
                              DummyData.tag_data[keyy].color,
                          },
                        ]}
                        key={keyy}></View>
                    ))}
                  </View>
                  <Text style={styles.dottedbottombutton}>
                    {moment(item.startDate).format('D')}
                  </Text>
                </TouchableOpacity>
                <View style={styles.grayline}></View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.bottomeventscontainer}>
          <ScrollView>
            <View style={styles.eventcontent}>
              {/* <View style={styles.lefttimecontainer}>
                {Constants.times.map((item, key) => (
                  <Text style={styles.timeitemlabel} key={key}>
                    {item.label}
                  </Text>
                ))}
              </View> */}
              <View style={styles.righttimecontainer}>
                {events.map((item, key) => (
                  <View style={[styles.eventdetailcontent,{borderLeftColor:DummyData.tag_data[key].color}]} key={key}>
                    <Text style={styles.titleitemm}>{item.title}</Text>
                    <Text style={styles.timeitemm}>
                      {moment(item.startTime).format('h:mm A') +
                        ' to ' +
                        moment(item.endTime).format('h:mm A')}
                    </Text>
                    <Text style={styles.locationitemm}>
                      {item.location.street +
                        ', ' +
                        item.location.city +
                        ' ' +
                        item.location.country}
                    </Text>
                    <Text style={styles.inviteesitemm}>
                      {item.invitees.map((itemm, keyy) => (
                        <Text key={keyy}>{itemm.email + ', '}</Text>
                      ))}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
            <VerRuler height={calcHeight(450)} />
          </ScrollView>
        </View>
        <BottomTabs
          onPress2={() => {
            this.floatingAction.animateButton();
          }}
          onPress0={() => this.props.navigation.navigate('HomeScreen')}
          onPress1={() => this.props.navigation.navigate('ActivityScreen')}
          onPress3={() => this.props.navigation.navigate('ScheduleScreen')}
          onPress4={() => this.props.navigation.navigate('MatterScreen')}
          add_rotate={add_rotate}
          tabstate={3}
          display={showbottomtab}
        />
        <Modal
          swipeToClose={false}
          backdropPressToClose={false}
          // onClosed={this.onClose}
          style={[styles.modal]}
          position={'center'}
          ref={'modal1'}>
          <VerRuler height={calcHeight(32)} />
          <View style={styles.modaltop}>
            <Image
              source={Images.modal_calendar}
              style={styles.modal_calendar}
            />
            <TouchableOpacity
              onPress={() => {
                this.refs.modal1.close();
                NavigationService.goBack();
              }}
              style={styles.buttonview}>
              <Image source={Images.modal_close} style={styles.modal_close} />
            </TouchableOpacity>
          </View>
          <VerRuler height={calcHeight(20)} />
          <Text style={styles.modal_title}>
            {Languages.Sorry_only_members_____}
          </Text>
          <VerRuler height={calcHeight(8)} />
          <Text style={styles.modal_text}>
            {Languages.No_worries_you_can_join_us_now_by____}
          </Text>
          <VerRuler height={calcHeight(20)} />
          <IconButton
            // loading={this.props.loading}
            onPress={() => {
              this.refs.modal1.close();
              NavigationService.navigate('IdentificationScreen');
            }}
            width={calcWidth(253)}
            icon={Images.bankid}
            label={Languages.Log_In}
          />
          <VerRuler height={calcHeight(16)} />
          <ColorBorderButton
            width={calcWidth(253)}
            onPress={() => {
              this.refs.modal1.close();
              NavigationService.navigate('LoginWithEmailScreen');
            }}
            label={Languages.Other_methods}
          />
          <VerRuler height={calcHeight(32)} />
        </Modal>
        <FloatingAction
          ref={(ref) => {
            this.floatingAction = ref;
          }}
          actions={Constants.actions}
          position={'center'}
          onPressItem={(name) => {
            switch (name) {
              case 'bt_question':
                this.props.navigation.navigate('AddMatterScreen');
                this.props.setMatterType(10);
                break;
              case 'bt_error':
                this.props.navigation.navigate('AddErrorReportScreen');
                this.props.setMatterType(20);
                break;
              case 'bt_suggest':
                this.props.navigation.navigate('AddMatterScreen');
                this.props.setMatterType(30);
                break;
              case 'bt_complaint':
                this.props.navigation.navigate('AddMatterScreen');
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
        <CustomSpinner
          textContent={'Loading...'}
          visible={this.props.loading || spiner}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.auth.token,
  email: state.auth.email,
  userdata: state.user,
  userType: state.auth.userType,
  loading: state.calendar.loading,
  invitations: state.calendar.invitations,
  colorDots: state.calendar.colorDots,
  events: state.calendar.events,
});

const mapDispatchToProps = {
  getUserProfile,
  setMatterType,
  openCalendarScreen,
};
export default connect(mapStateToProps, mapDispatchToProps)(ScheduleScreen);
