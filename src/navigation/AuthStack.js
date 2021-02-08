import React from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import PostDetail from "../views/screens/PostDetail/PostDetail";
import TipDetail from "../views/screens/TipDetail/TipDetail";
import Register from "../views/screens/Register/Register";
import Landing from "../views/screens/Landing/Landing";
import Welcome from "../views/screens/Welcome/Welcome";
import DrawerNavigation from "./DrawerNavigation";
import Login from "../views/screens/Login/Login";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator();

const screenOptions = {
  headerTitle: "EDUCOV",
  headerTitleAlign: "center",
  headerTintColor: "#fff",
  headerStyle: {
    backgroundColor: "#525efc",
  },
  headerTitleStyle: {
    fontSize: 30,
  },
};
const options = { headerShown: false };

const AuthStack = ({ navigate, isLoggedIn }) => {
  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? (
        <Stack.Navigator initialRouteName="tabs" screenOptions={screenOptions}>
          <Stack.Screen name="tabs" component={TabNavigation} />
          <Stack.Screen name="drawer" component={DrawerNavigation} />
          <Stack.Screen name="postDetail" component={PostDetail} />
          <Stack.Screen name="tipDetail" component={TipDetail} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="welcome"
          screenOptions={screenOptions}
        >
          <Stack.Screen name="landing" component={Landing} options={options} />
          <Stack.Screen name="welcome" component={Welcome} options={options} />
          <Stack.Screen
            name="register"
            component={Register}
            options={options}
          />
          <Stack.Screen name="login" component={Login} options={options} />
        </Stack.Navigator>
      )}
    </View>
  );
};
const mstp = (state) => {
  return {
    auth: state.auth.isLoggedIn,
  };
};
export default connect(mstp)(AuthStack);
