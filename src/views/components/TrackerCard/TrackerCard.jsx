import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";

const TrackerCard = ({ containerStyles, renderData, heading }) => {
  return (
    <View style={{ ...styles.ghanaTrackingCard, ...containerStyles }}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.number}>{renderData}</Text>
    </View>
  );
};

export default TrackerCard;
