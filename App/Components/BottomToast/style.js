import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(20),
    color: Colors.white,
    fontFamily: Fonts.type.base,
    marginLeft: calcHeight(16),
  },
  icon: {
    width: calcHeight(20),
    height: calcHeight(20),
    resizeMode: 'contain',
    tintColor: Colors.black2,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: calcHeight(36),
    width: calcWidth(62),
    backgroundColor:Colors.weightblue,
    marginRight:calcWidth(13)
  },
  untext:{
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(16),
    color: Colors.white,
    fontFamily: Fonts.type.base,
  },
  container1: {
    flexDirection: 'row',
    width: calcWidth(344),
    height: calcHeight(52),
    borderRadius: calcHeight(4),
    backgroundColor: Colors.opacity9,
    position: 'absolute',
    bottom: calcHeight(12),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    opacity: 1,
  },
  container2: {
    flexDirection: 'row',
    width: calcWidth(344),
    height: calcHeight(52),
    borderRadius: calcHeight(4),
    backgroundColor: Colors.opacity9,
    position: 'absolute',
    bottom: calcHeight(12),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    opacity: 0,
  },
});
