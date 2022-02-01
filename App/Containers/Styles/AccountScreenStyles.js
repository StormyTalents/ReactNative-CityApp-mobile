import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  mainContainer: {
    flex: 1,
  },
  iconimage: {
    width: calcHeight(35),
    height: calcHeight(35),
    resizeMode: 'contain',
  },
  iconitem: {
    backgroundColor: Colors.gray2,
    width: calcHeight(65),
    height: calcHeight(65),
    borderRadius: calcHeight(65 / 2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  topbar: {
    flexDirection: 'row',
    width: deviceWidth,
    justifyContent: 'space-between',
    padding: calcHeight(15),
  },
  secondbar: {
    flexDirection: 'row',
    width: deviceWidth,
    justifyContent: 'space-between',
    paddingHorizontal: calcHeight(15),
  },
  toptext: {
    fontSize: Fonts.size.medium,
    color: Colors.primary,
    fontFamily: Fonts.type.base,
    fontWeight: 'bold',
    marginLeft: calcHeight(5),
  },
  toplabel: {
    fontSize: Fonts.size.h5,
    color: Colors.black,
    fontFamily: Fonts.type.base,
    fontWeight: 'bold',
    marginLeft: calcHeight(5),
  },
  leftcontent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  titleText: {
    fontSize: Fonts.size.h4,
    color: Colors.black,
    fontFamily: Fonts.type.base,
    fontWeight: 'bold',
  },
  datetext: {
    fontSize: Fonts.size.regular,
    color: Colors.black,
    fontFamily: Fonts.type.base,
    marginTop: calcHeight(5),
  },
  iconimage1: {
    width: calcHeight(80),
    height: calcHeight(80),
    resizeMode: 'contain',
    marginTop: -calcHeight(20),
  },
  weathertext: {
    fontSize: Fonts.size.medium,
    color: Colors.gray1,
    fontFamily: Fonts.type.base,
  },
  section: {
    alignItems: 'center',
  },
  bg_dashboard: {
    width: calcHeight(280),
    height: calcHeight(280),
    resizeMode: 'contain',
  },
  titleText1: {
    fontSize: Fonts.size.h4,
    color: Colors.black,
    fontFamily: Fonts.type.base,
    fontWeight: 'bold',
    textAlign: 'center',
    width: calcHeight(300),
  },
  buttoncontainer: {
    width: calcWidth(331),
    alignItems: 'flex-start',
  },
  textbutton: {
    textDecorationLine: 'none',
  },
  button: {
    height: calcHeight(25),
    alignSelf:'center',
  },
  textbutton1: {
    textDecorationLine: 'none',
    color:Colors.blue,
    fontSize:Fonts.size.middle
  },
  bg_account:{
    width:calcWidth(331),
    height:calcHeight(120),
    resizeMode:'stretch'
  },
  button1: {
    height: calcHeight(25),
    borderBottomColor:Colors.gray2,
    borderBottomWidth:calcHeight(1),
    width:calcWidth(331),
    justifyContent:'flex-start',
    paddingVertical:calcHeight(30),
  },
  bottomtext:{
    fontSize: Fonts.size.small,
    color: Colors.black,
    fontFamily: Fonts.type.base,
    fontWeight: 'normal',
    textAlign: 'center',
    alignSelf:'center',
  },
  modal: {
    alignItems: 'center',
    width: calcWidth(317),
    height: calcHeight(373),
    borderRadius: calcHeight(6),
    justifyContent: 'center',
  },
  modal_text: {
    fontSize: Fonts.size.medium,
    color: Colors.gray1,
    fontFamily: Fonts.type.base,
    fontWeight: 'normal',
    width: calcWidth(253),
  },
  modal_title: {
    fontSize: Fonts.size.input,
    color: Colors.black,
    fontFamily: Fonts.type.base,
    fontWeight: 'bold',
    width: calcWidth(253),
  },
  modaltop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: calcWidth(253),
    alignItems: 'center',
  },
  modal_calendar: {
    width: calcHeight(45),
    height: calcHeight(45),
    resizeMode: 'contain',
  },
  modal_close: {
    width: calcHeight(31),
    height: calcHeight(31),
    resizeMode:'contain',
    borderRadius:calcHeight(31/2),
  }
})
