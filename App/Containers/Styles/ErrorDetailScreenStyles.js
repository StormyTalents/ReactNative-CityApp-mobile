import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes'
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
  section: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: calcHeight(15),
    borderTopRightRadius: calcHeight(15),
    alignItems: 'center',
  },
  sectionitem: {
    width: calcWidth(331),

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
    width: calcWidth(331),
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
  },
  description1: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(21),
    color: Colors.black5,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    marginLeft: calcHeight(5),
    fontWeight: '500',
    marginTop: calcHeight(5),
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
  buttongroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: calcWidth(331),
  },
  imagetitle: {
    width: calcHeight(15),
    height: calcHeight(15),
    resizeMode: 'contain',
  },
  texttitle: {
    fontSize: Fonts.size.spec,
    lineHeight: calcHeight(22),
    color: Colors.black,
    letterSpacing: 0.374,
    fontFamily: Fonts.type.base,
    fontWeight: '500',
  },
  buttontitle: {
    width: calcHeight(30),
    height: calcHeight(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: calcHeight(40),
    height: calcHeight(40),
    resizeMode: 'cover',
    borderRadius: calcHeight(40 / 2),
    borderColor: Colors.gray2,
    borderWidth: calcHeight(1),
  },
  inputitem: {
    borderBottomColor: Colors.gray1,
    borderBottomWidth: calcHeight(1),
    paddingVertical: calcHeight(5),
    width: calcWidth(287),
  },
  inputpart: {
    flexDirection: 'row',
    width: calcWidth(331),
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})
