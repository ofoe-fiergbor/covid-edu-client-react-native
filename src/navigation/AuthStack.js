import React from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../constants";
import PostDetail from "../views/screens/PostDetail/PostDetail";
import Tips from "../views/screens/Tips/Tips";
import Faq from "../views/screens/FAQ/Faq";
import AllPosts from '../views/screens/AllPosts/AllPosts'
import Landing from "../views/screens/Landing/Landing";
import TabNavigation from "./TabNavigation";
import Auth from "../views/screens/Auth/Auth";
import NewsDetail from "../views/screens/NewsDetail/NewsDetail";

const Stack = createStackNavigator();

const screenOptions = { headerShown: false };
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
          <Stack.Screen name="postDetail" component={PostDetail} />
          <Stack.Screen name="newsDetail" component={NewsDetail}/>
          <Stack.Screen name="tips" component={Tips} />
          <Stack.Screen name="faq" component={Faq} />
          <Stack.Screen name="allPosts" component={AllPosts} />
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
