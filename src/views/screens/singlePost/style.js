import { StyleSheet } from "react-native";
import { colors, dimensions } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: dimensions.padding.xl,
    paddingTop: dimensions.padding.xxxl + 10,
    flex: 1,
  },
  comments: {
    width: dimensions.matchParent,
    alignSelf: "center",
  },
  commentInputContainer: {
    bottom: 0,
    height: 60,
    alignItems:'center',
    position: 'absolute',
    flexDirection: "row",
    justifyContent:'center',
    width: dimensions.matchParent,
    backgroundColor: colors.whiteGray,
    borderTopColor: colors.blueGradient,
    borderTopWidth: dimensions.border.xs,
  },
  icon: {
    color: colors.blue,
  },
});

export default styles;
