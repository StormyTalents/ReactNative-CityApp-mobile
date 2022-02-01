import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
    container: {
        width: calcWidth(331),
        alignSelf: 'center',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        width: calcWidth(331),
        borderBottomColor: Colors.gray5,
        borderBottomWidth: calcHeight(1),
        marginTop:calcHeight(24),
    },
    title: {
        fontSize: Fonts.size.h8,
        fontWeight: '600',
        lineHeight: calcHeight(41),
        color: Colors.black0,
        letterSpacing: 0.36,
        fontFamily: Fonts.type.base,
    },
    input: {
        paddingVertical: calcHeight(5),
        fontSize: Fonts.size.input,
        lineHeight: calcHeight(21),
        fontFamily: Fonts.type.base,
        color: Colors.black0,
        marginLeft: calcHeight(15),
        width: calcWidth(290),
    },
    icon: {
        width: calcHeight(33),
        height: calcHeight(33),
        resizeMode: 'contain',
    },
    topcontent:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    button:{

    },
    buttontext:{
        textDecorationLine:'underline',
        color:Colors.primary,
        fontSize: Fonts.size.medium,
        lineHeight: calcHeight(41),
        fontFamily: Fonts.type.base,
        marginTop:calcHeight(5),
    }
});
