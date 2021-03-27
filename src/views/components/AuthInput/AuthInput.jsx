import React from "react";
import styles from "./styles";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FormInput from "../FormInput/FormInput";

const AuthInput = ({
  placeholder,
  value,
  onChangeText,
  textInputStyle,
  ioniconName,
  iconColor = "black",
  keyboard,
  secureTextEntry,
  maxLength
}) => {
  return (
    <View style={styles.container}>
      <Ionicons name={ioniconName} size={24} color={iconColor} style={styles.icon}/>
      <FormInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        textInputStyle={textInputStyle}
        keyboard={keyboard}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default AuthInput;
