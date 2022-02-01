import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes'
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
    width:calcHeight(35),
    height:calcHeight(35),
    resizeMode:'contain',
  },
  container:{
   width:calcWidth(331),
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
  content:{
    flexDirection:'row',
    width:calcWidth(331),
    justifyContent:'space-between',
    alignItems:'center',
  },
  bottom:{
    marginTop:calcHeight(32),
  },
  text:{
    fontSize:Fonts.size.medium,
    fontWeight:'600',
    lineHeight: calcHeight(21),
    color:Colors.black8,
    letterSpacing:0.374,
    fontFamily:Fonts.type.base,
    marginTop:calcHeight(3),
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
  avatar: {
    width: calcHeight(40),
    height: calcHeight(40),
    resizeMode: 'cover',
    borderRadius: calcHeight(40 / 2),
    borderColor: Colors.gray2,
    borderWidth: calcHeight(1),
    marginTop:calcHeight(10),
    backgroundColor:Colors.primary
  },
  inputitem: {
    paddingVertical: calcHeight(5),
    width: calcWidth(287),
  },
  inputpart: {
    flexDirection: 'row',
    width: calcWidth(331),
    justifyContent: 'space-between',
    marginTop:calcHeight(25),
    alignItems:'center'
  }
});
