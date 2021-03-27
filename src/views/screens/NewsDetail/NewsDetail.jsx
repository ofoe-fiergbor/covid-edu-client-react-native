import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const NewsDetail = ({ date, article, url, image, title, summary, source }) => {
  dayjs.extend(relativeTime);

  return (
    <View style={styles.main}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.image}
        imageStyle={styles.imageBg}
      >
        <TouchableOpacity
          style={styles.share__button}
          onPress={() => article(url)}
        >
          <Feather name="share" size={20} color="#fff" />
        </TouchableOpacity>
        <View style={styles.news__card__text__container}>
          <TouchableWithoutFeedback onPress={() => Linking.openURL(url)}>
            <View style={styles.newsContent}>
              <Text numberOfLines={2} style={styles.newsHeader}>
                {title}
              </Text>
              <Text numberOfLines={3} style={styles.mainNews}>
                {summary}
              </Text>
              <View style={styles.bottomInfo}>
                <Text style={styles.date}>{dayjs(date).fromNow()}</Text>
                <Text style={styles.source} numberOfLines={1}>
                  {source}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    </View>
  );
};

export default NewsDetail;
