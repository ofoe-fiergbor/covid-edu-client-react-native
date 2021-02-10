import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Entypo, AntDesign } from "@expo/vector-icons";
import {colors} from "../constants"
import Post from "../views/screens/PostWall/Post";
import News from "../views/screens/NewsWall/News";
import Tracker from "../views/screens/Tracker/Tracker";

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="post" shifting={true}>
      <Tab.Screen
        name="post"
        component={Post}
        options={{
          tabBarLabel: "Views",
          tabBarIcon: ({ color }) => (
            <Entypo name="list" size={26} color={color} />
          ),
          tabBarColor: colors.blue,
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
          tabBarColor: colors.purple,
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
          tabBarColor: colors.darkBlue,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
