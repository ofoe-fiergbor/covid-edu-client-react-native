import React, { useState } from "react";
import { View, Text, Image, Animated } from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const PostDetail = ({ firstName, lastName, email, date, text, image }) => {
  const [like, setLike] = useState(false);

  const addLike = () => {
    setLike(!like);
  };
  return (
    <Animated.View style={styles.card}>
      {/* contains image, name, date and email */}
      <View style={styles.cardInnerTop}>
        <View style={styles.cardHeadLeft}>
          <Image source={image} style={styles.image} />
          <View style={styles.userInfo}>
            <Text style={styles.userInfoName} numberOfLines={1}>
              {firstName} {lastName}
            </Text>
            <Text style={styles.userInfoEmail}>{email}</Text>
          </View>
        </View>
        <View style={styles.cardHeadRight}>
          <Text style={styles.cardHeadRightDate}>{date}</Text>
        </View>
      </View>

      {/* contains text */}
      <View style={styles.cardInnerMid}>
        <Text style={styles.cardInnerMidText}>{text}</Text>
      </View>

      {/* contains icons */}
      <View style={styles.cardInnerButtom}>
        <FontAwesome name="comment-o" size={20} style={styles.icon} />
        <TouchableOpacity onPress={() => addLike()}>
          <FontAwesome name={like ? 'heart' : 'heart-o'} size={20} style={styles.icon} />
        </TouchableOpacity>

        <FontAwesome name="share-square-o" size={20} style={styles.icon} />
      </View>
    </Animated.View>
  );
};

export default PostDetail;
