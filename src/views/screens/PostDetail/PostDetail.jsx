import React, { useState } from "react";
import dayjs from "dayjs";
import styles from "./styles";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { View, Text, Image, Animated } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

const PostDetail = ({ id, name, date, text, image, navigation, comments }) => {
  // console.log(comments)
  const [like, setLike] = useState(false);

  const addLike = () => {
    setLike(!like);
  };
  return (
    <Animated.View style={styles.card}>
      <View style={styles.cardInnerTop}>
        <View style={styles.cardHeadLeft}>
          <Image source={{ uri: image }} style={styles.image} />

          <View style={styles.userInfo}>
            <Text style={styles.userInfoName} numberOfLines={1}>
              {name}
            </Text>
            <Text style={styles.cardHeadRightDate}>
              {dayjs(date).format("DD-MMM-YY")}
            </Text>
          </View>
        </View>
      </View>

      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("singlePost", {
            name,
            date,
            text,
            image,
            id,
            comments,
          })
        }
      >
        <View style={styles.cardInnerMid}>
          <Text
            numberOfLines={3}
            selectable={true}
            style={styles.cardInnerMidText}
          >
            {text}
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.cardInnerButtom}>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="comment-o" size={20} style={styles.icon} />
          {comments && <Text>{comments.length}</Text>}
        </View>
        <TouchableOpacity onPress={() => addLike()}>
          <FontAwesome
            name={like ? "heart" : "heart-o"}
            size={20}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Feather name="share" size={20} style={styles.icon} />
      </View>
    </Animated.View>
  );
};

export default PostDetail;
