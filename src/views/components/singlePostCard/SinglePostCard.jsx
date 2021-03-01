import React from "react";
import dayjs from "dayjs";
import styles from "./style";
import Hyperlink from "react-native-hyperlink";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { FontAwesome, Feather, SimpleLineIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import YoutubeIframe from "../../components/youtubeIframe/YoutubeIframe";
import { deletePost } from "../../../backend/redux/actions/postAction";

const SinglePostCard = ({
  id,
  user,
  name,
  text,
  date,
  image,
  userId,
  videoUrl,
  comments,
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
    <View style={styles.main}>
      <View style={styles.head}>
        <>
          <Image source={{ uri: image }} style={styles.profilePicture} />
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.date}>{dayjs(date).format("DD-MMM-YY")}</Text>
          </View>

          {userId === user.id && (
            <TouchableOpacity onPress={deleteAlert}>
              <FontAwesome name="trash-o" size={20} style={styles.icon} />
            </TouchableOpacity>
          )}
        </>
      </View>
      <View style={styles.body}>
        <Hyperlink linkStyle={{ color: "#2980b9" }}>
          <Text selectable={true} style={styles.bodyText}>
            {text}
          </Text>
        </Hyperlink>
        {videoUrl && <YoutubeIframe videoUrl={videoUrl} />}
      </View>
      <View style={styles.footer}>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="comment-o" size={20} style={styles.icon} />
          {comments && <Text>{comments.length}</Text>}
        </View>

        <Feather name="share" size={20} style={styles.icon} />
      </View>
    </View>
  );
};
const mstp = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mstp, { deletePost })(SinglePostCard);
