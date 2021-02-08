import {StyleSheet} from 'react-native'
import {colors, dimensions}  from '../../../constants'

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: 300,
        alignItems:'center',
        borderBottomWidth: dimensions.border.xs,
        borderBottomColor: colors.gray,
    },
    icon:{
        marginRight: 20
    }
})

export default styles