import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerEntity from '../views/components/drawerEntity/DrawerEntity'

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerEntity {...props}/>}>
           
        </Drawer.Navigator>
    )
}

export default DrawerNavigation
