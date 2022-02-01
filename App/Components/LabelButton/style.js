import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label:{
    fontSize:Fonts.size.spec,
    fontWeight:'bold',
    lineHeight: calcHeight(41),
    color:Colors.black,
    letterSpacing:0.374,
    fontFamily:Fonts.type.base,
  },
  icon:{
    width:calcHeight(21),
    height:calcHeight(21),
    resizeMode:'contain',
    tintColor:Colors.black,
  },
  button:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:calcWidth(331),
  }
});
