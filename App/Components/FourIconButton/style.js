import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label: {
    fontSize: Fonts.size.small,
    fontWeight: '500',
    lineHeight: calcHeight(15),
    color: Colors.white,
    fontFamily: Fonts.type.base,
    marginLeft: calcWidth(8),
  },
  icon: {
    width: calcHeight(18),
    height: calcHeight(18),
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    height: calcHeight(33),
    width: calcWidth(168),
    borderRadius: calcHeight(5),
  },
  label1: {
    fontSize: Fonts.size.small,
    fontWeight: '500',
    lineHeight: calcHeight(15),
    color: Colors.gray1,
    fontFamily: Fonts.type.base,
    marginLeft: calcWidth(8),
  },
  icon1: {
    width: calcHeight(18),
    height: calcHeight(18),
    resizeMode: 'contain',
    tintColor: Colors.gray1,
  },
  button1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.opacity4,
    height: calcHeight(33),
    width: calcWidth(168),
    borderRadius: calcHeight(5),
  },
  firstsection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: calcHeight(8),
  },
  container: {
    width: calcWidth(343),
    alignSelf: 'center',
  },
});
