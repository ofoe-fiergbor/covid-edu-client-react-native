import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import banner from "../../../../assets/images/jpg/banner3.jpg";
import logo from "../../../../assets/images/png/logo.png";
import Button from "../../components/button/Button";
import styles from "./styles";
import { loginWithGoogle } from "../../../backend/redux/actions/authAction";
import {connect} from 'react-redux'



const Auth = ({ navigation: { navigate }, loginWithGoogle }) => {
  
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
            onPress={() => loginWithGoogle()}
            buttonStyle={styles.goButton}
            textStyle={styles.buttonText}
          />
          <Button
            buttonName="Continue with facebook"
            onPress={() => console.log("object")}
            buttonStyle={styles.fbButton}
            textStyle={styles.buttonText}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
export default connect(null, {loginWithGoogle})(Auth);
