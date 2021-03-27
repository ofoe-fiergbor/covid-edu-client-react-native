import {StyleSheet} from 'react-native'
import { colors, dimensions } from "../../../constants";


const styles = StyleSheet.create({
    addButton: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        bottom: dimensions.margin.md,
        right: dimensions.margin.md,
        width: dimensions.margin.xxl,
        backgroundColor: colors.blue,
        height: dimensions.margin.xxl,
        borderRadius: dimensions.radius.lg,
      },
      icon:{
          color: colors.white
      }
})


export default styles