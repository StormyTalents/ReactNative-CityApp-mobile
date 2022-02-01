import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label:{
    fontSize:Fonts.size.h8,
    fontWeight:'bold',
    color:Colors.black0,
    letterSpacing:0.374,
    fontFamily:Fonts.type.base,
  },
  button:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    width:calcWidth(331),
  }
});
