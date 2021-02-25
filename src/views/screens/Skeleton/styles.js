import { StyleSheet } from "react-native";
import { colors, dimensions } from "../../../constants";

const styles = StyleSheet.create({
  main: {
    marginHorizontal: dimensions.margin.sm,
    flexDirection: "column",
  },
  topHeader: {
    width: dimensions.halfParent,
    height: dimensions.margin.md,
    marginVertical: dimensions.margin.md + 5,
    borderRadius: dimensions.radius.sm,
  },
  topHeader2: {
    width: dimensions.image.xxl,
    height: dimensions.margin.md,
    marginVertical: dimensions.margin.md + 5,
    borderRadius: dimensions.radius.sm,
  },
  topnewsBody: {
    backgroundColor: colors.whiteGradient,
    borderRadius: dimensions.radius.sm,
    width: dimensions.matchParent,
  },
  bottomnewsBodyMain: {
    backgroundColor: colors.whiteGradient,
    borderRadius: dimensions.radius.sm,
    width: dimensions.matchParent,
    marginBottom: dimensions.margin.md
  },
  shareBtn: {
    height: dimensions.image.xs + 15,
    width: dimensions.image.xs + 15,
    position: "absolute",
    right: 5,
    top: 5,
    borderRadius: dimensions.radius.lg,
  },
  newsTitle: {
    marginHorizontal: dimensions.margin.md,
    height: dimensions.margin.sm,
    width: dimensions.image.xxl,
    borderRadius: dimensions.radius.sm,
    marginTop: dimensions.margin.xxl + 40,
    marginBottom: dimensions.margin.xs,
  },
  newsTitle2: {
    marginHorizontal: dimensions.margin.md,
    height: dimensions.margin.sm,
    width: dimensions.image.xxl,
    borderRadius: dimensions.radius.sm,
    marginBottom: dimensions.margin.lg,
  },
  newsTextContainer: {
    marginVertical: dimensions.margin.sm,
    marginHorizontal: dimensions.margin.md,
  },
  newsText: {
    height: dimensions.margin.xs,
    width: dimensions.image.xxl,
    borderRadius: dimensions.radius.sm,
    marginVertical: dimensions.margin.xs - 2,
  },
  bottomDetails: {
    marginHorizontal: dimensions.margin.md,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: dimensions.margin.sm,
  },
  date: {
    height: dimensions.margin.xs,
    width: dimensions.image.xl,
    borderRadius: dimensions.radius.sm,
    marginVertical: dimensions.margin.xs - 2,
  },
  bottomnewsBody: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomnewsImage: {
    width: dimensions.image.sm + 30,
    height: dimensions.image.sm + 45,
    borderTopLeftRadius: dimensions.radius.sm,
    borderBottomLeftRadius: dimensions.radius.sm,
  },
  bottomnewsTitle: {
    width: dimensions.image.xxlx,
    height: dimensions.margin.sm,
    borderRadius: dimensions.radius.md,
    marginBottom: dimensions.margin.xs,
  },
  bottomnewsTitleContainer:{
    marginLeft: dimensions.margin.sm ,
    marginVertical: dimensions.margin.xs
  },
  bottomnewsTextContainer:{
    marginLeft: dimensions.margin.sm 
  },
  bottomnewsText:{
    height: dimensions.margin.xs,
    width: dimensions.image.xxlx,
    borderRadius: dimensions.radius.sm,
    marginVertical: dimensions.margin.xs - 2,
  },
  bottomnewsDateContainer:{
      flexDirection: 'row',
      marginHorizontal: dimensions.margin.sm,
      alignItems: 'center' ,
      justifyContent: 'space-between'
  },
  bottomnewsDate:{
    height: dimensions.margin.xs,
    width: dimensions.image.xl,
    borderRadius: dimensions.radius.sm,
    marginVertical: dimensions.margin.xs - 2,
  },
  bottomnewsShare:{
    height: dimensions.image.xs,
    width: dimensions.image.xs,
    borderRadius: dimensions.radius.lg,
    marginVertical: dimensions.margin.xs - 2,
  }
});

export default styles;
