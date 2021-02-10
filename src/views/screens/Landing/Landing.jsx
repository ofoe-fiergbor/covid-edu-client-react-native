import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const Landing = ({navigation:{navigate}}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigate('drawer')}>
                <Text>Drawer</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Landing
