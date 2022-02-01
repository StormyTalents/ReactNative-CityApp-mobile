import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label:{
    fontSize:Fonts.size.medium,
    fontWeight:'bold',
    lineHeight: calcHeight(22),
    color:Colors.lightblue,
    letterSpacing:0.36,
    fontFamily:Fonts.type.base,
    marginLeft:calcHeight(10),
    
  },
  icon:{
    width:calcHeight(20),
    height:calcHeight(20),
    resizeMode:'contain',
    tintColor:Colors.lightblue,
  },
  button:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:Colors.opacityblue,
    height:calcHeight(40),
    width:calcWidth(76),
    borderRadius:calcHeight(5),
  },
  loading:{
    marginLeft:calcHeight(10),
  }
});
