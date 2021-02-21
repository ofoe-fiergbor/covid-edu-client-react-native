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
      height: 50
  },
  profilePicture:{
      height: 55,
      width: 55,
      borderRadius: dimensions.radius.sm,
      marginRight: dimensions.margin.xs
  },
  name:{
      fontWeight:'bold',
      fontSize: dimensions.font.md,
  },
  date:{
      fontWeight:'bold',
      color: colors.gray
  },
  body:{
      marginVertical: dimensions.margin.md
  },
  icon:{
    color: colors.blue,
    paddingHorizontal: dimensions.padding.md,

},
footer:{
    flexDirection:'row',
    borderBottomColor: colors.whiteGradient,
    borderBottomWidth: dimensions.border.xl,
    paddingBottom: dimensions.padding.md,
    justifyContent:'space-between'
}
});

export default styles;
