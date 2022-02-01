import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  mainContainer: {
    backgroundColor: Colors.black,
  },
  layout: {
    backgroundColor: Colors.gray0,
    height: calcHeight(15),
    marginTop: calcHeight(40),
    borderTopRightRadius: calcHeight(60),
    borderTopLeftRadius: calcHeight(60),
    marginHorizontal: calcHeight(25),
  },
  smallLogo: {
    width: calcHeight(200),
    height: calcHeight(50),
    resizeMode: 'contain',
  },
  section: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: calcHeight(15),
    borderTopRightRadius: calcHeight(15),
    alignItems: 'center',
  },
  backgroundImage: {
    width: deviceWidth,
    height: calcHeight(487),
    resizeMode: 'stretch',
  },
  sectionTitle: {
    fontSize: Fonts.size.h3,
    fontWeight: 'bold',
    lineHeight: calcHeight(48),
    color: Colors.black,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
  },
  titleText: {
    fontSize: Fonts.size.h4,
    lineHeight: calcHeight(42),
    color: Colors.black,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    marginLeft: calcHeight(5),
    textAlign: 'center',
    fontWeight: 'bold',
    width: calcHeight(200),
  }
})
