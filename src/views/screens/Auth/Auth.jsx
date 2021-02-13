import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import banner from "../../../../assets/images/jpg/banner3.jpg";
import styles from "./styles";
import Button from "../../components/button/Button";
import logo from "../../../../assets/images/png/logo.png";
const Auth = ({ navigation: { navigate } }) => {
  return (
    <ImageBackground
      source={banner}
      style={styles.mainImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.titleContainer}>
          <Image source={logo} style={styles.image} resizeMode="cover" />
          <Text style={styles.titleDescription}>
            A Covid-19 Educational App that provides insight into the pandemic.
          </Text>
        </View>
        <View style={styles.authButtons}>
         
          <Button
            buttonName="Continue with google"
            onPress={() => navigate("drawer")}
            buttonStyle={styles.goButton}
            textStyle={styles.buttonText}
          />
           <Button
            buttonName="Continue with facebook"
            onPress={() => navigate("drawer")}
            buttonStyle={styles.fbButton}
            textStyle={styles.buttonText}
          />
        
        </View>
      </View>
    </ImageBackground>
  );
};
export default Auth;
