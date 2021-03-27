import { StyleSheet } from "react-native";
import { colors, dimensions } from "../../../constants";

const styles = StyleSheet.create({

    ghanaTrackingCard:{
        backgroundColor: colors.whiteGradient,
        padding: dimensions.padding.sm,
        alignItems: 'center',
        borderRadius: dimensions.radius.xs,
        borderTopColor: colors.yellow,
        borderTopWidth: 10,
        width: dimensions.margin.vx,
    },
    heading:{
        fontFamily: 'Bold',
        fontSize: dimensions.font.md
    },
    number:{
        fontFamily: 'Regular',
        fontSize: dimensions.font.md - 2
    },


})

export default styles