import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from 'Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from 'Themes/ConvertSize'
export default StyleSheet.create({
  label:{
    fontSize:Fonts.size.medium,
    fontWeight:'600',
    lineHeight: calcHeight(21),
    color:Colors.black6,
    letterSpacing:0.374,
    fontFamily:Fonts.type.base,
  },
  icon:{
    width:calcHeight(35),
    height:calcHeight(35),
    resizeMode:'contain',
  },
  container:{
   width:calcWidth(343),
  },
  section:{
    marginTop:calcHeight(12),
    flexDirection:'row',
    alignItems:'center',
  },
  iconcontainer:{
    width:calcHeight(44),
    height:calcHeight(44),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:calcHeight(3),
    backgroundColor:Colors.opacity4,
  },
  icon:{
    width:calcHeight(24),
    height:calcHeight(24),
    resizeMode:'contain',
  },
  leftcontent:{
    marginLeft:calcWidth(12),
  },
  text:{
    fontSize:Fonts.size.medium,
    fontWeight:'600',
    lineHeight: calcHeight(21),
    color:Colors.black8,
    letterSpacing:0.374,
    fontFamily:Fonts.type.base,
  },
  ticmed:{
    flexDirection:'row',
    alignItems:'center',
  },
  avatar:{
    width:calcHeight(24),
    height:calcHeight(24),
    resizeMode:'cover',
    borderRadius:calcHeight(24/2),
    borderWidth:calcHeight(2),
    borderColor:Colors.white,
  },
});
