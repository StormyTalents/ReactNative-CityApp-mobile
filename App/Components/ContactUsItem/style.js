import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
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
    width:calcHeight(26),
    height:calcHeight(26),
    resizeMode:'contain',
  },
  iconitem:{
    width:calcHeight(44),
    height:calcHeight(44),
    resizeMode:"contain",
    backgroundColor:Colors.opacity1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:calcHeight(3),
  },
  button:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    height:calcHeight(55),
    width:calcWidth(335),
    borderRadius:calcHeight(5),
  },
  bottomitem:{
    flexDirection:'row',
    alignItems:'center',
  },
  text:{
    fontSize:Fonts.size.medium,
    lineHeight: calcHeight(21),
    color:Colors.black6,
    letterSpacing:0.374,
    fontFamily:Fonts.type.base,
  },
  icon1:{
    width:calcHeight(17),
    height:calcHeight(17),
    resizeMode:'contain',
    marginLeft:calcHeight(5),
  },
  rightitem:{
    marginLeft:calcWidth(12),
  }
});
