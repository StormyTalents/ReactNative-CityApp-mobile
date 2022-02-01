import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label:{
    fontSize:Fonts.size.h5,
    fontWeight:'600',
    lineHeight: calcHeight(29),
    color:Colors.black0,
    letterSpacing:0.374,
    fontFamily:Fonts.type.base,
    marginLeft:calcHeight(23),
    width:calcWidth(104)
  },
  icon:{
    width:calcHeight(47),
    height:calcHeight(47),
    resizeMode:'contain',
    tintColor:Colors.primary,
  },
  button:{
    flexDirection:'row',
    alignItems:'center',
    height:calcHeight(55),
    width:calcWidth(335),
    borderRadius:calcHeight(5),
  }
});
