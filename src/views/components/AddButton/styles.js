import {StyleSheet} from 'react-native'
import { colors, dimensions } from "../../../constants";


const styles = StyleSheet.create({
    addButton: {
        width: dimensions.margin.xxxl,
        height: dimensions.margin.xxxl,
        backgroundColor: colors.blueGradient,
        borderRadius: dimensions.radius.lg,
        position: "absolute",
        bottom: dimensions.margin.md,
        right: dimensions.margin.md,
        justifyContent: "center",
        alignItems: "center",
      },
      icon:{
          color: colors.white
      }
})


export default styles