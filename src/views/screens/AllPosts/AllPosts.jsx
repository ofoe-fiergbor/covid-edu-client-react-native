import React from "react";
import { View, Text } from "react-native";

const AllPosts = ({ route }) => {
  const { post, user } = route.params;

  let ownPosts = [];

  post.map((i) => i.userId === user.id && ownPosts.push(i));


  // console.log(ownPosts);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{user.name}</Text>
      <Text></Text>
    </View>
  );
};

export default AllPosts;
