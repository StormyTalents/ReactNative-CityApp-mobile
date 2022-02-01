import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label:{
    fontSize:Fonts.size.spec,
    fontWeight:'600',
    lineHeight: calcHeight(22),
    color:Colors.white,
    letterSpacing:0.36,
    fontFamily:Fonts.type.base,
    marginLeft:calcHeight(5),
  },
  button:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:calcHeight(45),
    borderRadius:calcHeight(5),
    backgroundColor:Colors.primary,
  }
});
