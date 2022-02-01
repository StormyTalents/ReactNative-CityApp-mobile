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
    width: calcWidth(200),
    alignSelf: 'flex-start',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue,
    height: calcHeight(43),
    width: calcWidth(95),
    borderRadius: calcHeight(6),
  },
  container: {
    paddingTop: calcHeight(16),
    borderTopWidth: calcHeight(1),
    borderTopColor: Colors.gray2,
    width: calcWidth(344),
    alignItems: 'center',
    paddingBottom: calcHeight(20),
    flexDirection:'row',
    justifyContent:'space-between',
    position:'absolute',
    bottom:0,
    alignSelf:'center',
    backgroundColor:Colors.white,
  },
  buttontext:{
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(19),
    color: Colors.white,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
  },
});
