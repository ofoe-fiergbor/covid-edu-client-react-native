import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { colors } from "../constants";
import Post from "../views/screens/PostWall/Post";
import News from "../views/screens/NewsWall/News";
import Tracker from "../views/screens/Tracker/Tracker";
import Profile from "../views/screens/Profile/Profile"

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="post"
      activeColor="#3b5998"
      inactiveColor="#aaa"
    >
      <Tab.Screen
        name="post"
        component={Post}
        options={{
          tabBarLabel: "Views",
          tabBarIcon: ({ color }) => (
            <Entypo name="list" size={24} color={color} />
          ),
          tabBarColor: colors.whiteGradient,
        }}
      />
      <Tab.Screen
        name="news"
        component={News}
        options={{
          tabBarLabel: "News",
          tabBarIcon: ({ color }) => (
            <Entypo name="news" size={24} color={color} />
          ),
          tabBarColor: colors.whiteGradient,
        }}
      />
      <Tab.Screen
        name="tracker"
        component={Tracker}
        options={{
          tabBarLabel: "Tracker",
          tabBarIcon: ({ color }) => (
            <AntDesign name="linechart" size={24} color={color} />
          ),
          tabBarColor: colors.whiteGradient,
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
          tabBarColor: colors.whiteGradient,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
