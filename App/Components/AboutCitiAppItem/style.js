import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from 'Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from 'Themes/ConvertSize'
export default StyleSheet.create({
  title:{
    fontSize:Fonts.size.h5,
    lineHeight: calcHeight(24),
    color:Colors.black2,
    fontFamily:Fonts.type.base,
    fontWeight:'500',
    letterSpacing:0.374,
  },
  container:{
    width:calcWidth(331),
    marginBottom:calcHeight(30),
    borderTopColor:Colors.black5,
    borderTopWidth:calcHeight(1),
    paddingTop:calcHeight(35),
  },
  text:{
    fontSize:Fonts.size.medium,
    lineHeight: calcHeight(21),
    color:Colors.black3,
    fontFamily:Fonts.type.base,
    letterSpacing:0.374,
    fontWeight:'500',
    marginTop:calcHeight(20),
  },
});
