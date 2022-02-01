import {StyleSheet} from 'react-native';
import {Metrics, ApplicationStyles, Colors, Fonts} from '../../Themes';
import {
  calcHeight,
  calcWidth,
  deviceHeight,
  deviceWidth,
} from '../../Themes/ConvertSize';
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
  },
  mainContainer: {
    flex: 1,
  },
  iconimage: {
    width: calcHeight(35),
    height: calcHeight(35),
    resizeMode: 'contain',
  },
  iconitem: {
    backgroundColor: Colors.gray2,
    width: calcHeight(65),
    height: calcHeight(65),
    borderRadius: calcHeight(65 / 2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconitem11: {
    width: calcHeight(65),
    height: calcHeight(65),
    borderRadius: calcHeight(65 / 2),
    resizeMode: 'cover',
  },
  topbar: {
    flexDirection: 'row',
    width: deviceWidth,
    justifyContent: 'space-between',
    padding: calcHeight(15),
  },
  secondbar: {
    flexDirection: 'row',
    width: deviceWidth,
    justifyContent: 'space-between',
    paddingHorizontal: calcHeight(15),
  },
  toptext: {
    fontSize: Fonts.size.medium,
    color: Colors.primary,
    fontFamily: Fonts.type.base,
    fontWeight: 'bold',
    marginLeft: calcHeight(5),
  },
  toplabel: {
    fontSize: Fonts.size.h5,
    color: Colors.black,
    fontFamily: Fonts.type.base,
    fontWeight: 'bold',
    marginLeft: calcHeight(5),
  },
  leftcontent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  titleText: {
    fontSize: Fonts.size.h4,
    color: Colors.black,
    fontFamily: Fonts.type.base,
    fontWeight: 'bold',
  },
  datetext: {
    fontSize: Fonts.size.regular,
    color: Colors.black,
    fontFamily: Fonts.type.base,
    marginTop: calcHeight(5),
  },
  iconimage1: {
    width: calcHeight(80),
    height: calcHeight(80),
    resizeMode: 'contain',
    marginTop: -calcHeight(20),
  },
  weathertext: {
    fontSize: Fonts.size.medium,
    color: Colors.gray1,
    fontFamily: Fonts.type.base,
  },
  section: {
    alignItems: 'center',
  },
  bg_dashboard: {
    width: calcHeight(280),
    height: calcHeight(280),
    resizeMode: 'contain',
  },
  titleText1: {
    fontSize: Fonts.size.h4,
    color: Colors.black,
    fontFamily: Fonts.type.base,
    fontWeight: 'bold',
    textAlign: 'center',
    width: calcHeight(300),
  },
  submit_form: {
    width: calcWidth(341),
    alignSelf: 'center',
  },
  submit_title: {
    fontSize: Fonts.size.regular,
    color: Colors.black,
    fontFamily: Fonts.type.base,
    fontWeight: 'bold',
  },
  submit_textarea: {
    width: calcWidth(337),
    height: calcHeight(97),
    borderRadius: calcHeight(5),
    borderWidth: calcHeight(1),
    borderColor: Colors.gray5,
    marginTop: calcHeight(12),
  },
  submit_button: {
    width: calcWidth(104),
    height: calcHeight(40),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(71, 168, 223, 0.1)',
    marginTop: calcHeight(28),
  },
  submit_image: {
    width:calcHeight(19),
    height:calcHeight(19),
    resizeMode:'contain',
  },
  submit_text: {
    fontSize: Fonts.size.medium,
    color: '#11A7FC',
    fontFamily: Fonts.type.base,
    fontWeight: 'bold',
    marginLeft:calcWidth(7),
  },
});
