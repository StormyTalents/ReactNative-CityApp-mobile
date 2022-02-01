import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes/'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
    container:{
        width:calcWidth(331),
    },
    label:{
        fontSize:Fonts.size.medium,
        fontWeight:'normal',
        lineHeight: calcHeight(21),
        color:Colors.gray3,
        letterSpacing:0.36,
        fontFamily:Fonts.type.base,
    },
    input:{
        borderColor:Colors.gray3,
        borderWidth:calcHeight(1),
        paddingVertical:calcHeight(10),
        paddingHorizontal:calcWidth(13),
        fontSize:Fonts.size.medium,
        lineHeight: calcHeight(21),
        fontFamily:Fonts.type.base,
        color:Colors.black,
        marginTop:calcHeight(5),
        borderRadius:calcHeight(5),
    },
});
