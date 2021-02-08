import React from "react";
import { View, Text } from "react-native";
import FormInput from "../FormInput/FormInput";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

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
