import {StyleSheet} from 'react-native'
import { colors, dimensions } from "../../../constants";


const styles = StyleSheet.create({
    mainImage:{
        ...StyleSheet.absoluteFillObject
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.darkGradient,
        flex: 1
      },
      titleContainer:{
        marginVertical: dimensions.margin.xxl,
        marginHorizontal: dimensions.margin.xl,
        flex: 7
    },
   
    titleDescription:{
        justifyContent: 'center',
        color: colors.whiteGray,
        fontFamily: 'Regular',
        fontSize: dimensions.font.sm,
        marginVertical: dimensions.margin.lg
        
    },
    fbButton:{
        marginHorizontal: dimensions.margin.xl,
        backgroundColor: colors.blue,
        marginVertical: dimensions.margin.sm,
        borderRadius: dimensions.radius.xs
    },
    goButton:{
        marginHorizontal: dimensions.margin.xl,
        backgroundColor: colors.google,
        marginVertical: dimensions.margin.sm,
        borderRadius: dimensions.radius.xs
    },
    apButton:{
        marginHorizontal: dimensions.margin.xl,
        backgroundColor: colors.white,
        marginVertical: dimensions.margin.sm,
        borderRadius: dimensions.radius.xs
    },
    buttonText:{
        textAlign: 'center',
        color: colors.white,
        fontFamily: 'Regular'
    },
    image:{
        width: dimensions.image.xl,
        height: dimensions.image.lg
    },
    authButtons:{
        flex: 3,
    },
   
})


export default styles