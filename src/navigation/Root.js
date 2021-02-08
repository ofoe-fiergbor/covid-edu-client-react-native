import React from "react";
import StackNavigation from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";

const navigationRef = React.createRef();

const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

const Root = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigation navigate={navigate} />
    </NavigationContainer>
  );
};

export default Root;
