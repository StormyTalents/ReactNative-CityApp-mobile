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
    height: calcHeight(409),
    borderTopRightRadius: calcHeight(10),
    borderTopLeftRadius: calcHeight(10),
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
  marker: {
    width: calcHeight(18),
    height: calcHeight(18),
    resizeMode: 'cover',
    borderRadius: calcHeight(18 / 2),
    borderWidth: calcHeight(3),
    borderColor: Colors.white,
  },
  floatingcontent: {
    alignItems: 'center',
    top: calcHeight(90),
    position: 'absolute',
  },
  floatingimage: {
    width: calcHeight(100),
    height: calcHeight(100),
    resizeMode: 'cover',
    borderRadius: calcHeight(7),
  },
  floatingtext: {
    fontSize: Fonts.size.small,
    color: Colors.white,
    fontFamily: Fonts.type.base,
    fontWeight: '600',
    lineHeight: calcHeight(13),
    width: calcHeight(100),
    paddingVertical: calcHeight(10),
    backgroundColor: Colors.opacity6,
    borderRadius: calcHeight(3),
    marginTop: calcHeight(5),
    textAlign: 'center',
  },
  opacitybg: {
    width: deviceWidth,
    height: calcHeight(500),
    backgroundColor: Colors.opacity7,
  },
  opacitybg1: {
    width: deviceWidth,
    height: calcHeight(500),
    backgroundColor: Colors.opacity8,
  },
  maincontent: {
    backgroundColor: Colors.white,
    height: calcHeight(521),
    width: deviceWidth,
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: calcHeight(42),
    borderTopLeftRadius: calcHeight(42),
    alignItems: 'center',
  },
  maincontent1: {
    backgroundColor: Colors.white,
    height: deviceHeight - calcHeight(90),
    width: deviceWidth,
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: calcHeight(42),
    borderTopLeftRadius: calcHeight(42),
    alignItems: 'center',
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
  topcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: calcHeight(12),
    width: calcWidth(343),
  },
  likebutton: {
    width: calcHeight(24),
    height: calcHeight(24),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: calcHeight(3),
    backgroundColor: Colors.opacity4,
  },
  star: {
    width: calcHeight(12),
    height: calcHeight(12),
    resizeMode: 'contain',
  },
  likebutton1: {
    width: calcHeight(24),
    height: calcHeight(24),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: calcHeight(3),
    backgroundColor: Colors.primary,
  },
  star1: {
    width: calcHeight(12),
    height: calcHeight(12),
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
  date: {
    fontSize: Fonts.size.medium,
    fontWeight: '600',
    lineHeight: calcHeight(21),
    color: Colors.primary,
    fontFamily: Fonts.type.base,
  },
  location: {
    fontSize: Fonts.size.small,
    fontWeight: '500',
    lineHeight: calcHeight(18),
    color: Colors.gray1,
    fontFamily: Fonts.type.base,
    marginTop: calcHeight(5),
    width: calcWidth(343),
  },
  name: {
    fontSize: Fonts.size.input,
    fontWeight: 'bold',
    lineHeight: calcHeight(27),
    color: Colors.black,
    fontFamily: Fonts.type.base,
    marginTop: calcHeight(2),
    width: calcWidth(343),
  },
  description: {
    fontSize: Fonts.size.small,
    fontWeight: '500',
    lineHeight: calcHeight(18),
    color: Colors.gray1,
    fontFamily: Fonts.type.base,
    marginTop: calcHeight(5),
    width: calcWidth(343),
  },
  name1: {
    fontSize: Fonts.size.regular,
    fontWeight: '600',
    lineHeight: calcHeight(27),
    color: Colors.black,
    fontFamily: Fonts.type.base,
    marginTop: calcHeight(22),
    width: calcWidth(343),
  },
  itemimage: {
    width: calcHeight(210),
    height: calcHeight(117),
    resizeMode: 'cover',
    marginHorizontal: calcWidth(3),
  },
  scrollbottom: {
    width: calcWidth(331),
    alignSelf: 'center',
    marginTop: calcHeight(17),
  },
  closeimage: {
    width: calcHeight(8),
    height: calcHeight(8),
    resizeMode: 'contain',
  },
  closeButton: {
    width: calcHeight(24),
    height: calcHeight(24),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: calcHeight(24 / 2),
    position: 'absolute',
    right: calcWidth(8),
    top: calcHeight(5),
    backgroundColor: Colors.opacity11,
  },
  pickercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: calcWidth(331),
    alignSelf: 'center',
    borderBottomColor:Colors.gray2,
    borderBottomWidth:calcHeight(1),
    marginTop:calcHeight(5),
    zIndex:99,
    height:calcHeight(55),
  },
  pickericon: {
    width: calcHeight(24),
    height: calcHeight(24),
    resizeMode: 'contain',
  },
  pickerstyle:{
    width:calcWidth(290),
    marginLeft:calcWidth(15),
    borderWidth:0,
    borderColor:'rgba(0,0,0,0)'
  },
  pickerContainerstyle:{
    width:calcWidth(298),
  }
})
