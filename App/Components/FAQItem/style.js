import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  icon: {
    width: calcHeight(14),
    height: calcHeight(14),
    resizeMode: 'contain',
  },
  container: {
    width: calcWidth(335),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end',
    borderBottomWidth:calcHeight(1),
    borderBottomColor:Colors.gray2,
    paddingBottom:calcHeight(19),
  },
  text: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(21),
    color: Colors.black3,
    fontFamily: Fonts.type.base,
    letterSpacing: 0.374,
    fontWeight: '500',
    marginTop: calcHeight(15),
    width:calcWidth(278),
  },
});
