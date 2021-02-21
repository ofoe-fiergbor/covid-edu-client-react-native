import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

const FormInput = ({
  value,
  keyboard,
  maxLength,
  placeholder,
  onChangeText,
  numberOfLines,
  textInputStyle,
  autoFocus=true,
  multiline = false,
  secureTextEntry = false,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      onChangeText={onChangeText}
      numberOfLines={numberOfLines}
      multiline={multiline}
      autoFocus={autoFocus}
      keyboardType={
        keyboard === "email"
          ? "email-address"
          : keyboard === "number"
          ? "numeric"
          : "default"
      }
      style={[styles.textInput, textInputStyle]}
      secureTextEntry={secureTextEntry}
    />
  );
};

//

export default FormInput;
