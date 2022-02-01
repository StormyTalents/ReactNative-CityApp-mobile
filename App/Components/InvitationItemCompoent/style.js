import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  label: {
    fontSize: Fonts.size.small,
    fontWeight: '600',
    lineHeight: calcHeight(15),
    color: Colors.black4,
    letterSpacing: 0.36,
    fontFamily: Fonts.type.base,
    marginLeft: calcHeight(10),
  },
  icon: {
    width: calcHeight(20),
    height: calcHeight(20),
    resizeMode: 'contain',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    height: calcHeight(30),
    borderRadius: calcHeight(10),
    marginHorizontal: calcWidth(4),
    elevation: calcHeight(5),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginVertical: calcHeight(15),
    paddingHorizontal: calcWidth(10),
  }
});
