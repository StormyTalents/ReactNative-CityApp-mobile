import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
import { chain } from "ramda";
export default StyleSheet.create({
  container: {
    width: calcWidth(343),
    height: calcHeight(261),
    borderRadius: calcHeight(7),
    backgroundColor: Colors.opacity5,
    marginBottom: calcHeight(19),
  },
  image: {
    width: calcWidth(343),
    height: calcHeight(261),
    resizeMode: 'cover',
    borderRadius: calcHeight(7),
  },
  floatcontainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: calcHeight(22),
  },
  icon: {
    width: calcHeight(40),
    height: calcHeight(40),
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
  title: {
    fontSize: Fonts.size.medium,
    fontWeight: '600',
    lineHeight: calcHeight(21),
    color: Colors.white,
    fontFamily: Fonts.type.base,
    marginTop:calcHeight(12),
  },
  type: {
    fontSize: Fonts.size.input,
    fontWeight: 'bold',
    lineHeight: calcHeight(27),
    color: Colors.white,
    fontFamily: Fonts.type.base,
    marginTop:calcHeight(5),
  },
  location: {
    fontSize: Fonts.size.small,
    lineHeight: calcHeight(21),
    color: Colors.gray2,
    fontFamily: Fonts.type.base,
    marginTop:calcHeight(5),
  },
});
