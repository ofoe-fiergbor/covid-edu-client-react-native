import { StyleSheet } from "react-native";
import { colors, dimensions } from "../../../constants";

const styles = StyleSheet.create({
  main: {
    minHeight: 150,
    // backgroundColor:'orange',
    width: dimensions.matchParent
  },
  head:{
      flexDirection:'row',
      height: 50,
  },
  profilePicture:{
      height: 55,
      width: 55,
      borderRadius: dimensions.radius.sm,
      marginRight: dimensions.margin.xs
  },
  name:{
      fontSize: dimensions.font.md,
      fontFamily: "Bold",
      textTransform: 'capitalize'
  },
  date:{
      fontFamily:'Regular',
      color: colors.darkGray
  },
  body:{
      marginVertical: dimensions.margin.md
  },
  bodyText:{
    fontFamily: "Regular",
    fontSize: dimensions.font.sm
  },
  icon:{
    color: colors.blue,
    paddingHorizontal: dimensions.padding.md,

},
footer:{
    flexDirection:'row',
    borderBottomColor: colors.whiteGradient,
    borderBottomWidth: dimensions.border.sm,
    paddingBottom: dimensions.padding.md,
    justifyContent:'space-between'
}
});

export default styles;
