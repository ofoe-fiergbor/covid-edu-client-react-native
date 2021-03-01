import React from "react";
import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { colors, dimensions } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.whiteGradient,
    paddingHorizontal: dimensions.padding.xl,
  },
  textBox: {
    height: 150,
    backgroundColor: colors.whiteGray,
    marginTop: dimensions.margin.xxxl,
    borderRadius: dimensions.radius.xs,
    paddingHorizontal: 10,
    fontFamily: "Regular",
    fontSize: 15,
  },
  videoUrlTextBox: {
    backgroundColor: colors.whiteGray,
    marginTop: dimensions.margin.md,
    height: 40,
    borderRadius: dimensions.radius.xs,
    paddingHorizontal: 10,
    fontFamily: "Regular",
    fontSize: 15,
    color: colors.black,
  },
  buttonStyle: {
    backgroundColor: colors.blue,
    marginTop: dimensions.margin.lg,
    width: dimensions.matchParent,
    height: 50,
    borderRadius: dimensions.radius.xs,
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
