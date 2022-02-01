import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  firsttitle:{
    fontSize: Fonts.size.regular,
    fontWeight: '500',
    lineHeight: calcHeight(24),
    color: Colors.green,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    textAlign:'center',
    width:calcWidth(250),
    alignSelf:'center',
  },
  secondtitle:{
    fontSize:Fonts.size.small,
    fontWeight:'500',
  },
  logoshower: {
    position: 'absolute',
    top: calcHeight(0),
    left: calcWidth(30),
  },
  applogo: {
    height: calcHeight(393),
    width: calcHeight(393),
    resizeMode: 'contain',
  },
  forgottext: {
    fontSize: Fonts.size.medium,

  },
  signupbuttoncontainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  signuptext:{
    fontSize: Fonts.size.medium,
    fontWeight: '600',
    lineHeight: calcHeight(22),
    color: Colors.regular,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
  },
  forgotbutton: {
    alignSelf: "flex-start",
    marginTop: calcHeight(0),
    height: calcHeight(35),
  },
  mainContainer: {
    flex: 1,
  },
  backgroundImage: {
    width: deviceWidth,
    height: calcHeight(528),
    resizeMode: 'stretch',
  },
  section: {
    padding: calcWidth(22)
  },
  sectionText: {
    fontSize: Fonts.size.regular,
    fontWeight: '500',
    lineHeight: calcHeight(24),
    color: Colors.regular,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    position: 'absolute',
    top: calcHeight(150),
    left: calcWidth(105),
  },
  sectionTitle: {
    fontSize: Fonts.size.h3,
    fontWeight: 'bold',
    lineHeight: calcHeight(48),
    color: Colors.black,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
  }
})
