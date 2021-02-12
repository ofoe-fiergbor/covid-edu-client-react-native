import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import styles from "./styles";
import bg from "../../../../assets/images/png/welcome.png";
import welcome from "../../../../assets/images/png/land.png";
import Button from "../../components/button/Button"

const Welcome = ({ navigation: { navigate } }) => {
  return (
    <ImageBackground
      style={StyleSheet.absoluteFillObject}
      resizeMode="cover"
      source={bg}
    >
      <Image source={welcome} style={styles.imageContainer} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>EDUCOV</Text>
        <Text style={styles.titleDescription}>
          A Covid-19 Educational App that provides insight into the pandemic.
        </Text>
      </View>
      <Button
        buttonName="Get Started"
        onPress={()=>navigate('landing')}
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
      />
    </ImageBackground>
  );
};

const style = StyleSheet.create({});
export default Welcome;
