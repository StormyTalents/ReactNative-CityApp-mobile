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
  logoshower: {
    alignItems: 'center',
    paddingVertical: calcHeight(39),
  },
  applogo: {
    height: calcHeight(60),
    width: calcHeight(145),
    resizeMode: 'contain',
  },
  mainContainer: {
    flex: 1,
  },
  bottomcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  verline: {
    width: calcWidth(1),
    height: calcHeight(20),
    backgroundColor: Colors.black,
    marginHorizontal: calcWidth(15),
  },
  backgroundImage: {
    width: deviceWidth,
    height: calcHeight(367),
    resizeMode: 'stretch',
  },
  section: {
    padding: calcWidth(22),
    marginTop: -calcHeight(15),
  },
  sectionText: {
    fontSize: Fonts.size.input,
    fontWeight: '600',
    lineHeight: calcHeight(30),
    color: Colors.black,
    letterSpacing: 0.5,
    fontFamily: Fonts.type.base,
    letterSpacing:4.37,
    // marginTop: -calcHeight(30),
    // marginLeft: calcWidth(65),
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
