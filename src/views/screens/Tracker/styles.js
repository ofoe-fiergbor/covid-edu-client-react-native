import { StyleSheet } from "react-native";
import { colors, dimensions } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whiteGradient
      },
      activity:{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1
      },
      ghanaCard:{
          marginHorizontal: dimensions.margin.sm,
          marginVertical: dimensions.margin.sm,
          borderBottomColor: colors.white,
          borderBottomWidth: 1
      },
      ghanaCardInner:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: dimensions.margin.sm
    },
      singleghanaCard1:{
          backgroundColor: colors.white,
          padding: dimensions.padding.sm,
          alignItems: 'center',
          borderRadius: dimensions.radius.xs,
          borderTopColor: colors.yellow,
          borderTopWidth: 10,
          width: dimensions.margin.vx
      },
      heading:{
          fontFamily: 'Bold',
          fontSize: dimensions.font.md
      },
      number:{
          fontFamily: 'Regular',
          fontSize: dimensions.font.md - 2
      },
      singleghanaCard2:{
        backgroundColor: colors.white,
        padding: dimensions.padding.sm,
        alignItems: 'center',
        borderRadius: dimensions.radius.xs,
        borderTopColor: colors.red,
        borderTopWidth: 10,
        width: dimensions.margin.vx
    },
    singleghanaCard3:{
        backgroundColor: colors.white,
        padding: dimensions.padding.sm,
        alignItems: 'center',
        borderRadius: dimensions.radius.xs,
        borderTopColor: colors.green,
        borderTopWidth: 10,
        width: dimensions.margin.vx
    },
    singleghanaCard4:{
        backgroundColor: colors.white,
        padding: dimensions.padding.sm,
        alignItems: 'center',
        borderRadius: dimensions.radius.xs,
        borderTopColor: colors.black,
        borderTopWidth: 10,
        width: dimensions.margin.vx
    },
    time:{
        fontFamily: 'Regular',
        marginBottom: dimensions.margin.sm,
        fontSize: dimensions.font.sm
    },
    title:{
        fontFamily: 'Bold',
        fontSize: dimensions.font.md,
        color: colors.blue
    },
    globalCard:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.white,
        paddingHorizontal: dimensions.padding.sm,
        paddingVertical: dimensions.padding.xl,
        borderRadius: dimensions.radius.xs,
        marginVertical: dimensions.margin.sm

    },
    timeContainer:{
        flexDirection: 'column'
    },
    cardContainer:{
        alignItems: 'center'
    },
    infectedText:{
        fontFamily: 'Bold',
        fontSize: dimensions.font.md,
        color: colors.red
    },
    infectedText1:{
        fontFamily: 'Regular',
        fontSize: dimensions.font.md-2,
        color: colors.red
    },
    recoveredText:{
        fontFamily: 'Bold',
        fontSize: dimensions.font.md,
        color: colors.green
    },
    recoveredText1:{
        fontFamily: 'Regular',
        fontSize: dimensions.font.md-2,
        color: colors.green
    },
    deathText:{
        fontFamily: 'Bold',
        fontSize: dimensions.font.md,
        color: colors.black
    },
    deathText1:{
        fontFamily: 'Regular',
        fontSize: dimensions.font.md-2,
        color: colors.black
    },
    image:{
        width: dimensions.matchParent
    }
});

export default styles;
