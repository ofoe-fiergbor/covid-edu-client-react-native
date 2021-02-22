import React from 'react'
import {StyleSheet, Dimensions, StatusBar} from 'react-native'
import {colors, dimensions} from '../../../constants'

 const styles =StyleSheet.create({
    headerContainer:{
        backgroundColor:colors.whiteGradient,
        justifyContent: 'space-between',
        paddingHorizontal: dimensions.padding.sm,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 50,
        paddingTop: StatusBar.currentHeight || 42,
    },
    headerImage:{
        height: dimensions.image.sm,
        width: dimensions.image.sm,
        borderRadius: dimensions.radius.sm
    },
   headerText:{
       fontFamily: 'Bold',
       fontSize: dimensions.font.lg,
       color: colors.blue
   },
   newsHeader:{
       fontFamily: "Bold",
       fontSize: dimensions.font.md,
       marginLeft: dimensions.margin.sm,
       color: colors.blue,
       marginTop: 20
   },
   bottomNewsHeader:{
    fontFamily: "Bold",
    fontSize: dimensions.font.md,
    marginLeft: dimensions.margin.sm,
    color: colors.blue
   },
   
})

export default styles