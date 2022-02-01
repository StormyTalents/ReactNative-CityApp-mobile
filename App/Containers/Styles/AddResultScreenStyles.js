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
    flex: 1,
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
    fontWeight:'500',
    width:calcWidth(247),
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
    width:calcWidth(295),
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
  bottomcontent:{
    flexDirection:'row',

  },
  secondcontent:{
    marginLeft:calcWidth(95),
  },
  bottomcontainer:{
    position:'absolute',
    bottom:0,
    alignSelf:'center',
  }
})
