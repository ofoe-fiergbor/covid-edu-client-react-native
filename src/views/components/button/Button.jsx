import React from "react";
import styles from "./styles";
import {TouchableOpacity } from "react-native";
import Label from "../label/Label";

const button = ({ buttonName, buttonStyle, onPress, textStyle, isDisabled=false }) => {
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]} disabled={isDisabled} onPress={onPress}>
      <Label text={buttonName} textStyle={[styles.text, textStyle]} />
    </TouchableOpacity>
  );
};

export default button;
