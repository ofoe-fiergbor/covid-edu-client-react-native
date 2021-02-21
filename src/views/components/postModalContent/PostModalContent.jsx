import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import FormInput from "../FormInput/FormInput";
import Button from "../button/Button";
import styles from "./styles";
import { addNewPost } from "../../../backend/redux/actions/postAction";
import { connect } from "react-redux";

const PostModalContent = ({ onPostSubmit, addNewPost, user }) => {

  const [post, setPost] = useState("");

  const handleTextChange = (value) => setPost(value);

  const submit = () => {
    if (post.trim() !== "") {
      let id =
        "COVID_REAL" +
        Math.random().toString(36).substr(2, 9) +
        "COVID_EDU_APP_POST";

      addNewPost({
        id,
        post,
        name: user.name,
        userId: user.id,
        email: user.email,
        photoUrl: user.photoUrl,
      });

      onPostSubmit();
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
        value={post}
        multiline={true}
        numberOfLines={100}
        textInputStyle={styles.textBox}
        onChangeText={(text) => handleTextChange(text)}
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
