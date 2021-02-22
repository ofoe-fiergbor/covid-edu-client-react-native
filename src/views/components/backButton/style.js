import { StyleSheet } from "react-native";
import { colors, dimensions } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteGradient,
    borderRadius: dimensions.radius.xl,
    marginLeft: dimensions.margin.lg,
    marginTop: dimensions.margin.xl,
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    width: 45,
    position:'absolute'
  },
});

export default styles;
