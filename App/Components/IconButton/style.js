import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes/'
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
  icon:{
    width:calcHeight(35),
    height:calcHeight(35),
    resizeMode:'contain',
  },
  button:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:Colors.primary,
    height:calcHeight(55),
    width:calcWidth(331),
    borderRadius:calcHeight(5),
  },
  iconcontainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  }
});
