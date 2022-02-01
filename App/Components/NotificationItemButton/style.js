import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label:{
    fontSize:Fonts.size.regular,
    lineHeight: calcHeight(22),
    color:Colors.black,
    fontFamily:Fonts.type.base,
  },
  icon:{
    width:calcHeight(20),
    height:calcHeight(20),
    resizeMode:'contain',
  },
  icon1:{
    width:calcHeight(14),
    height:calcHeight(14),
    resizeMode:'contain',
  },
  button:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    height:calcHeight(60),
    width:calcWidth(331),
    borderBottomWidth:calcHeight(0.5),
    borderBottomColor:Colors.black1,    
  },
  leftcontent:{
    flexDirection:'row',
    alignItems:'center',
  },
  switch:{
  },
});
