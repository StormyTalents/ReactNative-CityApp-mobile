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
    height: calcHeight(600)
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
    width: calcWidth(343),
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
    width: deviceWidth,
    borderTopRightRadius: calcHeight(42),
    borderTopLeftRadius: calcHeight(42),
    alignItems: 'center',
    marginTop: -calcHeight(60),
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
    width: calcHeight(24),
    height: calcHeight(24),
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
  date: {
    fontSize: Fonts.size.small,
    fontWeight: '500',
    lineHeight: calcHeight(18),
    color: Colors.red,
    fontFamily: Fonts.type.base,
  },
  date1: {
    fontSize: Fonts.size.small,
    fontWeight: '500',
    lineHeight: calcHeight(18),
    color: Colors.green,
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
    width: calcWidth(200),
  },
  mattericom: {
    width: calcWidth(343),
  },
  grayline: {
    width: calcWidth(343),
    backgroundColor: Colors.gray1,
    height: calcHeight(1),
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
  slidercontainer: {
    height: calcHeight(225),
    width: deviceWidth,
    backgroundColor: Colors.primary,
  },
  docStyle: {
    width: calcHeight(4),
    height: calcHeight(4),
    marginBottom: calcHeight(70)
  },
  activeDotStyle: {
    width: calcHeight(4),
    height: calcHeight(4),
    marginBottom: calcHeight(70)
  },
  slideritem: {
    width: '100%',
    height: '100%',
  },
  closebutton: {
    width: calcHeight(50),
    height: calcHeight(50),
    borderRadius: calcHeight(50 / 2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeicon: {
    width: calcHeight(20),
    height: calcHeight(20),
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
  yellowstar: {
    width: calcHeight(10),
    height: calcHeight(10),
    resizeMode: 'contain',
    marginRight: calcWidth(3),
  },
  ratecontainer: {
    flexDirection: 'row',
    marginTop: calcHeight(3),
  },
  topbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: calcHeight(83),
    marginLeft: calcWidth(15),
  },
  toptitle: {
    fontSize: Fonts.size.h5,
    fontWeight: '500',
    lineHeight: calcHeight(41),
    color: Colors.white,
    fontFamily: Fonts.type.base,
  },
  bottomcontainer: {
    width: deviceWidth,
    height: calcHeight(76),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: calcHeight(1),
    borderTopColor: Colors.gray2,
  },
  modal1: {
    height: calcHeight(454),
    width: calcWidth(310),
    borderRadius:calcHeight(9),
    paddingVertical:calcHeight(23),
    paddingHorizontal:calcWidth(20),
  },
  textinput:{
    backgroundColor:Colors.black9,
    width:calcWidth(270),
    height:calcHeight(181),
    borderRadius:calcHeight(9),
    paddingVertical:calcHeight(10),
    paddingHorizontal:calcWidth(12),
    fontSize: Fonts.size.medium,
    fontWeight: '500',
    lineHeight: calcHeight(20),
    color: Colors.gray6,
    fontFamily: Fonts.type.base,
  },
  topmodal:{
    flexDirection:'row',
    width:calcWidth(275),
    alignItems:'center',
    justifyContent:'space-between',
  },
  modaltext1:{
    fontSize: Fonts.size.h7,
    fontWeight: 'bold',
    lineHeight: calcHeight(30),
    color: Colors.black,
    fontFamily: Fonts.type.base,
  },
  modalclosebutton:{
    justifyContent:'center',
    alignItems:'center',
    width:calcHeight(25),
    height:calcHeight(25),
  },
  modalcloseicon:{
    width:calcHeight(12),
    height:calcHeight(12),
    resizeMode:'contain',
  },
  modaltext2:{
    fontSize: Fonts.size.medium,
    fontWeight: '600',
    lineHeight: calcHeight(21),
    color: Colors.black,
    fontFamily: Fonts.type.base,
    width:calcWidth(275),
  },
  modaltext3:{
    fontSize: Fonts.size.medium,
    fontWeight: '600',
    lineHeight: calcHeight(21),
    color: Colors.black5,
    fontFamily: Fonts.type.base,
    width:calcWidth(275),
  },
  bottommodal:{
    width:calcWidth(275),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
  },
  bottommodalbtn1:{
    width:calcWidth(90),
    height:calcHeight(44),
    borderRadius:calcHeight(6),
    justifyContent:'center',
    alignItems:'center',
    borderColor:Colors.primary,
    borderWidth:calcHeight(2),
  },
  bottommodalbtn2:{
    width:calcWidth(90),
    height:calcHeight(44),
    borderRadius:calcHeight(6),
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Colors.primary,
  },
  horline:{
    width:calcWidth(10),
  },
  buttommodaltext1:{
    fontSize: Fonts.size.medium,
    fontWeight: '500',
    lineHeight: calcHeight(19),
    color: Colors.primary,
    fontFamily: Fonts.type.base,
  },
  buttommodaltext2:{
    fontSize: Fonts.size.medium,
    fontWeight: '500',
    lineHeight: calcHeight(19),
    color: Colors.white,
    fontFamily: Fonts.type.base,
  },
})
