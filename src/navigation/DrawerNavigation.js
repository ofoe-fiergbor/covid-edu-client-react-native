import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerEntity from "../views/components/drawerEntity/DrawerEntity";
import Profile from "../views/screens/Profile/Profile";
import Tips from "../views/screens/Tips/Tips";
import Faq from "../views/screens/FAQ/Faq";
import TabNavigation from "./TabNavigation";
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerEntity {...props} />}>
      <Drawer.Screen name="My Wall" component={TabNavigation} />
      <Drawer.Screen name="My Profile" component={Profile} />
      <Drawer.Screen name="Tips" component={Tips} />
      <Drawer.Screen name="FAQ" component={Faq} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
