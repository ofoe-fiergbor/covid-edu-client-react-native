import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from './styles'

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.addButton}>
      <Entypo name="add-to-list" size={20} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default AddButton;

