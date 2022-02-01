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
  container: {
    width: calcWidth(290),
    height: calcHeight(129),
    borderRadius: calcHeight(4),
    elevation: calcHeight(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor: Colors.white,
    padding: calcHeight(17),
    marginHorizontal: calcWidth(8),
    marginVertical: calcHeight(8),
  },
  topcontent: {
    flexDirection: 'row',
    alignItems: 'center',
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
  icon: {
    width: calcHeight(19),
    height: calcHeight(19),
    resizeMode: 'contain',
  },
  leftcontent: {
    marginLeft: calcWidth(12),
  },
  text: {
    fontSize: Fonts.size.small,
    lineHeight: calcHeight(18),
    color: Colors.black8,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    width: calcWidth(149),
  },
  bottomcontent:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginLeft:calcWidth(23),
    marginTop:calcHeight(6),
  },
  date: {
    fontSize: Fonts.size.medium,
    fontWeight: '500',
    lineHeight: calcHeight(21),
    color: Colors.black8,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    marginLeft:calcWidth(23),
    marginTop:calcHeight(2),
  },
  title: {
    fontSize: Fonts.size.medium,
    fontWeight: '600',
    lineHeight: calcHeight(21),
    color: Colors.black,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    marginLeft:calcWidth(8),
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
  button: {
    marginTop:calcHeight(5),
  },
  buttontext: {
    color: Colors.primary,
  },
});
