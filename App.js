import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import {
  createHttpLink,
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/backend/redux/reducers/store";
import Root from "./src/navigation/Root";
import AppLoading  from "expo-app-loading";
import { 
  useFonts,
  CrimsonText_400Regular,
  CrimsonText_600SemiBold,
  CrimsonText_700Bold, 
} from '@expo-google-fonts/crimson-text'


const httpLink = createHttpLink({
  uri: "http://192.168.43.212:5000",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Regular: CrimsonText_400Regular,
    SemiBold: CrimsonText_600SemiBold,
    Bold: CrimsonText_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <Root />
            <StatusBar style="auto" />
          </View>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
