import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles,Colors,Fonts } from '../../Themes'
import { calcHeight, calcWidth, deviceHeight, deviceWidth } from '../../Themes/ConvertSize'
export default StyleSheet.create({
    container:{
        width:calcWidth(335),
        backgroundColor:Colors.gray4,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius:calcHeight(5),
        paddingHorizontal:calcHeight(10),
    },
    input:{
        paddingVertical:calcHeight(5),
        paddingHorizontal:calcWidth(10),
        fontSize:Fonts.size.spec,
        lineHeight: calcHeight(22),
        fontFamily:Fonts.type.base,
        color:Colors.black,
    },
    leftitem:{
        flexDirection:'row',
        alignItems:'center',
        
    },
    closebutton:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.gray3,
        width:calcHeight(20),
        height:calcHeight(20),
        borderRadius:calcHeight(20/2),
    },
    closeimage:{
        width:calcHeight(8),
        height:calcHeight(8),
        resizeMode:'contain',
    },
    icon:{
        width:calcHeight(20),
        height:calcHeight(20),
        resizeMode:'contain',
    }
});
