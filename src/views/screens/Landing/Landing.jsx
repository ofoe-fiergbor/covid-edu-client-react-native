import React from "react";
import { View, Text, TouchableOpacity, Image, Button } from "react-native";
import styles from "./styles";
import Onboarding from "react-native-onboarding-swiper";
import { colors, dimensions } from "../../../constants";

const Skip = ({ ...props }) => (
  <TouchableOpacity {...props} style={styles.button}>
    <Text style={styles.buttonText}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity {...props} style={styles.button}>
    <Text style={styles.buttonText}>Next</Text>
  </TouchableOpacity>
);
const Landing = ({ navigation: { navigate } }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      onSkip={() => navigate("auth")}
      onDone={() => navigate("auth")}
      imageContainerStyles={styles.imageContainer}
      titleStyles={styles.title}
      subTitleStyles={styles.subTitle}
      pages={[

        {
          backgroundColor: colors.wash,
          image: (
            <Image
              style={styles.image}
              source={require("../../../../assets/images/png/wash.png")}
            />
          ),
          title: "Hand Wash",
          subtitle:
            "Contaminated hands can transfer the virus to your body through your eyes, nose or mouth. ",
        },
        {
          backgroundColor: colors.mask,
          image: (
            <Image
              source={require("../../../../assets/images/png/mask.png")}
              style={styles.image}
            />
          ),
          title: "Wear Mask",
          subtitle:
            "Before putting on a mask, clean hands with alcohol-based rub or soap and water.",
        },
        
        {
          backgroundColor: colors.sanitize,
          image: (
            <Image
              style={styles.image}
              source={require("../../../../assets/images/png/sanitize.png")}
            />
          ),
          title: "Use Sanitiser",
          subtitle:
            "To protect yourself and others, clean your hands with alcohol-based sanitizer frequently.",
        },
      ]}
    />
  );
};

export default Landing;
