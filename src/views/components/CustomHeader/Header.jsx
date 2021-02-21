import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import headimage from '../../../../assets/images/dummy/male1.jpg'

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Educov</Text>
            <Image source={headimage} style={styles.headerImage}/>
        </View>
    )
}

export default Header
