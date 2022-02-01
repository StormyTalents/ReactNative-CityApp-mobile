import React, {Component} from 'react';
import {TouchableOpacity, Text, Image, View, ScrollView} from 'react-native';
import {
  MatterTopSortItem,
  VerRuler,
  TwoTextTabs,
  BottomTabs,
  MatterItem,
  MyMatterItem,
  SearchComponent,
  SortMatterTopSortItem,
  RadioComponent,
  ColorBorderButton,
  IconButton,
} from '../Components';
import {calcHeight, calcWidth} from '../Themes/ConvertSize';

import {Images, Languages, Constants, DummyData, Colors} from '../Themes';
import styles from './Styles/MatterScreenStyles';
import Modal from 'react-native-modalbox';
import {FloatingAction} from '../Components/react-native-floating-action';
import {connect} from 'react-redux';
import {getUserProfile, setMatterType} from 'Actions/User';
import {getReportsForReporter, getBriefReportWithId} from 'Actions/Report';
import NavigationService from 'Navigation/NavigationService';

class MatterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabstate: 1,
      add_rotate: false,
      sort: -1,
      mysort: -1,
      showbottomtab: 1,
      sort_data: Constants.sort_arr[0],
      radio: 0,
      draftlist: [],
      clue: '',
    };
  }
  componentDidMount() {
    this.GetReportsForReporter();
    if (this.props.userType == 12) {
      this.refs.modal3.open();
      // this.setState({
      //   showbottomtab: 0,
      // });
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.draftlist !== this.props.draftlist) {
      this.setState({draftlist: this.props.draftlist});
      console.log('matters-------------', this.props.draftlist);
    }
  }
  GetReportsForReporter = () => {
    let {email, token, username} = this.props;
    const isDraft = false;
    this.props.getReportsForReporter({id: username, isDraft, email, token});
  };
  GetBriefReportWithId = (id) => {
    let {email, token} = this.props;
    this.props.getBriefReportWithId({id, email, token});
  };
  onClose = () => {
    this.setState({showbottomtab: 1});
  };

  render() {
    let {
      tabstate,
      add_rotate,
      sort,
      mysort,
      showbottomtab,
      sort_data,
      radio,
      draftlist,
      clue,
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <VerRuler height={calcHeight(60)} />
        <Text style={styles.titleText}>{Languages.Matter}</Text>
        <VerRuler height={calcHeight(30)} />
        <TwoTextTabs
          label1={Languages.My_Matters}
          label2={Languages.Other_Matters}
          onPress1={() => this.setState({tabstate: 0})}
          onPress2={() => this.setState({tabstate: 1})}
          tabstate={tabstate}
        />
        {tabstate == 0 && (
          <View style={styles.searchcontainer}>
            <VerRuler height={calcHeight(22)} />
            <SearchComponent
              onPress={() => this.setState({clue: ''})}
              onChangeText={(clue) => this.setState({clue})}
              value={clue}
              icon={Images.search}
              placeholder={
                Languages.Ticket_ID + ', ' + Languages.Ticket_Name + ',,'
              }
            />
          </View>
        )}
        <VerRuler height={calcHeight(18)} />
        {tabstate == 1 && (
          <MatterTopSortItem
            sort={sort}
            onPress0={() => this.setState({sort: 0})}
            onPress1={() => this.setState({sort: 1})}
            onPress2={() => this.setState({sort: 2})}
            onPress3={() => this.setState({sort: 3})}
          />
        )}
        {tabstate == 0 && (
          <SortMatterTopSortItem
            sort={mysort}
            onPress0={() => {
              this.setState({
                showbottomtab: 0,
                sort_data: Constants.sort_arr[0],
              });
              this.refs.modal1.open();
            }}
            onPress1={() => {
              this.setState({
                showbottomtab: 0,
                sort_data: Constants.sort_arr[1],
              });
              this.refs.modal1.open();
            }}
            onPress2={() => {
              this.setState({
                showbottomtab: 0,
                sort_data: Constants.sort_arr[2],
              });
              this.refs.modal1.open();
            }}
            onPress3={() => {
              this.setState({
                showbottomtab: 0,
                sort_data: Constants.sort_arr[3],
              });
              this.refs.modal1.open();
            }}
          />
        )}
        <ScrollView style={styles.scrollcontainer}>
          {tabstate == 0 &&
            DummyData.my_matter_data.map((item, key) => (
              <MyMatterItem
                onPress={() =>
                  this.props.navigation.navigate('CaseDetailScreen')
                }
                title={item.title}
                id={item.id}
                time={item.time}
                action={item.action}
                date={item.date}
                status={item.status}
                newly={item.newly}
                key={key}
              />
            ))}
          {
            // sort == -1 && tabstate == 1 &&draftlist.length!==0&& draftlist.map((item, key) => !item.mine && (
            sort == -1 &&
              tabstate == 1 &&
              draftlist.length !== 0 &&
              draftlist.map((item, key) => (
                <MatterItem
                  // onPress={() => this.props.navigation.navigate('MatterChatScreen')}
                  onPress={() => this.GetBriefReportWithId(item.id)}
                  title={item.title}
                  id={item.id}
                  time={item.createdTime}
                  type={item.type}
                  text={item.description}
                  key={key}
                />
              ))
          }
          {
            // sort == 0 && tabstate == 1 && DummyData.matter_data.map((item, key) => !item.mine && item.type == 0 && (
            sort == 0 &&
              tabstate == 1 &&
              draftlist.length !== 0 &&
              draftlist.map(
                (item, key) =>
                  item.type == 10 && (
                    <MatterItem
                      onPress={() => this.GetBriefReportWithId(item.id)}
                      title={item.title}
                      id={item.id}
                      time={item.time}
                      type={item.type}
                      text={item.description}
                      key={key}
                    />
                  ),
              )
          }
          {sort == 1 &&
            tabstate == 1 &&
            draftlist.length !== 0 &&
            draftlist.map(
              (item, key) =>
                item.type == 20 && (
                  <MatterItem
                    onPress={() => this.GetBriefReportWithId(item.id)}
                    title={item.title}
                    id={item.id}
                    time={item.time}
                    type={item.type}
                    text={item.description}
                    key={key}
                  />
                ),
            )}
          {sort == 2 &&
            tabstate == 1 &&
            draftlist.length !== 0 &&
            draftlist.map(
              (item, key) =>
                item.type == 30 && (
                  <MatterItem
                    onPress={() => this.GetBriefReportWithId(item.id)}
                    title={item.title}
                    id={item.id}
                    time={item.time}
                    type={item.type}
                    text={item.description}
                    key={key}
                  />
                ),
            )}
          {sort == 3 &&
            tabstate == 1 &&
            draftlist.length !== 0 &&
            draftlist.map(
              (item, key) =>
                item.type == 40 && (
                  <MatterItem
                    onPress={() => this.GetBriefReportWithId(item.id)}
                    title={item.title}
                    id={item.id}
                    time={item.time}
                    type={item.type}
                    text={item.description}
                    key={key}
                  />
                ),
            )}
          <VerRuler height={calcHeight(90)} />
        </ScrollView>
        <BottomTabs
          onPress2={() => {
            this.floatingAction.animateButton();
          }}
          onPress0={() => this.props.navigation.navigate('HomeScreen')}
          onPress1={() => this.props.navigation.navigate('ActivityScreen')}
          onPress3={() => this.props.navigation.navigate('ScheduleScreen')}
          onPress4={() => this.props.navigation.navigate('MatterScreen')}
          add_rotate={add_rotate}
          tabstate={4}
          display={showbottomtab}
        />
        <Modal
          onClosed={this.onClose}
          style={[styles.modal]}
          position={'bottom'}
          ref={'modal1'}>
          <VerRuler height={calcHeight(29)} />
          <Text style={styles.title}>{sort_data.title}</Text>
          <VerRuler height={calcHeight(28)} />
          <RadioComponent
            radio={radio}
            onPress0={() => this.setState({radio: 0})}
            onPress1={() => this.setState({radio: 1})}
            onPress2={() => this.setState({radio: 2})}
            label0={sort_data.option1_label}
            value0={sort_data.option1_valus}
            label1={sort_data.option2_label}
            value1={sort_data.option2_valus}
            label2={sort_data.option3_label}
            value2={sort_data.option3_valus}
          />
          <VerRuler height={calcHeight(30)} />
        </Modal>
        <Modal
          swipeToClose={false}
          backdropPressToClose={false}
          // onClosed={this.onClose}
          style={[styles.modal3]}
          position={'center'}
          ref={'modal3'}>
          <VerRuler height={calcHeight(32)} />
          <View style={styles.modaltop}>
            <Image source={Images.modal_map} style={styles.modal_calendar} />
            <TouchableOpacity
              onPress={() => {
                this.refs.modal3.close();
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
            loading={this.props.loading}
            onPress={() => {
              this.refs.modal3.close();
              NavigationService.navigate('IdentificationScreen');
            }}
            width={calcWidth(253)}
            icon={Images.bankid}
            label={Languages.Log_In}
          />
          <VerRuler height={calcHeight(16)} />
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
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.auth.token,
  email: state.auth.email,
  username: state.auth.username,
  userdata: state.user,
  draftlist: state.report.draftlist,
  userType: state.auth.userType,
});

const mapDispatchToProps = {
  getUserProfile,
  setMatterType,
  getReportsForReporter,
  getBriefReportWithId,
};
export default connect(mapStateToProps, mapDispatchToProps)(MatterScreen);
