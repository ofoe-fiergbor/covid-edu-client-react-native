import { StyleSheet } from "react-native";
import { colors, dimensions } from "../../../constants";

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: dimensions.padding.lg,
    },
    title: {
      fontSize: dimensions.font.sm,
      marginTop: dimensions.margin.sm,
      fontWeight: "bold",
    },
    caption: {
      fontSize: dimensions.font.xs,
      lineHeight: dimensions.lineHeight,
    },
    row: {
      marginTop: dimensions.margin.lg,
      flexDirection: "row",
      alignItems: "center",
    },
    section: {
      flexDirection: "row",
      alignItems: "center",
      marginRight:  dimensions.margin.md,
    },
    paragraph: {
      fontWeight: "bold",
      marginRight: dimensions.margin.xxs,
    },
    drawerSection: {
      marginTop: dimensions.margin.md,
    },
    bottomDrawerSection: {
      marginBottom: dimensions.margin.md,
      borderTopColor: colors.whiteGray,
      borderTopWidth: dimensions.border.xs,
    },
    preference: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: dimensions.padding.sm,
      paddingHorizontal: dimensions.padding.md,
    },
  });

export default styles;
