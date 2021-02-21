import { StyleSheet } from "react-native";
import { colors, dimensions } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },

  image: {
    height: dimensions.image.xxlx,
    width: dimensions.image.xxxl,
    marginRight: 10,
    borderBottomLeftRadius: 20,
    marginBottom: dimensions.margin.vl,
  },
  news__card__text__container: {
    backgroundColor: colors.darkGradient,
    borderBottomLeftRadius: dimensions.radius.sm,
    borderBottomRightRadius: dimensions.radius.sm,
    position: "absolute",
    bottom: 0,
  },
  imageBg: {
    borderRadius: dimensions.radius.sm,
  },
  newsHeader: {
    color: colors.white,
    fontFamily: "Bold",
    fontSize: dimensions.font.md,
    marginBottom: dimensions.margin.sm
  },
  newsContent: {
    margin: dimensions.margin.md,
  },
  mainNews:{
      color: colors.gray,
      fontFamily: 'Regular',
      marginBottom: dimensions.margin.sm
  },
  bottomInfo:{
      flexDirection: 'row',
      flex: 1,
  },
  date:{
      color: colors.white,
      flex: 7,
      fontFamily: 'Regular'
  },
  source: {
    color: colors.white,
    flex: 3,
    fontFamily: 'Regular'
  },
  share__button: {
    position: "absolute",
    backgroundColor: colors.darkGradient,
    alignSelf: "flex-end",
    padding: dimensions.padding.sm,
    borderRadius: dimensions.radius.lg,
    top: 2,
  },
  bottomImageContainer:{
      height: dimensions.image.mdlg,
      marginHorizontal: dimensions.margin.sm,
      marginVertical: dimensions.margin.xs,
      flexDirection: 'row',
      backgroundColor: colors.whiteGradient,
      borderRadius: dimensions.radius.sm
  },
  bottomImage:{
      height: dimensions.image.mdlg,
      width: dimensions.image.mdlg,
      borderTopLeftRadius: dimensions.radius.sm,
      borderBottomLeftRadius: dimensions.radius.sm,
  },
  bottomTextContainer:{
    flexGrow: 1,
    flex: 1,
    marginHorizontal: dimensions.margin.sm
  },
  bottomText:{
      fontFamily: 'Bold',
      fontSize: dimensions.font.sm,
      color: colors.blue
  },
  bottomDescription:{
      fontFamily: 'Regular',
      fontSize: dimensions.font.xs
  },
  bottomInfoDate:{
    color: colors.black,
    flex: 7,
    fontFamily: 'Regular'
  },
  bottomInfoSource:{
    color: colors.black,
    flex: 3,
    fontFamily: 'Bold'
  },
  bottomIcon:{
      color: colors.blue
  },
  bottomInfo2:{
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  }
});

export default styles;
