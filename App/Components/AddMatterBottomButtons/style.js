import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from 'Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from 'Themes/ConvertSize'
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: calcWidth(343),
    alignSelf: 'center',
    paddingVertical: calcHeight(16),
    justifyContent: 'space-between',
    borderTopWidth: calcHeight(1),
    borderTopColor: Colors.gray6,
    backgroundColor:Colors.white,
    
  },
  icon: {
    width: calcHeight(18),
    height: calcHeight(18),
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
  label1: {
    fontSize: Fonts.size.medium,
    fontWeight: '500',
    lineHeight: calcHeight(19),
    color: Colors.white,
    letterSpacing: 0.74,
    fontFamily: Fonts.type.base,
    marginLeft: calcHeight(9),
  },
  label2: {
    fontSize: Fonts.size.medium,
    fontWeight: '500',
    lineHeight: calcHeight(19),
    color: Colors.primary,
    letterSpacing: 0.74,
    fontFamily: Fonts.type.base,
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    width: calcWidth(164),
    height: calcHeight(44),
    borderRadius: calcHeight(6),
    flexDirection: 'row',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    width: calcWidth(164),
    height: calcHeight(44),
    borderRadius: calcHeight(6),
    flexDirection: 'row',
    borderColor: Colors.primary,
    borderWidth: calcHeight(2),
  },
});
