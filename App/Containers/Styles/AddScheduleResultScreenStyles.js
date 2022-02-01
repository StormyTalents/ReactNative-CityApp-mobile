import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  mapcontainer: {
    ...StyleSheet.absoluteFillObject,
    height: calcHeight(500),
    width: deviceWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
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
  section: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: calcHeight(15),
    borderTopRightRadius: calcHeight(15),
    alignItems: 'center',
  },
  sectionitem: {
    width: calcWidth(331),
    alignSelf: 'center',
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
    fontWeight: 'bold',
  },
  textdescription: {
    fontSize: Fonts.size.h5,
    lineHeight: calcHeight(29),
    color: Colors.black,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    fontWeight: '500',
    width: calcWidth(247),
  },
  textdescription1: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(21),
    color: Colors.black5,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    fontWeight: '500',
    width: calcWidth(303),
  },
  titleimage: {
    width: calcHeight(120),
    height: calcHeight(120),
    resizeMode: 'contain',
  },
  scrollitem: {
    width: calcWidth(210),
    height: calcHeight(117),
    marginHorizontal: calcWidth(3),
  },
  grayline: {
    width: calcWidth(331),
    backgroundColor: Colors.gray1,
    height: calcHeight(1),
  },
  description: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(21),
    color: Colors.black2,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    marginLeft: calcHeight(5),
    fontWeight: '500',
    width: calcWidth(295),
  },
  copybutton: {
    marginLeft: calcWidth(12),
  },
  copycontainer: {
    flexDirection: 'row',
  },
  copyimage: {
    width: calcHeight(17),
    height: calcHeight(17),
    resizeMode: 'contain',
  },
  bottomcontent: {
    flexDirection: 'row',

  },
  secondcontent: {
    marginLeft: calcWidth(95),
  },
  bottomcontainer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    backgroundColor: Colors.white,
    width: deviceWidth,

  },
  itemcontainer: {
    width: calcWidth(290),
    height: calcHeight(129),
    borderRadius: calcHeight(4),
    backgroundColor: Colors.white,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderLeftWidth: calcWidth(4),
    borderLeftColor: Colors.green,
    paddingVertical: calcHeight(14),
    paddingHorizontal: calcWidth(20),
  },
  eventtitle: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(21),
    color: Colors.green,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    fontWeight: 'bold',
  },
  eventtitle1: {
    fontSize: Fonts.size.small,
    lineHeight: calcHeight(18),
    color: Colors.black5,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    fontWeight: '500',
  },
  eventtitle2: {
    fontSize: Fonts.size.small,
    lineHeight: calcHeight(18),
    color: Colors.black5,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    fontWeight: '500',
    marginTop: calcHeight(25),
  },
  eventtitle3: {
    fontSize: Fonts.size.small,
    lineHeight: calcHeight(18),
    color: Colors.black5,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    fontWeight: '500',
    marginTop: calcHeight(2),
  },
})
