import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    width:calcWidth(341),
  },
  image:{
    width:calcHeight(120),
    height:calcHeight(60),
    resizeMode:'contain',
  }
});
