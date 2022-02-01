import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from 'Themes/ConvertSize'
export default StyleSheet.create({
    icon: {
        width: calcHeight(25),
        height: calcHeight(25),
        resizeMode: 'contain',
        tintColor: Colors.lightblue,
    },
    avatar: {
        width: calcHeight(40),
        height: calcHeight(40),
        resizeMode: 'cover',
        borderRadius: calcHeight(40 / 2),
        borderColor: Colors.gray2,
        borderWidth: calcHeight(1),
    },
    input: {
        borderBottomColor: Colors.gray1,
        borderBottomWidth: calcHeight(1),
        paddingVertical: calcHeight(5),
        width: calcWidth(290),
    },
    container: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    button: {
        position:'absolute',
        right:calcWidth(0),
        width: calcHeight(45),
        height: calcHeight(45),
        alignItems:'center',
        justifyContent:'center',
    }
});
