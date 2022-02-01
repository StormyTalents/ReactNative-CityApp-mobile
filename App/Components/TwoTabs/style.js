import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  label0: {
    fontSize: Fonts.size.spec,
    fontWeight: 'bold',
    lineHeight: calcHeight(22),
    color: Colors.black,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    marginLeft: calcHeight(5),
  },
  label1: {
    fontSize: Fonts.size.spec,
    fontWeight: 'normal',
    lineHeight: calcHeight(22),
    color: Colors.black,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    marginLeft: calcHeight(5),
  },
  button0: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Colors.primary,
    borderBottomWidth: calcHeight(5),
    paddingBottom:calcHeight(5),
    marginLeft:calcHeight(15),
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Colors.white,
    borderBottomWidth: calcHeight(5),
    paddingBottom:calcHeight(5),
    marginLeft:calcHeight(15),
  },
});
