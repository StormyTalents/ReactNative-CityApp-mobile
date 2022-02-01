import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
import { chain } from "ramda";
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    position:'absolute',
    bottom:0,
    zIndex:999,
    backgroundColor:Colors.white,
    paddingBottom:calcHeight(25)
  },
  topsection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: calcWidth(331),
    borderTopColor:Colors.gray2,
    borderTopWidth:calcHeight(1),
    paddingVertical:calcHeight(10),
  },
  input: {
    fontSize: Fonts.size.spec,
    lineHeight: calcHeight(22),
    color: Colors.black,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    backgroundColor:Colors.opacity3,
    width:calcWidth(289),
    paddingHorizontal:calcWidth(12),
    paddingVertical:calcHeight(9),
    borderRadius:calcHeight(4),
  },
  sendbutton:{
    width: calcHeight(40),
    justifyContent:'center',
    height: calcHeight(40),
    alignItems:'center',
    backgroundColor:Colors.primary,
    borderRadius:calcHeight(4),
  },
  titleimage: {
    width: calcHeight(18),
    height: calcHeight(18),
    resizeMode: 'contain',
  },
  buttomsection:{
    flexDirection:'row',
    alignItems:'center',
    width: calcWidth(331),
  },
  icon:{
    width:calcHeight(24),
    height:calcHeight(24),
    resizeMode:'contain',
  },
  iconbutton:{
    marginRight:calcWidth(12)
  }
});
