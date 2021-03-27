import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";


const BottomNewsDetail =({ date, article, url, image, title, summary }) => {

  dayjs.extend(relativeTime);

  return (
      <View style={styles.bottomImageContainer}>
        <Image source={{ uri: image }} style={styles.bottomImage} />
        <View style={styles.bottomTextContainer}>
          <TouchableWithoutFeedback
            onPress={() => Linking.openURL(url)}
          >
            <Text numberOfLines={2} style={styles.bottomText}>
              {title}
            </Text>
            <Text numberOfLines={2} style={styles.bottomDescription}>
              {summary}
            </Text>
          </TouchableWithoutFeedback>
          <View style={styles.bottomInfo2}>
            <Text style={styles.bottomInfoDate}>{dayjs(date).fromNow()}</Text>
            <TouchableOpacity
              style={styles.bottomIcon}
              onPress={() => article(url)}
            >
              <Feather name="share" size={15} style={styles.bottomIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

export default BottomNewsDetail;
