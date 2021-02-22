import { StyleSheet } from "react-native";
import { colors, dimensions } from "../../../constants";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: dimensions.padding.sm,
    alignItems: "center",
    backgroundColor: colors.white,
    flex: 1,
    marginVertical: dimensions.margin.xs,
    borderRadius: dimensions.radius.xs,
    borderStartColor: colors.blue,
    borderStartWidth: dimensions.radius.xs
  },
  headerText:{
      flex: 9,
      fontFamily: 'Bold'
  },
  icon:{
      flex: 1,
      fontSize: dimensions.font.md,
      color: colors.blue
  },
  icon2:{
    flex: 1,
    fontSize: dimensions.font.md,
    color: colors.red
},
  content:{
    backgroundColor: colors.white,
    padding: dimensions.padding.sm,
    fontFamily: 'Regular',
    borderRadius: dimensions.radius.xs,
  },
  content2:{
    backgroundColor: colors.white,
    padding: dimensions.padding.sm,
    fontFamily: 'Regular',
    borderRadius: dimensions.radius.xs,
    color: colors.blue
  },

  faqHeader:{
      marginTop: dimensions.margin.md,
      paddingVertical: dimensions.padding.md,
      marginHorizontal: dimensions.margin.md,
      fontFamily: "Bold",
      fontSize: dimensions.font.mdd
  }
});

export default styles;
