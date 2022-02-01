import React, {Component} from 'react';
import {ScrollView, Text, Image, View, TouchableOpacity} from 'react-native';
import {
  AccountItemButton,
  VerRuler,
  TextButton,
  LabelButton,
  IconButton,
  ColorBorderButton
} from '../Components';
import {Images, Languages, ConvertSize, DummyData} from '../Themes';
import {calcHeight, calcWidth} from '../Themes/ConvertSize';
import styles from './Styles/AccountScreenStyles';
import {logoutUser} from 'Actions/Auth';
import {connect} from 'react-redux';
import NavigationService from 'Navigation/NavigationService';
import Modal from 'react-native-modalbox';

class AccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      hasChildren: false,
    };
  }
  logout = () => {
    this.props.logoutUser();
  };
  componentDidUpdate(prevProps) {
    if (prevProps.hasChildren !== this.props.hasChildren) {
      this.setState({hasChildren: this.props.hasChildren});
    }
  }
  componentDidMount() {
    this.setState({hasChildren: this.props.hasChildren});
    if (this.props.userType == 12) {
      this.refs.modal1.open();
      // this.setState({
      //   showbottomtab: 0,
      // });
    }
  }
  render() {
    let {hasChildren} = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.section}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <VerRuler height={calcHeight(60)} />
            <LabelButton
              label={Languages.Account}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
              icon={Images.arrow_left}
            />
            <VerRuler height={calcHeight(50)} />
            <AccountItemButton
              onPress={() => this.props.navigation.navigate('BasicInfoScreen')}
              label={Languages.My_Information}
              icon={Images.basic_info}
              icon1={Images.arrow_right}
            />
            {hasChildren ? (
              <AccountItemButton
                onPress={() =>
                  this.props.navigation.navigate('MyChildrenScreen')
                }
                label={Languages.My_Children}
                icon={Images.children}
                icon1={Images.arrow_right}
              />
            ) : null}
            <AccountItemButton
              onPress={() =>
                this.props.navigation.navigate('SwitchLanguageScreen')
              }
              label={Languages.Languages}
              icon={Images.global}
              icon1={Images.arrow_right}
            />
            <AccountItemButton
              onPress={() =>
                this.props.navigation.navigate('NotificationScreen')
              }
              label={Languages.Notification_Settings}
              icon={Images.notification}
              icon1={Images.arrow_right}
            />
            <AccountItemButton
              onPress={() =>
                this.props.navigation.navigate('AboutCitiAppScreen')
              }
              label={Languages.About_CitiApp}
              icon={Images.about}
              icon1={Images.arrow_right}
            />
            <AccountItemButton
              onPress={() =>
                this.props.navigation.navigate('HelpSupportScreen')
              }
              label={Languages.Help_Support}
              icon={Images.helpsupport}
              icon1={Images.arrow_right}
            />
            <TextButton
              onPress={() => this.logout()}
              label={Languages.Logout}
              style={styles.textbutton1}
              buttonstyle={styles.button1}
            />
            <View style={styles.buttoncontainer}>
              <VerRuler height={calcHeight(16)} />
              <Image source={Images.bg_account} style={styles.bg_account} />
              <VerRuler height={calcHeight(16)} />
              <Text style={styles.bottomtext}>{Languages.Version10}</Text>
              <Text style={styles.bottomtext}>{Languages.Olivuex_ab}</Text>
              <VerRuler height={calcHeight(20)} />
            </View>
          </ScrollView>
        </View>
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
            loading={this.props.loading}
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
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  hasChildren: state.user.hasChildren,
  userType: state.auth.userType,
});

const mapDispatchToProps = {
  logoutUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);
