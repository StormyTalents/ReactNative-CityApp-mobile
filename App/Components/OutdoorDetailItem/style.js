import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  text: {
    fontSize: Fonts.size.small,
    lineHeight: calcHeight(18),
    color: Colors.black6,
    letterSpacing: 0.375,
    fontFamily: Fonts.type.base,
    width: calcWidth(268),
    alignSelf: 'flex-start',
  },
  textcontainer: {
    marginTop: calcHeight(14),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: calcHeight(35),
    height: calcHeight(35),
    resizeMode: 'contain',
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    height: calcHeight(44),
    width: calcWidth(72),
    borderRadius: calcHeight(6),
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    height: calcHeight(44),
    width: calcWidth(130),
    borderRadius: calcHeight(6),
    flexDirection: 'row',
    borderColor: Colors.primary,
    borderWidth: calcHeight(2),
  },
  button3: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    height: calcHeight(44),
    width: calcWidth(130),
    borderRadius: calcHeight(6),
    flexDirection: 'row',
  },
  container: {
    width: calcWidth(256),
    height: calcHeight(201),
    borderRadius: calcHeight(4),
    marginHorizontal: calcWidth(15 / 2),
    marginVertical: calcHeight(5),
    elevation: calcHeight(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor: Colors.white,
    paddingHorizontal: calcWidth(10),
    paddingVertical: calcHeight(14),
  },
  buttoncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop:calcHeight(13),
    borderTopColor:Colors.black8,
    borderTopWidth:calcHeight(1),
    marginTop:calcHeight(10),
  },
  buttontext1: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(19),
    color: Colors.primary,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    fontWeight:'500',
  },
  buttontext2: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(19),
    color: Colors.primary,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    marginLeft: calcWidth(7),
  },
  buttontext3: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(19),
    color: Colors.white,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    marginLeft: calcWidth(7),
  },
  icon: {
    width: calcHeight(16),
    height: calcHeight(16),
    resizeMode: 'contain'
  },
  datetime: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(21),
    color: Colors.primary,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    fontWeight: '600',
  },
  name: {
    fontSize: Fonts.size.input,
    lineHeight: calcHeight(27),
    color: Colors.black,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    fontWeight: 'bold',
  },
  location: {
    fontSize: Fonts.size.small,
    lineHeight: calcHeight(18),
    color: Colors.black8,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
  },
  rightcontent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: calcHeight(11),
    height: calcHeight(11),
    resizeMode: 'contain',
  },
  distance: {
    fontSize: Fonts.size.small,
    lineHeight: calcHeight(18),
    color: Colors.black8,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    marginLeft:calcWidth(4),
  },
});
