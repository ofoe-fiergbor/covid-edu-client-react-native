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
            likes: [],
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

// export const likePost = (like) => {
//   return async () => {
//     try {
//       await firebase
//         .firestore()
//         .collection("post")
//         .doc(like.id)
//         .update({
//           likes: firebase.firestore.FieldValue.arrayUnion({
//             ...like,
//             timestamp: new Date().toISOString(),
//           }),
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const unLikePost = (like) => {
//   return async () => {

//     try {
//       // console.log(object)
//       await firebase
//         .firestore()
//         .collection("post")
//         .doc(like.id)
//         .update({
//           likes: firebase.firestore.FieldValue.arrayRemove(like.likeId),
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const deletePost = (postId) => {
  return async () => {
    firebase
      .firestore()
      .collection("post")
      .doc(postId)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((err) => console.log(err));
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
