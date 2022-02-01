import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label:{
    fontSize:Fonts.size.medium,
    fontWeight:'500',
    lineHeight: calcHeight(22),
    color:Colors.black,
    letterSpacing:0.36,
    fontFamily:Fonts.type.base,
  },
  title:{
    fontSize:Fonts.size.spec,
    fontWeight:'500',
    lineHeight: calcHeight(22),
    color:Colors.black,
    letterSpacing:0.36,
    fontFamily:Fonts.type.base,
  },
  button:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:calcHeight(55),
    borderRadius:calcHeight(5),
  },
  container:{
    flexDirection:'row',
    alignItems:'center',
    width:calcWidth(331),
    justifyContent:'space-between',
    alignSelf:'center',
  },
});
