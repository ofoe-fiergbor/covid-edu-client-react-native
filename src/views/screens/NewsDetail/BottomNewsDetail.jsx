import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";

class BottomNewsDetail extends Component {
  render() {
    return (
      <View style={styles.bottomImageContainer}>
        <Image source={{ uri: this.props.image }} style={styles.bottomImage} />
        <View style={styles.bottomTextContainer}>
          <TouchableWithoutFeedback
            onPress={() => Linking.openURL(this.props.url)}
          >
            <Text numberOfLines={2} style={styles.bottomText}>
              {this.props.title}
            </Text>
            <Text numberOfLines={2} style={styles.bottomDescription}>
              {this.props.summary}
            </Text>
          </TouchableWithoutFeedback>
          <View style={styles.bottomInfo2}>
            <Text style={styles.bottomInfoDate}>{this.props.date}</Text>
            <TouchableOpacity
              style={styles.bottomIcon}
              onPress={() => this.props.article(this.props.url)}
            >
              <FontAwesome5 name="share" size={15} style={styles.bottomIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default BottomNewsDetail;
