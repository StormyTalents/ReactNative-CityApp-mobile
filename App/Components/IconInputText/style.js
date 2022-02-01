import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
  icon: {
    width: calcHeight(24),
    height: calcHeight(24),
    resizeMode: 'contain',
    tintColor: Colors.black0,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: calcWidth(331),
    alignSelf: 'center',
    borderBottomWidth: calcHeight(1),
    borderBottomColor: Colors.gray5,
    paddingVertical:calcHeight(8),
    marginTop:calcHeight(13),
  },
  input:{
    paddingVertical:calcHeight(0),
    marginLeft:calcWidth(18),
  }
});
