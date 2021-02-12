import {StyleSheet} from 'react-native'
import {colors, dimensions} from '../../../constants'

const styles = StyleSheet.create({
   
    imageContainer:{
        alignSelf: 'center',
        width: dimensions.image.xxl,
        height: dimensions.image.xxxl,
        marginVertical: dimensions.margin.lg
    },
    titleContainer:{
        alignItems: 'center',
        marginVertical: dimensions.margin.lg
    },
    title:{
        color: colors.white,
        fontFamily: 'Bold',
        fontSize: dimensions.font.xl
    },
    titleDescription:{
        textAlign: 'center',
        justifyContent: 'center',
        marginHorizontal: dimensions.margin.lg,
        color: colors.whiteGray,
        fontFamily: 'Regular',
        fontSize: dimensions.font.sm
    },
    button:{
        marginHorizontal: dimensions.margin.xl,
        backgroundColor: colors.white,
        marginVertical: dimensions.margin.xxl
    },
    buttonText:{
        textAlign: 'center',
        color: colors.blue
    }
})


export default styles