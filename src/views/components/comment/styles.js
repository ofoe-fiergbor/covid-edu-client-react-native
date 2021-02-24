import { StyleSheet } from "react-native";
import { colors, dimensions } from "../../../constants";

const styles = StyleSheet.create({
  main: {
    minHeight: 70,
    // backgroundColor:'orange',
    width: dimensions.matchParent,
    marginTop: dimensions.margin.xs,
  },
  head: {
    flexDirection: "row",
    height: 35,
  },
  profilePicture: {
    height: 40,
    width: 40,
    borderRadius: dimensions.radius.sm,
    marginRight: dimensions.margin.xs,
  },
  name: {
    fontFamily: 'Bold',
    fontSize: dimensions.font.xs,
  },
  date: {
    fontFamily: 'Regular',
    fontSize: dimensions.font.xs,
    color: colors.darkGray,
  },
  body: {
    marginVertical: dimensions.margin.sm,
    borderBottomColor: colors.whiteGradient,
    borderBottomWidth: dimensions.border.xs,
    
  },
  bodyText:{
    fontFamily: 'Regular'
  },
  icon: {
    color: colors.blue,
    paddingHorizontal: dimensions.padding.md,
  },
 
});

export default styles;
