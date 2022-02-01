import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label:{
    fontSize:Fonts.size.small,
    fontWeight:'500',
    lineHeight: calcHeight(18),
    color:Colors.black2,
    letterSpacing:0.374,
    fontFamily:Fonts.type.base,
    marginTop:calcHeight(5),
  },
  label1:{
    fontSize:Fonts.size.small,
    fontWeight:'500',
    lineHeight: calcHeight(18),
    color:Colors.white,
    letterSpacing:0.374,
    fontFamily:Fonts.type.base,
    marginTop:calcHeight(5),
  },
  icon:{
    width:calcHeight(36.57),
    height:calcHeight(36.57),
    resizeMode:'contain',
    tintColor:Colors.black2
  },
  icon1:{
    width:calcHeight(36.57),
    height:calcHeight(36.57),
    resizeMode:'contain',
    tintColor:Colors.white
  },
  button:{
    backgroundColor:Colors.opacity1,
    height:calcWidth(79),
    width:calcWidth(79),
    borderRadius:calcHeight(6),
    justifyContent:'center',
    alignItems:'center',
  },
  button1:{
    backgroundColor:Colors.primary,
    height:calcWidth(79),
    width:calcWidth(79),
    borderRadius:calcHeight(6),
    justifyContent:'center',
    alignItems:'center',
  },
  container:{
    flexDirection:'row',
    width:calcWidth(265),
    alignSelf:'center',
    justifyContent:'space-between',
  }
});
