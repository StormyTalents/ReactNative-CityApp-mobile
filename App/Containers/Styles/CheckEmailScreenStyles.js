import {StyleSheet} from 'react-native';
import {Metrics, ApplicationStyles, Colors, Fonts} from '../../Themes/';
import {
  calcHeight,
  calcWidth,
  deviceHeight,
  deviceWidth,
} from '../../Themes/ConvertSize';
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
  },
  logoshower: {
    position: 'absolute',
    top: calcHeight(0),
    left: calcWidth(30),
  },
  applogo: {
    height: calcHeight(393),
    width: calcHeight(393),
    resizeMode: 'contain',
  },
  forgottext: {
    fontSize: Fonts.size.medium,
  },
  signupbuttoncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  signuptext: {
    fontSize: Fonts.size.medium,
    fontWeight: '600',
    lineHeight: calcHeight(22),
    color: Colors.regular,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
  },
  forgotbutton: {
    alignSelf: 'flex-start',
    marginTop: calcHeight(0),
    height: calcHeight(35),
  },
  mainContainer: {
    flex: 1,
  },
  backgroundImage: {
    width: deviceWidth,
    height: calcHeight(528),
    resizeMode: 'stretch',
  },
  section: {
    padding: calcWidth(22),
  },
  sectionText: {
    fontSize: Fonts.size.regular,
    fontWeight: '500',
    lineHeight: calcHeight(24),
    color: Colors.regular,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    position: 'absolute',
    top: calcHeight(150),
    left: calcWidth(105),
  },
  sectionTitle: {
    fontSize: Fonts.size.h3,
    fontWeight: 'bold',
    lineHeight: calcHeight(48),
    color: Colors.black,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
  },
  check_email: {
    height: calcHeight(44),
    width: calcHeight(44),
    resizeMode: 'contain',
  },
  helpIcon: {
    height: calcHeight(24),
    width: calcHeight(24),
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  helpButton: {
    marginBottom: -calcHeight(5),
  },
  modal: {
    width: deviceWidth,
    height: calcHeight(214),
    borderTopLeftRadius: calcHeight(10),
    borderTopRightRadius: calcHeight(10),
    alignItems: 'center',
  },
  modalContainer: {
    width: calcWidth(341),
  },
  modalTitle: {
    fontSize: Fonts.size.regular,
    fontWeight: '500',
    lineHeight: calcHeight(18),
    color: Colors.black,
    letterSpacing: -0.078,
    fontFamily: Fonts.type.base,
    marginTop:calcHeight(15),
    width: calcWidth(341),
  },
  modalText: {
    fontSize: Fonts.size.small,
    fontWeight: '500',
    lineHeight: calcHeight(18),
    color: Colors.gray3,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    marginTop:calcHeight(9),
    width: calcWidth(341),
  },
});
