import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label:{
    fontSize:Fonts.size.medium,
    fontWeight:'500',
    lineHeight: calcHeight(22),
    color:Colors.primary,
    letterSpacing:0.36,
    fontFamily:Fonts.type.base,
    marginLeft:calcHeight(10),
  },
  icon:{
    width:calcHeight(16),
    height:calcHeight(16),
    resizeMode:'contain',
    tintColor:Colors.primary,
  },
  button:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    width:calcWidth(331),
  },
});
