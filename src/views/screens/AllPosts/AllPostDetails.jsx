import React from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { deletePost } from "../../../backend/redux/actions/postAction";
import dayjs from "dayjs";
import styles from "./styles";
import { connect } from "react-redux";

const AllPostDetails = ({
  name,
  text,
  image,
  date,
  id,
  deletePost,
  navigation,
}) => {
  const deleteAlert = () =>
    Alert.alert(
      "Delete Post",
      "Are you sure you want to delete this post?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            deletePost(id);
            navigation.goBack();
          },
        },
      ],
      { cancelable: false }
    );

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
      <TouchableOpacity onPress={deleteAlert}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect(null, { deletePost })(AllPostDetails);
