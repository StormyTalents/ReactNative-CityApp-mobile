import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  title: {
    fontSize: Fonts.size.small,
    fontWeight: 'bold',
    lineHeight: calcHeight(22),
    color: Colors.black,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    marginLeft: calcHeight(5),
  },
  text: {
    fontSize: Fonts.size.small,
    lineHeight: calcHeight(22),
    color: Colors.gray1,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    marginLeft: calcHeight(5),
    width: calcHeight(250),
  },
  icon: {
    width: calcHeight(30),
    height: calcHeight(30),
    resizeMode: 'contain',
  },
  itemcontent: {
    marginLeft: calcHeight(15),
  },
  itemcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
