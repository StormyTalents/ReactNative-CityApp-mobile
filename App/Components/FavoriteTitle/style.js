import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label: {
    fontSize: Fonts.size.h7,
    fontWeight: 'bold',
    lineHeight: calcHeight(30),
    color: Colors.black,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    marginTop: calcHeight(12),
  },
  icon: {
    width: calcHeight(15),
    height: calcHeight(15),
    resizeMode: 'contain',
    tintColor: Colors.black11,
  },
  container: {
    width: calcWidth(343),
    paddingBottom: calcHeight(5),
  },
  text: {
    fontSize: Fonts.size.small,
    fontWeight: '600',
    lineHeight: calcHeight(21),
    color: Colors.black11,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    marginLeft: calcHeight(5),
  },
  staricon: {
    width: calcHeight(39),
    height: calcHeight(39),
    borderRadius: calcHeight(3),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  star: {
    width: calcHeight(20),
    height: calcHeight(20),
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
  bottomcontainer: {
    marginTop: calcHeight(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centeritem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  grayline: {
    width: calcWidth(107),
    height: calcHeight(1),
    backgroundColor: Colors.gray10,
  }
});
