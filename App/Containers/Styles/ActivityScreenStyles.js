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
  titleText: {
    fontSize: Fonts.size.h4,
    color: Colors.black,
    fontFamily: Fonts.type.base,
    fontWeight: 'bold',
  },
  titleText1: {
    fontSize: Fonts.size.medium,
    color: Colors.gray1,
    fontFamily: Fonts.type.base,
    fontWeight: 'bold',
  },
  scrollcontainer: {
    width: calcWidth(343),
    alignSelf: 'center',
    height: calcHeight(265)
  },
  scrollcontainer1: {
    width: calcWidth(343),
    alignSelf: 'center',
    height: calcHeight(500)
  },
  searchcontainer: {
    alignItems: 'center',
    width: deviceWidth,
  },
  modal: {
    alignItems: 'center',
    width: deviceWidth,
    height: deviceHeight - calcHeight(65),
    borderTopRightRadius: calcHeight(42),
    borderTopLeftRadius: calcHeight(42),
  },
  buttonview: {
    paddingVertical: calcHeight(18),
  },
  viewimage: {
    width: calcWidth(38),
    height: calcHeight(8),
    borderRadius: calcHeight(2),
    backgroundColor: Colors.gray8,
  },
  title: {
    fontSize: Fonts.size.h5,
    color: Colors.black7,
    fontFamily: Fonts.type.base,
    fontWeight: '600',
  },
  headersection: {
    flexDirection: 'row',
    width: calcWidth(331),
    alignSelf: 'center',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  headertext: {
    fontSize: Fonts.size.medium,
    color: Colors.primary,
    fontFamily: Fonts.type.base,
    fontWeight: '600',
  },
  content: {
    // alignSelf:'center',
  }
})
