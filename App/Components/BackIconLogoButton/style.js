import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  icon:{
    width:calcHeight(21),
    height:calcHeight(21),
    resizeMode:'contain',
  },
  button:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    height:calcHeight(55),
    width:calcWidth(55),
  },
  container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  image:{
    width:calcHeight(200),
    height:calcHeight(50),
    resizeMode:'contain',
    marginTop:calcHeight(15),
  }
});
