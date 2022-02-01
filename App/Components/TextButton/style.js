import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label:{
    fontSize:Fonts.size.medium,
    fontWeight:'500',
    lineHeight: calcHeight(22),
    color:Colors.black0,
    letterSpacing:0.36,
    fontFamily:Fonts.type.base,
    textDecorationLine:'underline'
  },
  button:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:calcHeight(55),
    borderRadius:calcHeight(5),
  }
});
