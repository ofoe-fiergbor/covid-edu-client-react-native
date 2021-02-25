import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const Skeleton = () => {
  return (
    <SkeletonPlaceholder highlightColor="#d6d6d6" backgroundColor="#d1d1d1">
      <View style={styles.main}>
        <View style={styles.topHeader} />
        <View style={styles.topnewsBody}>
          <View style={styles.shareBtn} />
          <View style={styles.newsTitle} />
          <View style={styles.newsTitle2} />
          <View style={styles.newsTextContainer}>
            <View style={styles.newsText} />
            <View style={styles.newsText} />
            <View style={styles.newsText} />
          </View>
          <View style={styles.bottomDetails}>
            <View style={styles.date} />
            <View style={styles.date} />
          </View>
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.topHeader2} />
        <View style={styles.bottomnewsBodyMain}>
          <View style={styles.bottomnewsBody}>
            <View style={styles.bottomnewsImage} />
            <View>
              <View style={styles.bottomnewsTitleContainer}>
                <View style={styles.bottomnewsTitle} />
                <View style={styles.bottomnewsTitle} />
              </View>
              <View style={styles.bottomnewsTextContainer}>
                <View style={styles.bottomnewsText} />
                <View style={styles.bottomnewsText} />
              </View>
              <View style={styles.bottomnewsDateContainer}>
                <View style={styles.bottomnewsDate} />
                <View style={styles.bottomnewsShare} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bottomnewsBodyMain}>
          <View style={styles.bottomnewsBody}>
            <View style={styles.bottomnewsImage} />
            <View>
              <View style={styles.bottomnewsTitleContainer}>
                <View style={styles.bottomnewsTitle} />
                <View style={styles.bottomnewsTitle} />
              </View>
              <View style={styles.bottomnewsTextContainer}>
                <View style={styles.bottomnewsText} />
                <View style={styles.bottomnewsText} />
              </View>
              <View style={styles.bottomnewsDateContainer}>
                <View style={styles.bottomnewsDate} />
                <View style={styles.bottomnewsShare} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bottomnewsBodyMain}>
          <View style={styles.bottomnewsBody}>
            <View style={styles.bottomnewsImage} />
            <View>
              <View style={styles.bottomnewsTitleContainer}>
                <View style={styles.bottomnewsTitle} />
                <View style={styles.bottomnewsTitle} />
              </View>
              <View style={styles.bottomnewsTextContainer}>
                <View style={styles.bottomnewsText} />
                <View style={styles.bottomnewsText} />
              </View>
              <View style={styles.bottomnewsDateContainer}>
                <View style={styles.bottomnewsDate} />
                <View style={styles.bottomnewsShare} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default Skeleton;
