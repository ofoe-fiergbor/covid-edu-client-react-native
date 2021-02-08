import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Entypo, AntDesign } from "@expo/vector-icons";

import Post from "../views/screens/PostWall/Post";
import News from "../views/screens/NewsWall/News";
import Tracker from "../views/screens/Tracker/Tracker";
import Tips from "../views/screens/Tips/Tips";

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="post">
      <Tab.Screen
        name="post"
        component={Post}
        options={{
          tabBarLabel: "Views",
          tabBarIcon: ({ color }) => (
            <Entypo name="list" size={26} color={color} />
          ),
          tabBarColor: "#035efc",
        }}
      />
      <Tab.Screen
        name="news"
        component={News}
        options={{
          tabBarLabel: "News",
          tabBarIcon: ({ color }) => (
            <Entypo name="news" size={26} color={color} />
          ),
          tabBarColor: "#525efc",
        }}
      />
      <Tab.Screen
        name="tracker"
        component={Tracker}
        options={{
          tabBarLabel: "Tracker",
          tabBarIcon: ({ color }) => (
            <AntDesign name="linechart" size={26} color={color} />
          ),
          tabBarColor: "#0b357d",
        }}
      />
      <Tab.Screen
        name="tips"
        component={Tips}
        options={{
          tabBarLabel: "Tips",
          tabBarIcon: ({ color }) => (
            <Entypo name="light-bulb" size={26} color={color} />
          ),
          tabBarColor: "#4c44ad",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
