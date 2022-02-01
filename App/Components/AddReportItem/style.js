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
    width: calcWidth(287),
    height: calcHeight(179),
    borderRadius: calcHeight(4),
    elevation: calcHeight(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor: Colors.white,
    alignSelf: 'center',
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
    width: calcHeight(23),
    height: calcHeight(23),
    resizeMode: 'contain',
    marginTop: calcHeight(10)
  },
  leftcontent: {
    marginLeft: calcWidth(12),
  },
  text: {
    fontSize: Fonts.size.medium,
    fontWeight: '600',
    lineHeight: calcHeight(21),
    color: Colors.black8,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    width: calcWidth(256),
    textAlign:'center',
  },
  title: {
    fontSize: Fonts.size.medium,
    fontWeight: '600',
    lineHeight: calcHeight(21),
    color: Colors.black,
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
  button:{
    width:calcWidth(256),
    height:calcHeight(43),
    borderRadius:calcHeight(6),
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Colors.primary,
    marginTop:calcHeight(16),
  },
  buttontext:{
    color:Colors.white,
  },
});
