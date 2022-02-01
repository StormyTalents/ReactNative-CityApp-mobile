import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label:{
    fontSize:Fonts.size.small,
    fontWeight:'600',
    lineHeight: calcHeight(22),
    color:Colors.black1,
    letterSpacing:0.36,
    fontFamily:Fonts.type.base,
  },
  icon:{
    width:calcHeight(14),
    height:calcHeight(14),
    resizeMode:'contain',
    marginLeft:calcHeight(10),
  },
  button:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:Colors.white,
    height:calcHeight(32),
    borderRadius:calcHeight(10),
    paddingHorizontal:calcWidth(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    margin:calcHeight(5),
  },
  button1:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:Colors.darkblue,
    height:calcHeight(32),
    width:calcWidth(114),
    borderRadius:calcHeight(10),
    margin:calcHeight(5),
  },
  container:{
    height:calcHeight(100),
  }
});
