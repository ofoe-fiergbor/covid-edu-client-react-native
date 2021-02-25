import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const Skeleton = () => {
  return (
    <SkeletonPlaceholder highlightColor="#d6d6d6" backgroundColor="#d1d1d1">
      <View style={styles.trackHeader} />
      <View style={styles.trackImageContainer}>
        <View style={styles.trackImage} />
        <View style={styles.trackImageTextContainer}>
          <View style={styles.trackImageText} />
          <View style={styles.trackImageText} />
        </View>
      </View>
      <View style={styles.trackHeaderTwo} />
      <View style={styles.trackTitle} />
      <View style={styles.trackCardsContainer}>
          <View style={styles.trackCards}>
              <View style={styles.trackCard} />
              <View style={styles.trackCard} />
          </View> 
          <View style={styles.trackCards}>
              <View style={styles.trackCard} />
              <View style={styles.trackCard} />
          </View>
      </View>
      <View style={styles.trackHeaderTwo} />
      <View style={styles.trackTitle} />
    </SkeletonPlaceholder>
  );
};

export default Skeleton;
