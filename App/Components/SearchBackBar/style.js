import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(21),
    color: Colors.primary,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    marginLeft: calcWidth(23),
  },
  icon: {
    width: calcHeight(21),
    height: calcHeight(21),
    resizeMode: 'contain',
    tintColor: Colors.black0,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: calcWidth(331),
    alignSelf: 'center',
  },
  leftcontent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input:{
    backgroundColor:Colors.gray2,
    marginLeft:calcWidth(20),
    width:calcWidth(220),
    paddingVertical:calcHeight(5),
    borderRadius:calcHeight(20),
    paddingLeft:calcWidth(10),
  }
});
