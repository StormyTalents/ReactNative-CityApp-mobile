import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttongroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: calcWidth(331),
    paddingTop: calcHeight(50),
    alignSelf: 'center',
  },
  titleText: {
    fontSize: Fonts.size.spec,
    lineHeight: calcHeight(22),
    color: Colors.black,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    fontWeight: '500',
  },
  titleimage: {
    width: calcHeight(20),
    height: calcHeight(20),
    resizeMode: 'contain',
  },
  leftcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: calcHeight(20),
    width: calcWidth(331),
    alignSelf: 'center',
  },
  rightbutton: {
    marginTop: calcHeight(15),
  },
  detail: {
    fontSize: Fonts.size.small,
    lineHeight: calcHeight(22),
    color: Colors.primary,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    fontWeight: '500',
  },
  title: {
    fontSize: Fonts.size.regular,
    fontWeight: '600',
    lineHeight: calcHeight(24),
    color: Colors.black2,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
  },
  label: {
    fontSize: Fonts.size.medium,
    fontWeight: '600',
    lineHeight: calcHeight(24),
    color: Colors.black2,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
  },
  leftcontent: {
    marginLeft: calcWidth(15),
  },
  icon: {
    width: calcHeight(30),
    height: calcHeight(30),
    resizeMode: 'contain',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    width: deviceWidth,
    alignSelf: 'center',
    marginTop: calcHeight(8),
    padding: calcHeight(15),
  },
  time: {
    fontSize: Fonts.size.small,
    lineHeight: calcHeight(18),
    color: Colors.gray6,
    fontFamily: Fonts.type.base,
    marginTop: calcHeight(5),
  },
  id: {
    marginTop: calcHeight(5),
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(20),
    color: Colors.gray6,
    fontFamily: Fonts.type.base,
  },
  text: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(19),
    color: Colors.charcoal,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    width: calcWidth(295),
    marginTop: calcHeight(12),
  },
  support_title: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(20),
    color: Colors.black2,
    fontFamily: Fonts.type.base,
  },
  rightcontent: {
    marginLeft: calcWidth(15),
  },
  topcontent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomcontainer: {
    marginTop: calcHeight(14),
    width: calcWidth(331),
    borderBottomColor:Colors.gray2,
    borderBottomWidth:calcHeight(1),
    paddingBottom:calcHeight(14),
  },
  agent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: calcHeight(13),
  },
  rightitem: {
    marginLeft: calcWidth(19),
  },
  avatar: {
    width: calcHeight(35),
    height: calcHeight(35),
    resizeMode: 'cover',
    borderRadius: calcHeight(35 / 2),
  },
  id1: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(20),
    color: Colors.gray6,
    fontFamily: Fonts.type.base,
  },
});