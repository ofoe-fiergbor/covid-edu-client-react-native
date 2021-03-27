import React from "react";
import { View, Text, FlatList, StatusBar } from "react-native";
import { colors, dimensions } from "../../../constants";
import PostDetail from "../PostDetail/PostDetail";
import styles from "./styles";

const AllPosts = ({ route, navigation }) => {
  const { post, user } = route.params;

  let ownPosts = [];

  post.map((i) => i.userId === user?.id && ownPosts.push(i));

  // console.log(ownPosts);
  return (
    <View style={{ flex: 1, backgroundColor: colors.whiteGradient }}>
      <Text style={styles.postHead}>Your Posts</Text>
      <FlatList
        data={ownPosts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          padding: dimensions.padding.xs,
        }}
        renderItem={({ item }) => {
          return (
            <PostDetail
              id={item.id}
              name={item.name}
              date={item.date}
              text={item.post}
              image={item.photoUrl}
              userId={item.userId}
              navigation={navigation}
              videoUrl={item.videoUrl}
              comments={item.comments}
            />
          );
        }}
      />
    </View>
  );
};

export default AllPosts;
