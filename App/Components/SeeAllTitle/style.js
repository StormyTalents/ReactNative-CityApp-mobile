import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label: {
    fontSize: Fonts.size.h7,
    fontWeight: 'bold',
    lineHeight: calcHeight(30),
    color: Colors.black,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    marginTop:calcHeight(4),
  },
  icon: {
    width: calcHeight(30),
    height: calcHeight(30),
    resizeMode: 'contain',
    tintColor:Colors.gray10,
  },
  container: {
    width: calcWidth(343),
    paddingBottom:calcHeight(15),
    borderBottomWidth:calcHeight(1),
    borderBottomColor:Colors.gray2,
  },
  text: {
    fontSize: Fonts.size.medium,
    fontWeight: '600',
    lineHeight: calcHeight(21),
    color: Colors.gray10,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    marginTop:calcHeight(7),
  },
});
