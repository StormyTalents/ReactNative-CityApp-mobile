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
    width: calcWidth(343),
    marginTop: calcHeight(16),
  },
  icon: {
    width: calcHeight(35),
    height: calcHeight(35),
    resizeMode: 'contain',
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    height: calcHeight(44),
    width: calcWidth(164),
    borderRadius: calcHeight(6),
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    height: calcHeight(44),
    width: calcWidth(164),
    borderRadius: calcHeight(6),
    flexDirection:'row',
    borderColor:Colors.primary,
    borderWidth:calcHeight(2),
  },
  button3: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    height: calcHeight(44),
    width: calcWidth(164),
    borderRadius: calcHeight(6),
    flexDirection:'row',
  },
  container: {
    paddingTop: calcHeight(16),
    borderTopWidth: calcHeight(1),
    borderTopColor: Colors.gray2,
    width: deviceWidth,
    alignItems: 'center',
    paddingBottom: calcHeight(20),
  },
  buttoncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: calcWidth(343),
  },
  buttontext1:{
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(19),
    color: Colors.white,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
  },
  buttontext2:{
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(19),
    color: Colors.primary,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    marginLeft:calcWidth(7),
  },
  buttontext3:{
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(19),
    color: Colors.white,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    marginLeft:calcWidth(7),
  },
  icon:{
    width:calcHeight(16),
    height:calcHeight(16),
    resizeMode:'contain'
  }
});
