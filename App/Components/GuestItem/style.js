import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  name: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(19),
    color: Colors.black,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    fontWeight: '600',
  },
  iconitem: {
    width: calcHeight(30),
    height: calcHeight(30),
    borderRadius: calcHeight(30 / 2),
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: Colors.opacity1,
  },
  email: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(19),
    color: Colors.black,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
  },
  icon: {
    resizeMode: 'contain',
    tintColor: Colors.black,
    width: calcHeight(12),
    height: calcHeight(12),
  },
  avatar: {
    width: calcHeight(44),
    height: calcHeight(44),
    resizeMode: 'cover',
    borderRadius: calcHeight(44 / 2),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: calcWidth(331),
    alignSelf: 'center',
    marginTop: calcHeight(12),
  },
  leftcontent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftitem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightitem: {
    marginLeft: calcWidth(11)
  },
});
