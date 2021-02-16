import React from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../constants";
import PostDetail from "../views/screens/PostDetail/PostDetail";
import TipDetail from "../views/screens/TipDetail/TipDetail";
import Landing from "../views/screens/Landing/Landing";
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

const AuthStack = ({ user }) => {
  return (
    <View style={{ flex: 1 }}>
      {!user ? (
        <Stack.Navigator
          initialRouteName="landing"
          screenOptions={screenOptions}
        >
          <Stack.Screen name="landing" component={Landing} options={options} />
          <Stack.Screen name="auth" component={Auth} options={options} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="landing"
          screenOptions={screenOptions}
        >
          <Stack.Screen name="tabs" component={TabNavigation} />
          <Stack.Screen name="drawer" component={DrawerNavigation} />
          <Stack.Screen name="postDetail" component={PostDetail} />
          <Stack.Screen name="tipDetail" component={TipDetail} />
        </Stack.Navigator>
      )}
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};
export default connect(mapStateToProps)(AuthStack);
