import { StyleSheet } from "react-native";
import { colors, dimensions } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  buttonContainer: {
    width: 250,
    marginVertical: 10,
    backgroundColor: colors.deepBlue,
  },

  loginButtonContainer: {
    width: 250,
    marginTop: 10,
    backgroundColor: colors.white,
    borderWidth: dimensions.border.sm,
    borderColor: colors.deepBlue,
  },
  loginText: {
    color: colors.deepBlue,
  },
  errorText: {
    marginVertical: 2,
    fontSize: dimensions.font.xs,
    color: colors.red,
    fontWeight: "bold",
  },
});

export default styles;
