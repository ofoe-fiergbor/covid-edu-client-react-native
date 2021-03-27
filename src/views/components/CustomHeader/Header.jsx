import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Coronavirus Tracker</Text>
    </View>
  );
};

export default Header;
