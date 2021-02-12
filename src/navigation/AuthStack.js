import React from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../constants"
import PostDetail from "../views/screens/PostDetail/PostDetail";
import TipDetail from "../views/screens/TipDetail/TipDetail";
import Landing from "../views/screens/Landing/Landing";
import Welcome from "../views/screens/Welcome/Welcome";
import DrawerNavigation from "./DrawerNavigation";
import TabNavigation from "./TabNavigation";
import Auth from "../views/screens/Auth/Auth";


const Stack = createStackNavigator();

const screenOptions = {
  headerTitle: "EDUCOV",
  headerTitleAlign: "center",
  headerTintColor: "#fff",
  headerStyle: {
    backgroundColor: colors.blue,
  },
  headerTitleStyle: {
    fontSize: 30,
  },
};
const options = { headerShown: false };

const AuthStack = ({ navigate, isLoggedIn }) => {
 
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="welcome" screenOptions={screenOptions}>
        <Stack.Screen name="tabs" component={TabNavigation} />
        <Stack.Screen name="drawer" component={DrawerNavigation} />
        <Stack.Screen name="postDetail" component={PostDetail} />
        <Stack.Screen name="tipDetail" component={TipDetail} />

        <Stack.Screen name="landing" component={Landing} options={options} />
        <Stack.Screen name="welcome" component={Welcome} options={options} />
        <Stack.Screen name="auth" component={Auth} options={options}/>
      
      </Stack.Navigator>
    </View>
  );
};

export default AuthStack;
