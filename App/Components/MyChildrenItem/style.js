import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  name: {
    fontSize: Fonts.size.h7,
    lineHeight: calcHeight(30),
    color: Colors.black2,
    fontFamily: Fonts.type.base,
    fontWeight: '600',
    letterSpacing: 0.374,
  },
  container: {
    width: deviceWidth,
    padding: calcHeight(20),
    borderBottomColor: Colors.gray1,
    borderBottomWidth: calcHeight(1),
  },
  birthday: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(21),
    color: Colors.black5,
    fontFamily: Fonts.type.base,
    letterSpacing: 0.374,
    fontWeight: '500',
    marginTop: calcHeight(6),
  },
  gender: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(21),
    color: Colors.black4,
    fontFamily: Fonts.type.base,
    letterSpacing: 0.374,
    fontWeight: '500',
    marginTop: calcHeight(6),
  },
  age: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(21),
    color: Colors.black5,
    fontFamily: Fonts.type.base,
    letterSpacing: 0.374,
    fontWeight: '500',
    marginTop: calcHeight(6),
  },
});
