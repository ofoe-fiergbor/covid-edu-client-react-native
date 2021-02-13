import {StyleSheet} from 'react-native'
import { colors, dimensions } from "../../../constants";


const styles = StyleSheet.create({
    title:{
        fontFamily: "Bold",
        fontSize: dimensions.font.xl
    },
    subTitle:{
        fontFamily: "Regular",
        fontSize: dimensions.font.sm
    },
    image:{
        width: dimensions.image.lg,
        height: dimensions.image.xxl
    },
    image1:{
        width: dimensions.image.xlx,
        height: dimensions.image.xxl
    },
    buttonText:{
        fontFamily: 'Bold',
        fontSize: dimensions.font.sm
    },
  
    button:{
        marginHorizontal: dimensions.margin.md
    }
})


export default styles