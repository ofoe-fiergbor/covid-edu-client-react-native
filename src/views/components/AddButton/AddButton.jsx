import React from "react";
import styles from './styles'
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AddButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.addButton}>
      <Entypo name="add-to-list" size={20} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default AddButton;

