import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label: {
    fontSize: Fonts.size.medium,
    fontWeight: '600',
    lineHeight: calcHeight(21),
    color: Colors.black6,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
  },
  icon1: {
    width: calcHeight(37),
    height: calcHeight(37),
    resizeMode: 'contain',
  },
  container: {
    width: calcWidth(343),
    flexDirection: 'row',
    padding: calcHeight(12),
    borderRadius: calcHeight(4),
    elevation: calcHeight(5),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor: Colors.white,
    marginTop: calcHeight(16),
    marginHorizontal: calcWidth(16),
  },
  section: {
    marginTop: calcHeight(12),
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconcontainer: {
    width: calcHeight(44),
    height: calcHeight(44),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: calcHeight(3),
    backgroundColor: Colors.opacity4,
  },
  iconcon: {
    width: calcHeight(51),
    height: calcHeight(51),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: calcHeight(9),
  },
  icon: {
    width: calcHeight(51),
    height: calcHeight(51),
    resizeMode: 'cover',
    borderRadius: calcHeight(9),
  },
  leftsection: {
    marginLeft: calcWidth(12),
  },
  text: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(19),
    color: Colors.black5,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    width:calcWidth(255),
    marginTop:calcHeight(9),
  },
  title: {
    fontSize: Fonts.size.regular,
    fontWeight: '600',
    lineHeight: calcHeight(24),
    color: Colors.black2,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    width: calcWidth(170),
  },
  topsection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: calcWidth(255),
  },
  badge: {
    backgroundColor: Colors.primary,
    width: calcHeight(11),
    height: calcHeight(11),
    borderRadius: calcHeight(11 / 2),
    borderWidth: calcHeight(1),
    borderColor: Colors.white,
    position: 'absolute',
    left: calcHeight(55),
    top: calcHeight(7.5),
  },
  icontext: {
    fontSize: Fonts.size.h3,
    lineHeight: calcHeight(49),
    color: Colors.black2,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
  },
  ticmed: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: calcHeight(24),
    height: calcHeight(24),
    resizeMode: 'cover',
    borderRadius: calcHeight(24 / 2),
    borderWidth: calcHeight(2),
    borderColor: Colors.white,
  },
});
