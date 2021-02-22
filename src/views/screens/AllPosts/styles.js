import {StyleSheet} from 'react-native'
import { colors, dimensions } from "../../../constants";


const styles = StyleSheet.create({
    postHead:{
        paddingTop: dimensions.padding.xl,
        backgroundColor: colors.white,
        elevation: 20,
        paddingHorizontal: dimensions.padding.md,
        fontFamily: 'Bold',
        fontSize: dimensions.font.md,
        color: colors.blue
    },
    mainContainer:{
        backgroundColor: colors.white,
        marginVertical: dimensions.margin.xs,
        marginHorizontal: dimensions.margin.xs,
        borderRadius: dimensions.radius.xs
    },
    innerContainer:{
        flexDirection: 'row',
        padding: dimensions.padding.sm,
        flex: 1
    },
    imageContainer:{
        flex: 2
    },
    image:{
        height: dimensions.image.sm,
        width: dimensions.image.sm, 
        borderRadius: dimensions.radius.lg
    },
    containerInfo:{
        flex: 8
    },
    containerInfoCover:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: dimensions.margin.xs,
        alignItems: 'center'
    },
    containerName:{
        fontFamily: 'Bold',
        fontSize: dimensions.font.sm,
        textTransform: 'capitalize',
        color: colors.blue
    },
    containerPost:{
        fontFamily: 'Regular',
    },
    containerDate: {
        fontFamily: 'Regular'
    },
    
})


export default styles