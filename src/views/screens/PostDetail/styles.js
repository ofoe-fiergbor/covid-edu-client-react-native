import {StyleSheet} from 'react-native'
import { colors, dimensions } from "../../../constants";


const styles = StyleSheet.create({
    card:{
        marginVertical: dimensions.margin.xs,
        backgroundColor: colors.white,
        padding: dimensions.padding.sm,
        borderRadius: dimensions.radius.xs,
        shadowColor: dimensions.shadow.shadowColor,
        shadowOffset: dimensions.shadow.shadowOffset,
        shadowOpacity: dimensions.shadow.shadowOpacity,
        shadowRadius: dimensions.shadow.shadowRadius,
    },
    cardInnerTop:{
        flex: 1,
        flexDirection: 'row',
        marginBottom: dimensions.margin.sm
    }, 
    cardHeadLeft:{
        flex: 7,
        flexDirection: 'row',

    },
    cardHeadRight:{
        flex: 3,
        alignItems: 'flex-end'
    },
   image:{
       height: dimensions.image.sm,
       width: dimensions.image.sm,
       borderRadius: dimensions.radius.xs 
   },
   userInfo:{
       marginHorizontal: dimensions.margin.xs
   },
   userInfoName:{
       color: colors.black,
       fontFamily: 'Bold',
       fontSize: dimensions.font.sm,
   },
//    userInfoEmail:{
//        color: colors.gray,
//        fontFamily: 'Regular'
//    },
   cardHeadRightDate:{
       fontFamily: 'Regular',
       color: colors.darkGray
   },
   cardInnerMid:{
    marginBottom: dimensions.margin.sm
   },
   cardInnerMidText:{
       fontFamily: 'Regular',
       fontSize: dimensions.font.sm
   },
   cardInnerButtom:{
       flexDirection: 'row',
       justifyContent:'space-between'
       
   },
   icon:{
       color: colors.blue,
       paddingHorizontal: dimensions.padding.md,

   }
})


export default styles