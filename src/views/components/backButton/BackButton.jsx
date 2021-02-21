import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from './style'

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.container}>
      <Ionicons name="ios-arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default BackButton;
