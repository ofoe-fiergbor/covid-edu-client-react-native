import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const Welcome = ({navigation:{navigate}}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigate('landing')}>
                <Text style={{fontFamily: 'Regular'}}>get started</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Welcome
