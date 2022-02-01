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
  },
  bg_basic_info: {
    width: calcHeight(185),
    height: calcHeight(125),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: calcHeight(60),
    height: calcHeight(60),
    resizeMode:'contain',
  },
  avatarcontainer: {
    width: calcHeight(116),
    height: calcHeight(116),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray2,
    borderRadius: calcHeight(116 / 2),
  },
  nameofuser:{
    fontSize: Fonts.size.h5,
    color: Colors.black,
    fontFamily: Fonts.type.base,
    fontWeight: 'bold',
  },
  buttonbar:{
    width:calcWidth(331),
    alignItems:'flex-end',
  },
})
