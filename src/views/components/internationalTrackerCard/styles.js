import { StyleSheet } from "react-native";
import { dimensions, colors } from "./../../../constants";

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
  },
  heading: {
    fontFamily: "Bold",
    fontSize: dimensions.font.md,
    color: colors.red,
  },
  texts: {
    fontFamily: "Regular",
    fontSize: dimensions.font.md - 2,
    color: colors.red,
  },
});

export default styles;
