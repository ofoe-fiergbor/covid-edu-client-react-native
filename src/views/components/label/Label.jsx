import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";

const Label = ({ text, containerStyle, textStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
};

export default Label;
