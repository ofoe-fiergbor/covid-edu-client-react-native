import React from "react";
import styles from "./style";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.container}>
      <Ionicons name="ios-arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default BackButton;
