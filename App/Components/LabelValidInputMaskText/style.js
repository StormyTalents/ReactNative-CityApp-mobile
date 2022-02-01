import {StyleSheet} from 'react-native';
import {Metrics, ApplicationStyles, Colors, Fonts} from '../../Themes/';
import {
  calcHeight,
  calcWidth,
  deviceHeight,
  deviceWidth,
} from '../../Themes/ConvertSize';
export default StyleSheet.create({
  container: {
    width: calcWidth(331),
    alignSelf: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: calcWidth(331),
    borderBottomColor: Colors.gray5,
    borderBottomWidth: calcHeight(1),
    marginTop: calcHeight(6),
  },
  errortext: {
    fontSize: Fonts.size.medium,
    fontWeight: '500',
    lineHeight: calcHeight(21),
    color: Colors.red,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    marginTop: calcHeight(5),
  },
  title: {
    fontSize: Fonts.size.medium,
    fontWeight: '500',
    lineHeight: calcHeight(21),
    color: Colors.black0,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
  },
  input: {
    paddingVertical: calcHeight(5),
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(21),
    fontFamily: Fonts.type.base,
    color: Colors.black0,
    width: calcWidth(259),
    marginLeft:calcWidth(8),
  },
  icon: {
    width: calcHeight(15),
    height: calcHeight(15),
    resizeMode: 'contain',
  },
  topcontent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {},
  buttontext: {
    textDecorationLine: 'underline',
    color: Colors.primary,
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(41),
    fontFamily: Fonts.type.base,
    marginTop: calcHeight(5),
  },
  bottomcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag_sweden: {
    width: calcWidth(24),
    height: calcHeight(24),
    resizeMode: 'contain',
  },
});
