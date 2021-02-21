import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import dayjs from "dayjs";
import Hyperlink from "react-native-hyperlink";

const Comment = ({ name, date, text, image }) => {
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
          <Text style={styles.bodyText} selectable={true}>
            {text}
          </Text>
        </Hyperlink>
      </View>
    </View>
  );
};

export default Comment;
