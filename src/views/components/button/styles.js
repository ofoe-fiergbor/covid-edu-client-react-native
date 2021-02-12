import React from 'react'
import {StyleSheet, Dimensions} from 'react-native'
import {colors, dimensions} from '../../../constants'

 const styles =StyleSheet.create({
    container:{
        backgroundColor:colors.blueGray,
        height:dimensions.inputHeight,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:dimensions.radius.sm
    },
   
})

export default styles