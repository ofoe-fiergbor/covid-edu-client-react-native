import colors from "./colors";

const dimensions = {
  padding: {
    xs: 5,
    sm: 10,
    md: 15,
    lg: 20,
    xl: 30,
    xxl: 60,
    xxxl: 70
  },
  margin: {
    xs: 5,
    sm: 10,
    md: 15,
    lg: 20,
    xl: 30,
    xxl: 50,
    xxxl: 65
  },
  font: {
    xs: 13,
    sm: 15,
    md: 20,
    lg: 30,
    xl: 35,
    xxl: 40,
  },
  border: {
    xxs: 0.5,
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
  },
  radius: {
    xs: 5,
    sm: 10,
    md: 25,
    lg: 50,
    xl: 100,
  },
  image: {
    xs: 25,
    sm: 45,
    md: 75,
    lg: 120,
    xl: 140,
    xlx: 160,
    xxl: 250,
    xxxl: 300,
  },
  inputHeight: 55,
  matchParent: "100%",
  halfParent: "50%",
  iconSize: 22,
  lineHeight: 20,
  shadow: {
    elevation: 1,
    borderWidth: 1,
    shadowOpacity: 1,
    shadowRadius: 20,
    shadowColor: colors.black,
    borderColor: colors.white,
    shadowOffset: { width: 0, height: 10 },
  },
  bottomSheetHeading: {
    textTransform: "capitalize",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "600",
  },
};

export default dimensions;
