import firebase from "../../firebase/config";
import types from "../types";

export const addNewPost = (newPost) => {
  return async () => {
    if (newPost) {
      try {
        await firebase
          .firestore()
          .collection("post")
          .add({
            ...newPost,
            timestamp: new Date().toISOString(),
            comments: [],
          });
      } catch (error) {
        console.log(error);
      }
    }
  };
};

export const addNewComment = (newComment) => {
  return async () => {
    try {
      await firebase
        .firestore()
        .collection("post")
        .doc(newComment.id)
        .update({
          comments: firebase.firestore.FieldValue.arrayUnion({
            ...newComment,
            timestamp: new Date().toISOString(),
          }),
        });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllPosts = () => {
  return async (dispatch) => {
    firebase
      .firestore()
      .collection("post")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        let posts = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        dispatch({ type: types.GET_ALL_POSTS, payload: posts });
      });
  };
};
