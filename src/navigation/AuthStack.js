import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import Faq from "../views/screens/FAQ/Faq";
import TabNavigation from "./TabNavigation";
import Tips from "../views/screens/Tips/Tips";
import Auth from "../views/screens/Auth/Auth";
import Landing from "../views/screens/Landing/Landing";
import AllPosts from '../views/screens/AllPosts/AllPosts'
import { createStackNavigator } from "@react-navigation/stack";
import PostDetail from "../views/screens/PostDetail/PostDetail";
import SinglePost from "../views/screens/singlePost/SinglePost";
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
          <Stack.Screen name="singlePost" component={SinglePost} />
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
