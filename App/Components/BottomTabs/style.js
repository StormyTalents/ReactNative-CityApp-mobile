import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.white,
    width: deviceWidth,
    justifyContent: 'space-between',
    elevation: calcHeight(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    height:calcHeight(80),
  },
  label0: {
    fontSize: Fonts.size.small,
    fontWeight: 'bold',
    lineHeight: calcHeight(22),
    color: Colors.primary,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    marginLeft: calcHeight(5),

  },
  label1: {
    fontSize: Fonts.size.small,
    fontWeight: 'normal',
    lineHeight: calcHeight(22),
    color: Colors.black,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    marginLeft: calcHeight(5),
  },
  button0: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: Colors.primary,
    borderTopWidth: calcHeight(5),
    flex: 1,
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: Colors.white,
    borderTopWidth: calcHeight(5),
    flex: 1,
  },
  icon1:{
    width:calcHeight(25),
    height:calcHeight(25),
    resizeMode:'contain',
    tintColor:Colors.primary,
  },
  icon2:{
    width:calcHeight(25),
    height:calcHeight(25),
    resizeMode:'contain',
    tintColor:Colors.black,
  },
  roundbutton:{
    backgroundColor:Colors.primary,
    width:calcHeight(55),
    height:calcHeight(55),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:calcHeight(55/2),
    marginTop:-calcHeight(10),
  },
  plusicon:{
    tintColor:Colors.white,
    width:calcHeight(30),
    height:calcHeight(30),
    resizeMode:'contain',
  },
});
