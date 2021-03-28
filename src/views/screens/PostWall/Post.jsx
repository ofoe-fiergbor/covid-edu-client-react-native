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
import PostSkeleton from "../Skeleton/PostSkeleton";


const Post = ({ addNewPost, loading, post, getAllPosts, navigation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    getAllPosts();
  }, []);

  const onPostSubmit = () => {
    addNewPost();
    setIsModalOpen(false);
  };

  return (
    <React.Fragment>
      {isloading ? (
        <PostSkeleton />
      ) : (
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
                  id={item?.id}
                  name={item?.name}
                  text={item?.post}
                  userId={item?.userId}
                  date={item?.timestamp}
                  image={item?.photoUrl}
                  navigation={navigation}
                  comments={item?.comments}
                  videoUrl={item?.videoUrl}
                />
              );
            }}
          />

          <AddButton onPress={() => setIsModalOpen(true)} />

          <Modal transparent={true} visible={isModalOpen}>
            <PostModalContent onPostSubmit={onPostSubmit} />
          </Modal>
        </View>
      )}
    </React.Fragment>
  );
};
const mstp = (state) => {
  return {
    post: state.post.post,
    loading: state.post.loading,
  };
};

export default connect(mstp, { addNewPost, getAllPosts })(Post);

