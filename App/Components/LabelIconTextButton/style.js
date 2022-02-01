import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(21),
    color: Colors.black0,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    marginLeft: calcWidth(23),
  },
  icon: {
    width: calcHeight(24),
    height: calcHeight(24),
    resizeMode: 'contain',
    tintColor: Colors.black0,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: calcWidth(331),
    alignSelf: 'center',
    borderBottomWidth: calcHeight(1),
    borderBottomColor: Colors.gray5,
    paddingVertical:calcHeight(8),
    marginTop:calcHeight(13),
  },
  leftcontent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lefticon: {
    width: calcHeight(15),
    height: calcHeight(15),
    resizeMode: 'contain',
    tintColor: Colors.black0,
  }
});
