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
    backgroundColor: Colors.black10,
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
    height: deviceHeight - calcHeight(50),
    borderTopRightRadius: calcHeight(42),
    borderTopLeftRadius: calcHeight(42),
    marginTop: calcHeight(50),
    backgroundColor: Colors.white,
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
  },
  bottomcontainer: {
    marginTop: calcHeight(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centeritem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  grayline: {
    width: calcWidth(107),
    height: calcHeight(1),
    backgroundColor: Colors.gray10,
  },
  iconx: {
    width: calcHeight(15),
    height: calcHeight(15),
    resizeMode: 'contain',
    tintColor: Colors.black11,
  },
  textx: {
    fontSize: Fonts.size.small,
    fontWeight: '600',
    lineHeight: calcHeight(21),
    color: Colors.black11,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    marginLeft: calcHeight(5),
  },
  withoutborder: {
    borderBottomColor: Colors.white,
    borderBottomWidth: calcHeight(0),
  }
})
