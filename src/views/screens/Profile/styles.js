import {StyleSheet} from 'react-native'
import { colors, dimensions } from "../../../constants";


const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: colors.lightBlueGradient,
        flex: 1
    },
    topContainer:{
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topContainerImage:{
        width: dimensions.image.lg,
        height: dimensions.image.lg,
        borderRadius: dimensions.radius.md,
    },
    
    topContainerName:{
        fontFamily: "Bold",
        fontSize: dimensions.font.md + 5,
        textTransform: 'capitalize'
    },
    topContainerEmail:{
        fontFamily: "Regular",
        color: colors.white,
        fontSize: 18
    },
    bottomContainer:{
        flex: 6,
        backgroundColor: colors.white,
        borderTopLeftRadius: dimensions.radius.md,
        borderTopRightRadius: dimensions.radius.md,
        
    },
    bottomContainerInner:{
        margin: dimensions.margin.xl
    },
    bottomContainerInnerView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: colors.gray,
        borderBottomWidth: .2,
        paddingBottom: dimensions.padding.sm,
        marginVertical: dimensions.margin.sm
    },
    itemText:{
        fontFamily: "Regular",
        marginHorizontal: dimensions.margin.md,
        paddingTop: dimensions.padding.xs,
        fontSize: 18
    },
    goIcon:{
        color: colors.gray
    },
    chatIcon:{
        color: colors.red,
        backgroundColor: colors.redGradient,
        padding: dimensions.padding.xs,
        borderRadius: dimensions.radius.xs
    },
    bulbIcon:{
        color: colors.green,
        backgroundColor: colors.greenGradient,
        padding: dimensions.padding.xs,
        borderRadius: dimensions.radius.xs
    },
    questionIcon:{
        color: colors.blue,
        backgroundColor: colors.lightBlueGradient,
        padding: dimensions.padding.xs,
        borderRadius: dimensions.radius.xs
    },
    logoutIcon:{
        color: colors.black,
        backgroundColor: colors.darkGradient,
        padding: dimensions.padding.xs,
        borderRadius: dimensions.radius.xs
    },
    version:{
        fontFamily: 'Regular',
        marginHorizontal: dimensions.margin.xs
    }
})


export default styles