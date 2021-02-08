import React from 'react'
import styles from './styles'
import { View, Text, TouchableOpacity } from 'react-native'
import Label from '../label/Label'

const button = ({
    buttonName,
    buttonStyle,
    onPress,
    textStyle
}) => {
    return (
        <TouchableOpacity style={[styles.container, buttonStyle]} onPress={onPress}>
            <Label text={buttonName} textStyle={[styles.text, textStyle]} />
        </TouchableOpacity>
    )
}

export default button
