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
    marginLeft: calcWidth(11),
  },
  icon: {
    width: calcHeight(21),
    height: calcHeight(21),
    resizeMode: 'contain',
    tintColor: Colors.blue,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: calcWidth(331),
    alignSelf: 'center',
    paddingVertical:calcHeight(8),
    marginTop:calcHeight(13),
  },
  iconitem: {
    width:calcWidth(47),
    height:calcHeight(33),
    borderRadius:calcHeight(4),
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Colors.midblue,
  },
});
