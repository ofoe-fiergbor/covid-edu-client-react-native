import React, { useState } from "react";
import SinglePostCard from "../../components/singlePostCard/SinglePostCard";
import BackButton from "../../components/backButton/BackButton";
import FormInput from "../../components/FormInput/FormInput";
import Comment from "../../components/comment/Comment";
import { View, TouchableOpacity, FlatList, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import styles from "./style";
import { addNewComment } from "../../../backend/redux/actions/postAction";

const SinglePost = ({ route, navigation, user, addNewComment }) => {
  const {
    name,
    date,
    text,
    image,
    id,
    comments,
    videoUrl,
    userId,
  } = route.params;

  

  const [comment, setComment] = useState("");

  const handleTextChange = (value) => setComment(value);

  const submit = () => {
    if (comment.trim() !== "") {
      let commentId =
        "COVID_REAL_COMMENT" +
        Math.random().toString(36).substr(2, 9) +
        "COVID_EDU_APP_POST";

      addNewComment({ id, commentId, comment, user });
      setComment("");
      backPress();
    }
  };

  const backPress = () => {
    navigation.goBack();
  };
  return (
    <React.Fragment>
      <BackButton onPress={backPress} />
      <View style={styles.container}>
        <SinglePostCard
          id={id}
          name={name}
          date={date}
          text={text}
          image={image}
          userId={userId}
          comments={comments}
          videoUrl={videoUrl}
          navigation={navigation}
        />
        <View style={styles.comments}>
          {comments ? (
            <FlatList
              data={comments}
              keyExtractor={(item) => item.commentId}
              renderItem={({ item }) => {
                return (
                  <Comment
                    name={item.user.name}
                    userId={item.user.id}
                    date={item.timestamp}
                    text={item.comment}
                    image={item.user.photoUrl}
                  />
                );
              }}
            />
          ) : null}
        </View>
      </View>
      <View style={styles.commentInputContainer}>
        <FormInput
          value={comment}
          autoFocus={false}
          textInputStyle={styles.commentInput}
          onChangeText={(text) => handleTextChange(text)}
          placeholder={`Hi ${user.givenName}, add your comments here! `}
        />
        <TouchableOpacity onPress={() => submit()}>
          <Ionicons name="ios-send" size={20} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

const mstp = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mstp, { addNewComment })(SinglePost);
