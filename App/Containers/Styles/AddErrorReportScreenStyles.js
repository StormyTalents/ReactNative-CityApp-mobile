import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  mainContainer: {
    backgroundColor: Colors.black,
  },
  mapcontainer: {
    height: calcHeight(510),
    width: deviceWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  addbuttoncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: calcWidth(343),
  },
  arrow_left: {
    width: calcHeight(20),
    height: calcHeight(20),
    resizeMode: 'contain',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  layout: {
    backgroundColor: Colors.gray0,
    height: calcHeight(15),
    marginTop: calcHeight(40),
    borderTopRightRadius: calcHeight(60),
    borderTopLeftRadius: calcHeight(60),
    marginHorizontal: calcHeight(25),
  },
  section: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: calcHeight(15),
    borderTopRightRadius: calcHeight(15),
    alignItems: 'center',
  },
  sectionitem: {
    width: calcWidth(331),
  },
  backgroundImage: {
    width: deviceWidth,
    height: calcHeight(487),
    resizeMode: 'stretch',
  },
  text: {
    fontSize: Fonts.size.tiny,
    lineHeight: calcHeight(48),
    color: Colors.black5,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    width: calcWidth(341),
    alignSelf: 'center',
  },
  titleText: {
    fontSize: Fonts.size.h8,
    lineHeight: calcHeight(41),
    color: Colors.black,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    fontWeight: '600',
    // width: calcWidth(341),
  },
  titleText1: {
    fontSize: Fonts.size.h8,
    lineHeight: calcHeight(41),
    color: Colors.black,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    fontWeight: '600',
  },
  gradient: {
    position: 'absolute',
    width: deviceWidth,
    height: calcHeight(81),
    resizeMode: 'cover',
    top: calcHeight(300),
    zIndex: 999,
  },
  titleimage: {
    width: calcHeight(120),
    height: calcHeight(120),
    resizeMode: 'contain',
  },
  scrollitem: {
    width: calcWidth(210),
    height: calcHeight(117),
    marginHorizontal: calcWidth(3),
  },
  grayline: {
    width: calcWidth(331),
    backgroundColor: Colors.gray1,
    height: calcHeight(1),
  },
  description: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(21),
    color: Colors.black2,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    marginLeft: calcHeight(5),
    fontWeight: '500',
  },
  copybutton: {
    marginLeft: calcWidth(12),
  },
  copycontainer: {
    flexDirection: 'row',
  },
  copyimage: {
    width: calcHeight(17),
    height: calcHeight(17),
    resizeMode: 'contain',
  },
  markericon: {
    width: calcHeight(46),
    height: calcHeight(46),
    borderRadius: calcHeight(46 / 2),
    backgroundColor: Colors.opacity10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marker: {
    width: calcHeight(19),
    height: calcHeight(19),
    resizeMode: 'cover',
    borderWidth: calcHeight(2),
    borderColor: Colors.white,
    borderRadius: calcHeight(19 / 2),
  },
  addbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: calcWidth(341),
    alignSelf: 'center',
  },
  addbutton: {
    backgroundColor: Colors.midblue,
    width: calcWidth(84),
    height: calcHeight(33),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: calcHeight(4),
  },
  addtext: {
    color: Colors.primary,
    fontSize: Fonts.size.medium,
    fontWeight: '600',
    fontFamily: Fonts.type.base,
    lineHeight: calcHeight(21),
  },
  scrollcontainer: {
    height: calcHeight(179),
  }
})
