import React, { useEffect, useState } from "react";
import {
  addNewPost,
  getAllPosts,
} from "../../../backend/redux/actions/postAction";
import PostModalContent from "../../components/postModalContent/PostModalContent";
import { FlatList, Modal, StatusBar, View } from "react-native";
import AddButton from "../../components/AddButton/AddButton";
import { colors, dimensions } from "../../../constants";
import PostDetail from "../PostDetail/PostDetail";
import { connect } from "react-redux";

const Post = ({ addNewPost, loading, post, getAllPosts, navigation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getAllPosts();
  }, []);

  const onPostSubmit = () => {
    addNewPost();
    setIsModalOpen(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.whiteGradient }}>
      <StatusBar auto />
      <FlatList
        data={post}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          padding: dimensions.padding.sm,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        renderItem={({ item }) => {
          return (
            <PostDetail
              id={item.id}
              name={item.name}
              text={item.post}
              date={item.timestamp}
              image={item.photoUrl}
              navigation={navigation}
              comments={item.comments}
            />
          );
        }}
      />

      <AddButton onPress={() => setIsModalOpen(true)} />

      <Modal transparent={true} visible={isModalOpen}>
        <PostModalContent onPostSubmit={onPostSubmit} />
      </Modal>
    </View>
  );
};
const mstp = (state) => {
  return {
    post: state.post.post,
    loading: state.post.loading,
  };
};

export default connect(mstp, { addNewPost, getAllPosts })(Post);
