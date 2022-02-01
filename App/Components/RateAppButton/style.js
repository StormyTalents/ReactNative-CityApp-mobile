import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label: {
    fontSize: Fonts.size.h5,
    fontWeight: '500',
    lineHeight: calcHeight(29),
    color: Colors.black0,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
  },
  rate: {
    fontSize: Fonts.size.h3,
    fontWeight: '500',
    color: Colors.black0,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
  },
  input: {
    fontSize: Fonts.size.input,
    fontWeight: '500',
    color: Colors.black0,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    marginTop: calcHeight(5),
    marginLeft: calcWidth(6)
  },
  icon: {
    width: calcHeight(11),
    height: calcHeight(11),
    resizeMode: 'contain',
    marginHorizontal:calcWidth(3.52),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: calcHeight(5),
  },
  container: {
    width: calcWidth(331),
  },
  topitem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttontext: {
    fontSize: Fonts.size.medium,
    fontWeight: '500',
    color: Colors.lightblue,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    textDecorationLine: 'underline',
  },
  bottomcontainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: calcHeight(20),
  },
  starcontainer: {
    flexDirection:'row',
    alignItems: 'center',
    marginTop:calcHeight(7)
  }
});
