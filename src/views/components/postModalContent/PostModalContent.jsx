import React, { useState } from "react";
import styles from "./styles";
import Button from "../button/Button";
import { connect } from "react-redux";
import FormInput from "../FormInput/FormInput";
import { View, TouchableOpacity, Text } from "react-native";
import { addNewPost } from "../../../backend/redux/actions/postAction";

const PostModalContent = ({ onPostSubmit, addNewPost, user }) => {
  const [post, setPost] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleTextChange = (value) => setPost(value);
  const handleUrlChange = (value) => setVideoUrl(value);

  const submit = () => {
    if (post.trim() !== "") {
      let id =
        "COVID_REAL" +
        Math.random().toString(36).substr(2, 9) +
        "COVID_EDU_APP_POST";

      let urlRegex = new RegExp("^https://youtu.be/");

      if (!videoUrl.match(urlRegex) && videoUrl !== "") {
        alert(`Hi ${user.givenName}, Kindly enter a valid Youtube url!`);
      } else {
        addNewPost({
          id,
          post,
          videoUrl,
          name: user.name,
          userId: user.id,
          email: user.email,
          photoUrl: user.photoUrl,
        });

        onPostSubmit();
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cancelContainer}
        onPress={() => onPostSubmit()}
      >
        <Text style={styles.cancel}>X</Text>
      </TouchableOpacity>
      <FormInput
        placeholder="Tell your story..."
        value={post}
        multiline={true}
        numberOfLines={100}
        textInputStyle={styles.textBox}
        autoFocus={true}
        onChangeText={(text) => handleTextChange(text)}
      />
      <FormInput
        placeholder={`Hi ${user.givenName}, Paste Youtube video url here`}
        value={videoUrl}
        textInputStyle={styles.videoUrlTextBox}
        onChangeText={(text) => handleUrlChange(text)}
      />
      <Button
        buttonName="Post"
        textStyle={styles.textStyle}
        onPress={submit}
        isDisabled={post.trim() === "" ? true : false}
        buttonStyle={
          post.trim() === ""
            ? [styles.buttonStyle, styles.isDisabled]
            : styles.buttonStyle
        }
      />
    </View>
  );
};
const mstp = (state) => {
  return {
    user: state.auth.user,
  };
};
export default connect(mstp, { addNewPost })(PostModalContent);
