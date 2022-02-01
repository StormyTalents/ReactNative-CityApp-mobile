import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
import { chain } from "ramda";
export default StyleSheet.create({
  label: {
    fontSize: Fonts.size.small,
    fontWeight: '500',
    lineHeight: calcHeight(15),
    color: Colors.black,
    fontFamily: Fonts.type.base,
    marginLeft: calcWidth(8),
  },
  icon: {
    width: calcHeight(24),
    height: calcHeight(24),
    resizeMode: 'cover',
    borderWidth: calcHeight(2),
    borderRadius: calcHeight(24 / 2),
    marginRight: -calcHeight(24 / 2),
  },
  followleft: {
    flexDirection: 'row',
  },
  container: {
    flexDirection:'row',
    paddingBottom:calcHeight(22),
    width:calcWidth(343),
    borderBottomColor:Colors.gray1,
    borderBottomWidth:calcHeight(1),
    marginTop:calcHeight(22),
  },
  image: {
    width: calcHeight(100),
    height: calcHeight(100),
    resizeMode: 'cover',
    borderRadius: calcHeight(7),
  },
  leftcontent: {
    flexDirection: 'row',
    alignItems:'center'
  },
  rightcontent: {
    flexDirection: 'row',
    alignItems:'center',
  },
  bottomcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:calcHeight(10),
  },
  pin: {
    width: calcHeight(12),
    height: calcHeight(12),
    resizeMode: 'contain',
  },
  followertext:{
    fontSize: Fonts.size.small,
    fontWeight: '500',
    lineHeight: calcHeight(18),
    color: Colors.black,
    fontFamily: Fonts.type.base,
  },
  pintext:{
    fontSize: Fonts.size.small,
    lineHeight: calcHeight(18),
    color: Colors.gray1,
    fontFamily: Fonts.type.base,
  },
  location:{
    fontSize: Fonts.size.small,
    fontWeight: '500',
    lineHeight: calcHeight(18),
    color: Colors.gray1,
    fontFamily: Fonts.type.base,
    marginTop:calcHeight(2),
  },
  name:{
    fontSize: Fonts.size.input,
    fontWeight: 'bold',
    lineHeight: calcHeight(27),
    color: Colors.black,
    fontFamily: Fonts.type.base,
    marginTop:calcHeight(2),
  },
  topcontainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  likebutton:{
    width:calcHeight(24),
    height:calcHeight(24),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:calcHeight(3),
    backgroundColor:Colors.opacity4,
  },
  star:{
    width:calcHeight(12),
    height:calcHeight(12),
    resizeMode:'contain',
  },
  likebutton1:{
    width:calcHeight(24),
    height:calcHeight(24),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:calcHeight(3),
    backgroundColor:Colors.primary,
  },
  star1:{
    width:calcHeight(12),
    height:calcHeight(12),
    resizeMode:'contain',
    tintColor:Colors.white,
  },
  date:{
    fontSize: Fonts.size.medium,
    fontWeight: '600',
    lineHeight: calcHeight(21),
    color: Colors.primary,
    fontFamily: Fonts.type.base,
  },
  rightcontainer:{
    marginLeft:calcWidth(10),
    width:calcWidth(233),
  }
});
