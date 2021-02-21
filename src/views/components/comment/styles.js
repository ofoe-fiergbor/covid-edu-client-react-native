import { StyleSheet } from "react-native";
import { colors, dimensions } from "../../../constants";

const styles = StyleSheet.create({
  main: {
    minHeight: 100,
    // backgroundColor:'orange',
    width: dimensions.matchParent,
    marginTop: dimensions.margin.sm,
  },
  head: {
    flexDirection: "row",
    height: 35,
  },
  profilePicture: {
    height: 35,
    width: 35,
    borderRadius: dimensions.radius.sm,
    marginRight: dimensions.margin.xs,
  },
  name: {
    fontWeight: "bold",
    fontSize: dimensions.font.xs,
  },
  date: {
    fontSize: dimensions.font.xs,
    fontWeight: "bold",
    color: colors.gray,
  },
  body: {
    marginVertical: dimensions.margin.xs,
    borderBottomColor: colors.whiteGradient,
    borderBottomWidth: dimensions.border.sm,
  },
  icon: {
    color: colors.blue,
    paddingHorizontal: dimensions.padding.md,
  },
 
});

export default styles;
