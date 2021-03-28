import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const PostSkeleton = () => {
  return (
    <SkeletonPlaceholder highlightColor="#d6d6d6" backgroundColor="#d1d1d1">
      <View style={styles.mainPostCard}>
        <View style={styles.postCard}>
          <View style={styles.postCardTextContainer}>
            <View style={styles.postCardText} />
            <View style={styles.postCardText} />
            <View style={styles.postCardText} />
            <View style={styles.postCardText} />
          </View>
        </View>

        <View style={styles.postCard}>
          <View style={styles.postCardTextContainer}>
            <View style={styles.postCardText} />
            <View style={styles.postCardText} />
            <View style={styles.postCardText} />
            <View style={styles.postCardText} />
          </View>
        </View>

        <View style={styles.postCard}>
          <View style={styles.postCardTextContainer}>
            <View style={styles.postCardText} />
            <View style={styles.postCardText} />
            <View style={styles.postCardText} />
            <View style={styles.postCardText} />
          </View>
        </View>

        <View style={styles.postCard}>
          <View style={styles.postCardTextContainer}>
            <View style={styles.postCardText} />
            <View style={styles.postCardText} />
            <View style={styles.postCardText} />
            <View style={styles.postCardText} />
          </View>
        </View>

        <View style={styles.postCard}>
          <View style={styles.postCardTextContainer}>
            <View style={styles.postCardText} />
            <View style={styles.postCardText} />
            <View style={styles.postCardText} />
            <View style={styles.postCardText} />
          </View>
        </View>
      </View>
      <View style={styles.addBtn} />
    </SkeletonPlaceholder>
  );
};

export default PostSkeleton;
