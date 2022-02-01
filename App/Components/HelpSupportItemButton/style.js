import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label:{
    fontSize:Fonts.size.medium,
    fontWeight:'600',
    lineHeight: calcHeight(21),
    color:Colors.black2,
    letterSpacing:0.374,
    fontFamily:Fonts.type.base,
    marginTop:calcHeight(5),
  },
  icon:{
    width:calcHeight(24),
    height:calcHeight(24),
    resizeMode:'contain',
  },
  button:{
    backgroundColor:Colors.opacity1,
    height:calcWidth(104),
    width:calcWidth(104),
    borderRadius:calcHeight(12),
    padding:calcWidth(16),
  }
});
