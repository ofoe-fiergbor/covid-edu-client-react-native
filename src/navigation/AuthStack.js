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
import { AppLoading } from "expo-app-loading";
import { 
  useFonts,
  CrimsonText_400Regular,
  CrimsonText_600SemiBold,
  CrimsonText_700Bold, 
} from '@expo-google-fonts/crimson-text'

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
  let [fontsLoaded, error] = useFonts({
    Regular: CrimsonText_400Regular,
    SemiBold: CrimsonText_600SemiBold,
    Bold: CrimsonText_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="welcome" screenOptions={screenOptions}>
        <Stack.Screen name="tabs" component={TabNavigation} />
        <Stack.Screen name="drawer" component={DrawerNavigation} />
        <Stack.Screen name="postDetail" component={PostDetail} />
        <Stack.Screen name="tipDetail" component={TipDetail} />

        <Stack.Screen name="landing" component={Landing} options={options} />
        <Stack.Screen name="welcome" component={Welcome} options={options} />
      
      </Stack.Navigator>
    </View>
  );
};

export default AuthStack;
