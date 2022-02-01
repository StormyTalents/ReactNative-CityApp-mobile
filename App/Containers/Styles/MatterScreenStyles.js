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
    width: calcWidth(335),
    alignSelf: 'center',
  },
  scrollcontainer: {
    backgroundColor: Colors.opacity2
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
  modal3: {
    alignItems: 'center',
    width: calcWidth(317),
    height: calcHeight(321),
    borderRadius: calcHeight(6),
    justifyContent: 'center',
  },
  modal_text: {
    fontSize: Fonts.size.medium,
    color: Colors.gray1,
    fontFamily: Fonts.type.base,
    fontWeight: 'normal',
    width: calcWidth(253),
  },
  modal_title: {
    fontSize: Fonts.size.input,
    color: Colors.black,
    fontFamily: Fonts.type.base,
    fontWeight: 'bold',
    width: calcWidth(253),
  },
  modaltop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: calcWidth(253),
    alignItems: 'center',
  },
  modal_calendar: {
    width: calcHeight(45),
    height: calcHeight(45),
    resizeMode: 'contain',
  },
  modal_close: {
    width: calcHeight(31),
    height: calcHeight(31),
    resizeMode: 'contain',
    borderRadius: calcHeight(31 / 2),
  }
})
