import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label:{
    fontSize:Fonts.size.medium,
    lineHeight: calcHeight(21),
    color:Colors.black2,
    letterSpacing:0.374,
    fontFamily:Fonts.type.base,
    marginLeft:calcWidth(17),
  },
  icon:{
    width:calcHeight(24),
    height:calcHeight(24),
    resizeMode:'contain',
  },
  container:{
   width:calcWidth(343),
   flexDirection:'row',
   alignItems:'center',
   
  },
});
