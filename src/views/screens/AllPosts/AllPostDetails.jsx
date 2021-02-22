import React from "react";
import { View, Text, Image } from "react-native";
import dayjs from "dayjs";
import styles from "./styles";

const AllPostDetails = ({ name, text, image, date }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View style={styles.containerInfo}>
          <View style={styles.containerInfoCover}>
            <Text style={styles.containerName}>{name}</Text>
            <Text style={styles.containerDate}>
              {dayjs(date).format("DD-MMM-YY")}
            </Text>
          </View>
          <View style={styles.containerPostCover}>
            <Text style={styles.containerPost}>{text}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AllPostDetails;
