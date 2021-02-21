import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import styles from "./style";
import dayjs from "dayjs";
import Hyperlink from "react-native-hyperlink";

const SinglePostCard = ({ name, date, text, image, comments }) => {
  return (
    <View style={styles.main}>
      <View style={styles.head}>
        <Image source={{ uri: image }} style={styles.profilePicture} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}>{dayjs(date).format("DD-MMM-YY")}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Hyperlink linkStyle={{ color: "#2980b9" }}>
          <Text selectable={true}>{text}</Text>
        </Hyperlink>
      </View>
      <View style={styles.footer}>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="comment-o" size={20} style={styles.icon} />
          {comments && <Text>{comments.length}</Text>}
        </View>
        <TouchableOpacity>
          <FontAwesome
            name="heart"
            // name={like ? "heart" : "heart-o"}
            size={20}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Feather name="share" size={20} style={styles.icon} />
      </View>
    </View>
  );
};

export default SinglePostCard;
