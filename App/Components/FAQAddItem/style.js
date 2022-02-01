import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  icon: {
    width: calcHeight(20),
    height: calcHeight(20),
    resizeMode: 'contain',
  },
  container: {
    width: calcWidth(335),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: Colors.opacity1,
    padding: calcHeight(16),
    marginTop:calcHeight(16),
    borderRadius:calcHeight(12),
  },
  text: {
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(21),
    color: Colors.black2,
    fontFamily: Fonts.type.base,
    letterSpacing: 0.374,
    fontWeight: '600',
  },
  description:{
    fontSize: Fonts.size.medium,
    lineHeight: calcHeight(21),
    color: Colors.black3,
    fontFamily: Fonts.type.base,
    letterSpacing: 0.374,
    fontWeight: '500',
    width:calcWidth(299),
    alignSelf:'center',
    marginTop:calcHeight(24),
    marginBottom:calcHeight(20),
  }
});
