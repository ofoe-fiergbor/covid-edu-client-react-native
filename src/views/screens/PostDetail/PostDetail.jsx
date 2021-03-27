import React, { useState } from "react";
import dayjs from "dayjs";
import relativeTime  from 'dayjs/plugin/relativeTime'
import styles from "./styles";
import { FontAwesome, Feather, SimpleLineIcons } from "@expo/vector-icons";
import { View, Text, Image, Animated, Alert } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Root, ActionSheet } from "native-base";
import { deletePost } from "../../../backend/redux/actions/postAction";
import YoutubeIframe from "../../components/youtubeIframe/YoutubeIframe";


import { connect } from "react-redux";

const PostDetail = ({
  id,
  name,
  date,
  text,
  user,
  image,
  userId,
  comments,
  videoUrl,
  navigation,
  deletePost,
}) => {

  dayjs.extend(relativeTime)

  var BUTTONS = [
    { text: "Delete Post", icon: "trash", iconColor: "red" },
    { text: "Cancel", icon: "close", iconColor: "#000" },
  ];
  var CANCEL_INDEX = 1;

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
        { text: "Yes", onPress: () => deletePost(id) },
      ],
      { cancelable: false }
    );
  const onPressOptions = () => {
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        title: "Post Options",
      },
      (buttonIndex) =>
        BUTTONS[buttonIndex].text === "Delete Post" && deleteAlert()
    );
  };

  let routeItems = {
    id,
    name,
    date,
    text,
    image,
    comments,
    videoUrl,
    userId,
  };
  return (
    <Root>
      <Animated.View style={styles.card}>
        <View style={styles.cardInnerTop}>
          <View style={styles.cardHeadLeft}>
            <Image source={{ uri: image }} style={styles.image} />

            <View style={styles.userInfo}>
              <Text style={styles.userInfoName} numberOfLines={1}>
                {name}
              </Text>
              <Text style={styles.cardHeadRightDate}>
                {dayjs(date).fromNow()}
              </Text>
            </View>
          </View>
          {user?.id === userId && (
            <TouchableOpacity onPress={onPressOptions}>
              <SimpleLineIcons name="options" size={20} style={styles.icon} />
            </TouchableOpacity>
          )}
        </View>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("singlePost", routeItems)}
        >
          <View style={styles.cardInnerMid}>
            <Text selectable={true} style={styles.cardInnerMidText}>
              {text}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        {videoUrl ? <YoutubeIframe videoUrl={videoUrl} /> : null}

        <View style={styles.cardInnerButtom}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("singlePost", routeItems)}
            >
              <FontAwesome name="comment-o" size={20} style={styles.icon} />
            </TouchableOpacity>
            {comments && <Text>{comments.length}</Text>}
          </View>

          <Feather name="share" size={20} style={styles.icon} />
        </View>
      </Animated.View>
    </Root>
  );
};
const mstp = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mstp, { deletePost })(PostDetail);
