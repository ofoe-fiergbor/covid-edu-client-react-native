import { StyleSheet } from "react-native";
import { colors, dimensions } from "../../../constants";

const styles = StyleSheet.create({
  button: {
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    width: dimensions.matchParent,
    borderRadius: dimensions.radius.xs,
    marginBottom: dimensions.margin.xs,
    backgroundColor: colors.blueGradient,
  },
  buttonText: {
    fontWeight: "bold",
    color: colors.white,
    textTransform: "capitalize",
  },
});

export default styles;
