import React from "react";
import styles from './styles'
import { View, Text } from "react-native";

const InternationalTrackerCard = ({ heading, color, renderInfo }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={{ ...styles.heading, ...color }}>{heading}</Text>
      <Text style={{ ...styles.texts, ...color }}>{renderInfo}</Text>
    </View>
  );
};

export default InternationalTrackerCard;
