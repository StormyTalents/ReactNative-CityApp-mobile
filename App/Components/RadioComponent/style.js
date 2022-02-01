import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label:{
    fontSize:Fonts.size.regular,
    lineHeight: calcHeight(22),
    color:Colors.black7,
    letterSpacing:0.36,
    fontFamily:Fonts.type.base,
  },
  value:{
    fontSize:Fonts.size.medium,
    lineHeight: calcHeight(21),
    color:Colors.gray1,
    letterSpacing:0.36,
    fontFamily:Fonts.type.base,
  },
  icon:{
    width:calcHeight(22.5),
    height:calcHeight(22.5),
    resizeMode:'contain',
  },
  button:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    height:calcHeight(55),
    width:calcWidth(331),
    borderRadius:calcHeight(5),
    marginTop:calcHeight(20),
  },
  container:{
    
  }
});
