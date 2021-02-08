import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

const FormInput = ({
  placeholder,
  value,
  onChangeText,
  textInputStyle,
  keyboard,
  secureTextEntry=false,
  maxLength
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      onChangeText={onChangeText}
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
