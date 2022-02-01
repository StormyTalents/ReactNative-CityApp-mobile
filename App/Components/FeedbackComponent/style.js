import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label: {
    fontSize: Fonts.size.medium,
    fontWeight: '500',
    lineHeight: calcHeight(22),
    color: Colors.lightblue,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    marginLeft: calcHeight(10),

  },
  icon: {
    width: calcHeight(20),
    height: calcHeight(20),
    resizeMode: 'contain',
    tintColor: Colors.lightblue,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.opacityblue,
    height: calcHeight(40),
    width:calcWidth(276),
    borderRadius: calcHeight(5),
  },
  container: {
    width: calcWidth(331),

  },
  title: {
    fontSize: Fonts.size.regular,
    fontWeight: 'normal',
    lineHeight: calcHeight(22),
    color: Colors.balck0,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
  },
  textfield:{
    fontSize: Fonts.size.medium,
    fontWeight: 'normal',
    lineHeight: calcHeight(21),
    color: Colors.balck0,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    borderWidth:calcHeight(1),
    borderColor:Colors.gray5,
    borderRadius:calcHeight(5),
    marginVertical:calcHeight(10),
    height:calcHeight(193),
  },
});
