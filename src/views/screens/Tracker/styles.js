import { StyleSheet } from "react-native";
import { colors, dimensions } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  activity: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  ghanaCard: {
    marginHorizontal: dimensions.margin.sm,
    marginVertical: dimensions.margin.sm,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
  },
  ghanaCardInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: dimensions.margin.sm,
  },

  

  number: {
    fontFamily: "Regular",
    fontSize: dimensions.font.md - 2,
  },

  borderRed: {
    borderTopColor: colors.red,
  },
  borderGreen: {
    borderTopColor: colors.green,
  },

  borderBlack: {
    borderTopColor: colors.black,
  },
  time: {
    fontFamily: "Regular",
    marginBottom: dimensions.margin.sm,
    fontSize: dimensions.font.sm,
  },
  title: {
    fontFamily: "Bold",
    fontSize: dimensions.font.md,
    color: colors.blue,
  },
  globalCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.whiteGradient,
    paddingHorizontal: dimensions.padding.sm,
    paddingVertical: dimensions.padding.xl,
    borderRadius: dimensions.radius.xs,
    marginVertical: dimensions.margin.sm,
  },
  timeContainer: {
    flexDirection: "column",
  },
  cardContainer: {
    alignItems: "center",
  },
  redColor: {
    color: colors.red,
  },
  greenColor: {
    color: colors.green,
  },
  blackColor: {
    color: colors.black,
  },
  image: {
    width: dimensions.matchParent,
  },
});

export default styles;
