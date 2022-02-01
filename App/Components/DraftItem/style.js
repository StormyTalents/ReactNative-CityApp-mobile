import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  title: {
    fontSize: Fonts.size.regular,
    fontWeight: '600',
    lineHeight: calcHeight(24),
    color: Colors.black2,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
  },
  draft: {
    fontSize: Fonts.size.regular,
    lineHeight: calcHeight(20),
    color: Colors.red,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    marginTop:calcHeight(5),
  },
  topcontent:{
    flexDirection:'row',
    width:calcWidth(293),
    justifyContent:'space-between',
  },
  icon: {
    width: calcHeight(30),
    height: calcHeight(30),
    resizeMode: 'contain',
    marginTop:calcHeight(10)
  },
  container: {
    width: calcWidth(343),
    flexDirection: 'row',
    marginTop:calcHeight(30),
  },
  rightcontent: {
    marginLeft:calcWidth(15),
  },
  text: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(19),
    color: Colors.black5,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    marginTop:calcHeight(12),
  },
  trashicon:{
    width: calcHeight(24),
    height: calcHeight(24),
    resizeMode: 'contain',
  }
});
