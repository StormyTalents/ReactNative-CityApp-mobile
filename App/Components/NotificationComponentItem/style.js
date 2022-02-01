import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label:{
    fontSize:Fonts.size.regular,
    lineHeight: calcHeight(22),
    color:Colors.white,
    fontFamily:Fonts.type.base,
  },
  icon:{
    width:calcHeight(45),
    height:calcHeight(45),
    resizeMode:'contain',
    alignSelf:'flex-end',
  },
  button:{
    height:calcHeight(110),
    width:calcWidth(158),
    borderRadius:calcHeight(9),
    backgroundColor:Colors.gray11,
    paddingVertical:calcHeight(11),
    paddingHorizontal:calcWidth(12),
    marginTop:calcHeight(11),
  },
});
