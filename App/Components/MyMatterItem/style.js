import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  title: {
    fontSize: Fonts.size.regular,
    fontWeight: '600',
    lineHeight: calcHeight(25),
    color: Colors.black2,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
  },
  icon: {
    width: calcHeight(31),
    height: calcHeight(31),
    resizeMode: 'contain',
    marginTop: -calcHeight(70),
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    width: deviceWidth,
    alignSelf: 'center',
    marginTop: calcHeight(8),
    padding: calcHeight(15),
  },
  time: {
    fontSize: Fonts.size.small,
    lineHeight: calcHeight(18),
    color: Colors.gray6,
    fontFamily: Fonts.type.base,
    marginTop: calcHeight(5),
  },
  date: {
    fontSize: Fonts.size.small,
    lineHeight: calcHeight(18),
    color: Colors.gray6,
    fontFamily: Fonts.type.base,
    marginTop: calcHeight(5),
  },
  id: {
    marginTop: calcHeight(5),
    fontSize: Fonts.size.regular,
    lineHeight: calcHeight(20),
    color: Colors.gray6,
    fontFamily: Fonts.type.base,
  },
  text: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(19),
    color: Colors.charcoal,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    width: calcWidth(295),
    marginTop: calcHeight(12),
  },
  bottomcontent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: calcHeight(18),
    alignItems: 'center'
  },
  topcontent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  status: {
    fontSize: Fonts.size.small,
    lineHeight: calcHeight(19),
    color: Colors.charcoal,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    marginTop: calcHeight(5),
    textAlign: 'center',
    padding: calcHeight(3),
    borderRadius: calcHeight(12),
  },
  badge: {
    width: calcHeight(11),
    height: calcHeight(11),
    borderRadius: calcHeight(11 / 2),
    backgroundColor: Colors.status1,
    position: 'absolute',
    top: calcHeight(5),
    zIndex: 99,
    left: calcWidth(65),
  },
  firstcontent: {
    borderLeftColor: Colors.gray1,
    borderLeftWidth: calcHeight(1),
    paddingLeft: calcWidth(10),
  }
});
