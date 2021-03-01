import React from "react";
import { View, Text, FlatList, StatusBar } from "react-native";
import { colors, dimensions } from "../../../constants";
import AllPostDetails from "./AllPostDetails";
import styles from './styles'

const AllPosts = ({ route, navigation }) => {
  const { post, user } = route.params;

  let ownPosts = [];

  post.map((i) => i.userId === user?.id && ownPosts.push(i));


  // console.log(ownPosts);
  return (
    <View style={{ flex: 1, backgroundColor: colors.whiteGradient }}>
      <Text style={styles.postHead}>All Posts</Text>
     <FlatList
        data={ownPosts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          padding: dimensions.padding.xs,
        }}
        renderItem={({ item }) => {
          return (
            <AllPostDetails
              id={item.id}
              name={item.name}
              text={item.post}
              date={item.timestamp}
              image={item.photoUrl}
              userId={item.userId}
              navigation={navigation}
            />
          );
        }}
      />
    </View>
  );
};

export default AllPosts;
