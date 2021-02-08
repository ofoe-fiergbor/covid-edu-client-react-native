import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Label = ({ text, containerStyle, textStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
};

export default Label;
