import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  icon: {
    width: calcHeight(20),
    height: calcHeight(20),
    resizeMode: 'contain',
  },
  container: {
    width: deviceWidth,
    alignItems: 'center',
  },
  title: {
    fontSize: Fonts.size.h5,
    lineHeight: calcHeight(33),
    color: Colors.black2,
    fontFamily: Fonts.type.base,
    letterSpacing: 0.374,
    fontWeight: 'bold',
    width: calcWidth(150),
  },
  topcontainer: {
    backgroundColor: Colors.snow,
    width: deviceWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: calcHeight(20),
    paddingBottom: calcHeight(53)
  },
  imageicon: {
    width: calcHeight(70),
    height: calcHeight(70),
    resizeMode: 'contain',
  },
  id: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(20),
    color: Colors.gray1,
    fontFamily: Fonts.type.base,
    letterSpacing: 0.374,
    marginTop: calcHeight(12),
  },
  date: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(20),
    color: Colors.gray1,
    fontFamily: Fonts.type.base,
    letterSpacing: 0.374,
    marginTop: calcHeight(7),
  },
  imagecontent: {
    alignItems: 'center',
    width: calcWidth(81),
    marginHorizontal: calcWidth(16),
    marginTop: -calcHeight(28)
  },
  imageitem: {
    width: calcHeight(57),
    height: calcHeight(57),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray7,
    borderRadius: calcHeight(57 / 2),
    borderWidth: calcHeight(8),
    borderColor: Colors.white,
  },
  statusimagecontainer: {
    flexDirection: 'row',
  },
  labeltext:{
    fontSize: Fonts.size.small,
    lineHeight: calcHeight(20),
    color: Colors.gray3,
    fontFamily: Fonts.type.base,
    letterSpacing: 0.374,
  },
  titletext:{
    fontSize: Fonts.size.h7,
    lineHeight: calcHeight(30),
    color: Colors.black2,
    fontFamily: Fonts.type.base,
    letterSpacing: 0.374,
    fontWeight:'600',
    width:calcWidth(200),
    marginTop:calcHeight(28)
  },
  description:{
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(20),
    color: Colors.black5,
    fontFamily: Fonts.type.base,
    letterSpacing: 0.374,
    marginTop:calcHeight(9)

  },
  desccontainer:{
    width:calcWidth(335),
    borderBottomColor:Colors.gray2,
    borderBottomWidth:calcHeight(1),
    paddingBottom:calcHeight(12),
  },
  meetingpart:{
    width:calcWidth(335),
    borderBottomColor:Colors.gray2,
    borderBottomWidth:calcHeight(1),
    paddingBottom:calcHeight(41),
  },
  titletext1:{
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(21),
    color: Colors.black2,
    fontFamily: Fonts.type.base,
    letterSpacing: 0.374,
    fontWeight:'600',
    width:calcWidth(160),
    marginTop:calcHeight(17)
  },
  bottompart:{
    marginTop:calcHeight(12),
    flexDirection:'row',
  },
  titleimage:{
    width:calcHeight(48),
    height:calcHeight(48),
    resizeMode:'contain',
  },
  centerpart:{
    marginLeft:calcWidth(19),
  },
  example:{
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(21),
    color: Colors.black2,
    fontFamily: Fonts.type.base,
    letterSpacing: 0.374,
    fontWeight:'500',
  },
  example1:{
    fontSize: Fonts.size.small,
    lineHeight: calcHeight(21),
    color: Colors.gray1,
    fontFamily: Fonts.type.base,
    letterSpacing: 0.374,
    fontWeight:'500',
    marginTop:calcHeight(5),
  },
  buttoncontainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:calcHeight(5),
    width:calcWidth(275),
  },
  textimage:{
    flexDirection:'row',
    alignItems:'center',
  },
  sampleimage:{
    width:calcHeight(24),
    height:calcHeight(24),
    resizeMode:'cover',
  },
  bluetext:{
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(21),
    color: Colors.primary,
    fontFamily: Fonts.type.base,
    letterSpacing: 0.374,
    fontWeight:'bold',
  },
  bottomcontainer:{
    paddingBottom:calcHeight(152),
    width:calcWidth(335),
  },
  imageagent:{
    width:calcHeight(35),
    height:calcHeight(35),
    resizeMode:'cover',
    borderRadius:calcHeight(35/2),
  },
  sepcpart:{
    flexDirection:'row',
    marginTop:calcHeight(20),
    alignItems:'center',
  },
  leftcontainer:{
    marginLeft:calcWidth(19),
  }
});
