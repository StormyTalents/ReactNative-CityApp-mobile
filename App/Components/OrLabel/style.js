import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label: {
    fontSize: Fonts.size.medium,
    fontWeight: '500',
    color: Colors.black0,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    lineHeight:calcHeight(22),
  },
  button: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: calcHeight(55),
    width: calcWidth(331),
    marginTop:calcHeight(90),
  },
  grayline: {
    width:calcWidth(154),
    height:calcHeight(1),
    backgroundColor:Colors.gray5,
  },
  topcontent: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width: calcWidth(331),
  },
  text: {
    fontSize: Fonts.size.small,
    fontWeight: '500',
    color: Colors.black0,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    lineHeight:calcHeight(22),
  }
});
