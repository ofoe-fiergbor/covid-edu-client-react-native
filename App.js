import {
  CrimsonText_400Regular,
  CrimsonText_600SemiBold,
  CrimsonText_700Bold,
  useFonts,
} from "@expo-google-fonts/crimson-text";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, LogBox } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/backend/redux/reducers/store";
import Root from "./src/navigation/Root";

export default function App() {
  LogBox.ignoreLogs(["Setting a timer"]);

  let [fontsLoaded, error] = useFonts({
    Regular: CrimsonText_400Regular,
    SemiBold: CrimsonText_600SemiBold,
    Bold: CrimsonText_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <Root />
          <StatusBar style="auto" />
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
