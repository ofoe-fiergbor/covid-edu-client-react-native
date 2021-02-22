import React from "react";
import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { colors, dimensions } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.whiteGradient,
    paddingHorizontal: dimensions.padding.lg,
  },
  textBox: {
    height: 150,
    backgroundColor: colors.whiteGray,
    marginTop: dimensions.margin.xxxl,
    borderRadius: dimensions.radius.sm,
  },
  buttonStyle: {
    backgroundColor: colors.blue,
    marginTop: dimensions.margin.lg,
    width: dimensions.matchParent,
  },
  textStyle: {
    color: colors.white,
  },
  isDisabled: {
    backgroundColor: colors.gray,
  },
  cancel: {
    textAlign: "right",
    color: colors.blue,
    fontWeight: "bold",
    fontSize: dimensions.font.sm,
  },
  cancelContainer: {
    width: 35,
    height: 35,
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "center",
    borderColor: colors.blue,
    marginTop: dimensions.margin.lg,
    borderWidth: dimensions.border.md,
    borderRadius: dimensions.radius.xl,
    marginRight: dimensions.margin.lg,
  },
});

export default styles;