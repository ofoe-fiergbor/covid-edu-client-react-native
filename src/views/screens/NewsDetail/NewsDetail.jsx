import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
class NewsDetail extends Component {
  render() {
    return (
      <View style={styles.main}>
          <ImageBackground
            source={{ uri: this.props.image }}
            style={styles.image}
            imageStyle={styles.imageBg}
          >
            <TouchableOpacity
              style={styles.share__button}
              onPress={() => this.props.article(this.props.url)}
            >
              <FontAwesome5 name="share" size={20} color="#fff" />
            </TouchableOpacity>
            <View style={styles.news__card__text__container}>
              <TouchableWithoutFeedback
                onPress={() => Linking.openURL(this.props.url)}
              >
                <View style={styles.newsContent}>
                  <Text numberOfLines={2} style={styles.newsHeader}>
                    {this.props.title}
                  </Text>
                  <Text numberOfLines={3} style={styles.mainNews}>
                    {this.props.summary}
                  </Text>
                  <View style={styles.bottomInfo}>
                    <Text style={styles.date}>{this.props.date}</Text>
                    <Text style={styles.source} numberOfLines={1}>
                      {this.props.source}
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </ImageBackground>
      </View>
    );
  }
}

export default NewsDetail;
