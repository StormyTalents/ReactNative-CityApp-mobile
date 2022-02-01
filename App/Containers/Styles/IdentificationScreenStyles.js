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
    backgroundColor: Colors.black
  },
  topbar: {
    flexDirection: 'row',
    width: deviceWidth,
    justifyContent: 'space-between',
    marginTop: calcHeight(30),
    alignItems: 'center',
    padding: calcHeight(10),
  },
  leftbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: calcHeight(5),
  },
  lefttext: {
    color: Colors.primary,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.base,
  },
  title: {
    color: Colors.white,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.base,
  },
  rightimage: {
    tintColor: Colors.primary,
    width: calcHeight(40),
    height: calcHeight(40),
    resizeMode: 'contain',
  },
  secondbar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: calcHeight(10),
  },
  account: {
    width: calcHeight(30),
    height: calcHeight(30),
    resizeMode: 'contain',
    marginLeft: calcHeight(10),
  },
  name: {
    color: Colors.white,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.base,
    marginLeft: calcHeight(25),
  },
  bank: {
    color: Colors.white,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.base,
  },
  bankname: {
    color: Colors.white,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.base,
    fontWeight: 'bold',
    marginTop: calcHeight(5),
  },
  rightcontent: {
    marginLeft: calcHeight(15),
  },
  thirdbar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: calcHeight(10),
    backgroundColor: Colors.opacity,
    paddingVertical: calcHeight(15),
    marginTop: calcHeight(5),
  },
  idcard: {
    tintColor: Colors.primary,
    width: calcHeight(30),
    height: calcHeight(30),
    resizeMode: 'contain',
  },
  idcardcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.primary,
    borderWidth: calcHeight(1),
    borderRadius: calcHeight(50 / 2),
    width: calcHeight(50),
    height: calcHeight(50),
  },
  inputcontainer: {
    backgroundColor: Colors.opacity,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: calcHeight(150),
    paddingVertical: calcHeight(5),
  },
  input: {
    borderColor: Colors.gray,
    borderWidth: calcHeight(1),
    paddingVertical: calcHeight(2),
    paddingHorizontal: calcHeight(10),
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.base,
    color: Colors.white,
    borderRadius: calcHeight(5),
    width: deviceWidth - calcHeight(10),
  }
})
